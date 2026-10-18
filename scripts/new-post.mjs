#!/usr/bin/env node
// Usage: pnpm new "My Guide Title" [--tags Linux,Arch] [--category Linux] [--draft]
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { parseArgs } from "node:util";

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    tags: { type: "string", default: "" },
    category: { type: "string", default: "" },
    draft: { type: "boolean", default: false },
  },
});

const title = positionals.join(" ").trim();
if (!title) {
  console.error('Usage: pnpm new "My Guide Title" [--tags Linux,Arch] [--category Linux] [--draft]');
  process.exit(1);
}

const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
if (!slug) {
  console.error(`Couldn't make a URL slug from "${title}". Use at least one letter or number.`);
  process.exit(1);
}
const today = new Date().toISOString().slice(0, 10);
const year = today.slice(0, 4);
const file = `content/blogs/${year}/${slug}.md`;
const images = `public/img/guides/${year}/${slug}`;
const yamlList = (s) => s.split(",").map((t) => t.trim()).filter(Boolean).map((t) => `  - ${t}`).join("\n");

if (existsSync(file)) {
  console.error(`${file} already exists`);
  process.exit(1);
}

mkdirSync(`content/blogs/${year}`, { recursive: true });
mkdirSync(images, { recursive: true });
writeFileSync(
  file,
  `---
title: ${JSON.stringify(title)}
description: ""
date: "${today}"
url: "/${slug}/"
draft: ${values.draft}
categories:
${yamlList(values.category) || "  - Linux"}
tags:
${yamlList(values.tags) || "  - Linux"}
---

Intro goes here.

## Step 1

![screenshot](/img/guides/${year}/${slug}/step-1.png)
`,
);

console.log(`created ${file}`);
console.log(`images go in ${images}/ (reference them as /img/guides/${year}/${slug}/name.png)`);
