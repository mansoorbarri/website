# mansoorbarri.com

My personal site: blog, projects and a [/hire](https://mansoorbarri.com/hire/) page. Built with [Astro](https://astro.build) + Tailwind, deployed to Cloudflare Workers.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321 (drafts are shown in dev)
npm run build     # outputs to dist/
```

## Write a new guide

```bash
npm run new -- "How to Set Up Tailscale" --tags Linux,Networking --category Linux
```

This creates `content/blogs/<year>/<slug>.md` with the front matter filled in, plus an image folder at
`public/img/guides/<year>/<slug>/`. Add `--draft` to keep it off the live site until you flip `draft: false`.

Front matter:

| field         | required | notes                                         |
| ------------- | -------- | --------------------------------------------- |
| `title`       | yes      |                                               |
| `url`         | yes      | the page's permanent URL, e.g. `/my-guide/`   |
| `date`        | yes      | future-dated posts are left out of builds before that date; rebuild on or after it to publish |
| `description` | no       | shown under the title and in search results   |
| `tags`        | no       |                                               |
| `categories`  | no       |                                               |
| `draft`       | no       | defaults to `false`                           |

Hugo shortcodes from the old site still work: `{{< rawhtml >}}…{{< /rawhtml >}}`, `{{< youtube ID >}}` and
`{{< video src="…" caption="…" >}}`. Plain HTML also works directly in markdown now.

## Edit the site

- Name, hero, nav, projects, socials: `src/site.ts`
- Case studies on /hire: `src/content/work/*.md`
- Styles: `src/styles/global.css`
