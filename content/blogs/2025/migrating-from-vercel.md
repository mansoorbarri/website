---
title: "Migrate your NextJS app from Vercel to Cloudflare"
description: "Heres how to migrate your NextJS app from Vercel to CloudFlare."
date: "2025-09-30"
url: "/migrating-from-vercel/"
draft: false
categories: 
  - Devops 
tags:
  - Vercel
  - CloudFlare
  - NextJS
---

Using Cloudflare's dashboard is not for the weak, but sometimes its just better than Vercel; Here is how you can successfully move from Vercel to Cloudflare Workers.

## Setup
- First you need some dependencies: 
```node.js
pnpm add @opennextjs/cloudflare@latest
```

- then add wrangler to your project: 
```node.js
pnpm add -D wrangler@latest
```

- then you need to setup your `wrangler.toml` file, this should be in the root of your project: 
```jsonc
{
  "main": ".open-next/worker.js",
  "name": "docthing",
  "compatibility_date": "2025-03-25",
  "compatibility_flags": [
    "nodejs_compat"
  ],
  "assets": {
    "directory": ".open-next/assets",
    "binding": "ASSETS"
  },
  "observability": {
    "logs": {
      "enabled": true
    }
  }
}
```
> - `main` is the file that will be used to build your worker. keep this as it is.
> - `name` is the name of your project. 
> - `compatibility_date` is the date of the compatibility of your worker. keep this as it is.
> - `compatibility_flags` is the compatibility flags of your worker. keep this as it is.
> - `assets` is the assets that will be used to build your worker. keep this as it is.
> - `observability` is the observability of your worker. keep this as it is **if you want to use server logs**.

- now make another file in the root of your project named `open-next.config.ts`
```ts 
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig();
```

- add few more scrips in `package.json`:
```md
"preview": "opennextjs-cloudflare build && opennextjs-cloudflare preview",
"deploy": "opennextjs-cloudflare build && opennextjs-cloudflare deploy",
"cf-typegen": "wrangler types --env-interface CloudflareEnv cloudflare-env.d.ts"
```

## Cloudflare Dashboard Config
In your Cloudflare Dashboard, import your project and go to the worker settings. 

- Under "Build", add the `Build command`: 
```node.js
pnpm exec opennextjs-cloudflare build
```
- below that, add `Deploy command`: 
```node.js
pnpm exec opennextjs-cloudflare deploy
```
- add your environmental variables in `Variables and Secrets` which will be under "Build" as well
- add your environmental variables in "Variables and Secrets" - these will be used while building the site. *(yes you need to put in your variables twice. Welcome to cloudflare!)*

Now rebuild your initial deployment and everything should work fine! 

