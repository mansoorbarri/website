---
title: "Migrate Hugo Website from Cloudflare Pages to Worker"
description: "A guide through the painful process of migrating from Cloudfalre Pages to Workers for your Hugo Website."
date: "2025-06-12"
url: "/pages-to-workers-cf/"
draft: false
categories: 
  - Website 
tags:
  - Hugo
  - Cloudfalre
---

Cloudflare announced that they will be moving off their Pages product and continue with Workers instead. Pages will be there but just maintaining it till end of life.

Workers is a bit complicated than the easy-to-use Pages. You will need to setup a few things before the site is live and running. 

## Setup
What you will need is a `wrangler.toml` in the root of your site. It should have `name` and `compatibility_date`, but we will add a few more things to make it compatible with Hugo. 

```toml
name = "website"
compatibility_date = "2025-06-12"

[assets]
directory = "./public"
```

- `name`: the name is just name of the worker. I have it same as the my repository as it keeps things consistant.
- `compatibility_date`: set this to the current date.
- `directory`: this is the directory which will be the root of your website once built. in Hugo's case, its the `/public/` directory. 

Push this to your repository and continue on CF Dashboard: https://dsah.cloudflare.com

Once in your dashboard:
- go to "Compute (Workers)" > "Workers & Pages" from the right sidebar.
- "Create" > choose where you want to import your source code from. *import from respository* in my case.
- everything should be fine except add `hugo` in "Build command". *note: this is the command which will be used to trigger the site build*
- "Save and Deploy"

That should trigger the first build using workers. You can go in settings and setup other things like custom domains. This should be easy and similar to Pages settings.
