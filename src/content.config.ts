import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { hugoLoader } from "./lib/hugo-loader";

// Accept `tags: Linux` as well as `tags: [Linux]`.
const list = z.preprocess(
  (v) => (v == null ? [] : Array.isArray(v) ? v : [v]),
  z.array(z.coerce.string()),
);

const blogs = defineCollection({
  loader: hugoLoader({ base: "./content/blogs" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    url: z.string().regex(/^\/.*\/$/, "url must start and end with /"),
    draft: z.boolean().default(false),
    tags: list,
    categories: list,
  }),
});

const work = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    period: z.string(),
    stack: z.array(z.string()),
    live: z.string().url().optional(),
    source: z.string().url().optional(),
    order: z.number(),
  }),
});

export const collections = { blogs, work };
