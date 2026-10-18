import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPosts } from "../lib/posts";
import { site } from "../site";

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: site.title,
    description: site.description,
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: p.data.url,
      categories: p.data.tags,
    })),
  });
}
