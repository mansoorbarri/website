import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { getPosts, terms } from "../lib/posts";

export async function GET({ site }: APIContext) {
  const posts = await getPosts();
  const work = await getCollection("work");
  const paths = [
    "/", "/blogs/", "/hire/", "/tags/", "/categories/",
    ...posts.map((p) => p.data.url),
    ...work.map((w) => `/hire/${w.id}/`),
    ...terms(posts, "tags").map(([t]) => `/tags/${t}/`),
    ...terms(posts, "categories").map(([c]) => `/categories/${c}/`),
  ];
  const urls = paths.map((p) => `<url><loc>${new URL(p, site)}</loc></url>`).join("");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { "Content-Type": "application/xml" } },
  );
}
