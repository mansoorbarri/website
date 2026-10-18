// Loads the Hugo-era markdown in content/ without modifying it.
// Hugo shortcodes ({{< rawhtml >}}, {{< youtube >}}, {{< video >}}) are
// swapped for placeholders before markdown rendering and restored afterwards,
// so the HTML they produce is never mangled by the markdown parser.
import { readFile } from "node:fs/promises";
import { glob } from "node:fs/promises";
import path from "node:path";
import { load as parseYaml } from "js-yaml";
import type { Loader } from "astro/loaders";

const FRONT_MATTER = /^\s*---\r?\n([\s\S]*?)\r?\n---\r?\n?/;
const SHORTCODE = /\{\{<\s*(\/?)(\w+)([^>]*?)\s*>\}\}/g;

function attrs(raw: string) {
  const named: Record<string, string> = {};
  for (const m of raw.matchAll(/(\w+)="([^"]*)"/g)) named[m[1]] = m[2];
  const positional = raw.replace(/(\w+)="[^"]*"/g, "").trim().split(/\s+/).filter(Boolean);
  return { named, positional };
}

const escape = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function renderShortcode(name: string, raw: string, file: string): string {
  const { named, positional } = attrs(raw);
  if (name === "youtube") {
    const id = named.id ?? positional[0];
    return `<div class="embed"><iframe src="https://www.youtube-nocookie.com/embed/${escape(id)}" title="YouTube video" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
  }
  if (name === "video") {
    const src = escape(named.src ?? "");
    const type = src.endsWith(".webm") ? "video/webm" : "video/mp4";
    const caption = named.caption ? `<figcaption>${escape(named.caption)}</figcaption>` : "";
    return `<figure><video controls muted preload="metadata" title="${escape(named.title ?? "")}"><source src="${src}" type="${type}"></video>${caption}</figure>`;
  }
  throw new Error(`Unknown shortcode "${name}" in ${file}`);
}

/** Replace shortcodes outside fenced code blocks with placeholder tokens. */
export function extractShortcodes(body: string, file: string) {
  const chunks: string[] = [];
  const token = (html: string) => `HUGOSC${chunks.push(html) - 1}X`;

  // Split on fenced code blocks so documented shortcodes stay literal.
  const parts = body.split(/^(\s*(?:```|~~~)[\s\S]*?^\s*(?:```|~~~)[^\n]*$)/m);
  const out = parts.map((part, i) => {
    if (i % 2 === 1) return part;
    // Paired shortcode: {{< rawhtml >}} ... {{< /rawhtml >}}
    part = part.replace(/\{\{<\s*rawhtml\s*>\}\}([\s\S]*?)\{\{<\s*\/rawhtml\s*>\}\}/g, (_, inner) => token(inner.trim()));
    return part.replace(SHORTCODE, (_, closing, name, raw) => {
      if (closing) throw new Error(`Unmatched closing shortcode "${name}" in ${file}`);
      return token(renderShortcode(name, raw, file));
    });
  });

  const restore = (html: string) =>
    html
      .replace(/<p>\s*HUGOSC(\d+)X\s*<\/p>/g, (_, n) => chunks[+n])
      .replace(/HUGOSC(\d+)X/g, (_, n) => chunks[+n]);

  return { body: out.join(""), restore };
}

export function hugoLoader({ base }: { base: string }): Loader {
  return {
    name: "hugo-markdown",
    async load({ store, parseData, renderMarkdown, generateDigest, config, watcher, logger }) {
      const root = new URL(base, config.root);
      const rootPath = root.pathname;

      async function loadFile(rel: string) {
        const file = path.join(rootPath, rel);
        const source = await readFile(file, "utf8");
        const match = source.match(FRONT_MATTER);
        if (!match) throw new Error(`Missing front matter in ${rel}`);
        const data = (parseYaml(match[1]) ?? {}) as Record<string, unknown>;
        const id = rel.replace(/\.md$/, "");
        const digest = generateDigest(source);
        if (store.get(id)?.digest === digest) return;

        const { body, restore } = extractShortcodes(source.slice(match[0].length), rel);
        const rendered = await renderMarkdown(body);
        rendered.html = restore(rendered.html);

        store.set({
          id,
          data: await parseData({ id, data, filePath: file }),
          body,
          filePath: path.relative(config.root.pathname, file),
          digest,
          rendered,
        });
      }

      store.clear();
      for await (const rel of glob("**/*.md", { cwd: rootPath })) await loadFile(rel);

      watcher?.add(rootPath);
      watcher?.on("all", async (event, changed) => {
        if (!changed.startsWith(rootPath) || !changed.endsWith(".md")) return;
        const rel = path.relative(rootPath, changed);
        if (event === "unlink") store.delete(rel.replace(/\.md$/, ""));
        else await loadFile(rel).catch((e) => logger.error(String(e)));
      });
    },
  };
}
