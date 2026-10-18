import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blogs">;

/** Published posts, newest first. Drafts and future-dated posts show only in dev, like Hugo. */
export async function getPosts(): Promise<Post[]> {
  const now = Date.now();
  const posts = await getCollection("blogs", ({ data }) =>
    import.meta.env.DEV || (!data.draft && data.date.getTime() <= now),
  );
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/**
 * Close to Hugo's urlize, so existing /tags/ and /categories/ URLs keep working:
 * lowercases, turns whitespace into "-", and keeps letters, marks, digits and . _ - + ~.
 * Unlike Hugo it drops / \ # %, which would split or truncate the URL path.
 */
export const slugify = (s: string) =>
  s.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^\p{L}\p{M}\p{N}._+~-]+/gu, "");

/** Group terms (tags or categories) across posts. */
export function terms(posts: Post[], key: "tags" | "categories") {
  const map = new Map<string, { name: string; posts: Post[] }>();
  for (const post of posts)
    for (const name of post.data[key]) {
      const slug = slugify(name);
      if (!map.has(slug)) map.set(slug, { name, posts: [] });
      map.get(slug)!.posts.push(post);
    }
  return [...map.entries()].sort(([a], [b]) => a.localeCompare(b));
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
