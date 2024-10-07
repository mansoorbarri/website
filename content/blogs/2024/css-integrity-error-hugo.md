---
title: "CSS Integrity Error Hugo"
description: "How to fix CSS integrity error in Hugo. This usually happens when publishing your website using a Pages service on Cloudflare or GitHub."
date: "2024-03-27"
url: "/css-integrity-error-hugo/"
draft: false
categories:
  - Linux
  - Windows
  - Android
tags:
  - Hugo
  - Cloudflare
---

# Fix CSS integrity error in Hugo

While developing multiple Hugo themes I ran into this issue where the CSS or the JS would not load on the deployed website, it does work on [localhost](http://localhost) when you run `hugo server` 

The issue is from your service providers’ side, providers like Cloudflare pages or GitHub pages store a cache version of your website. The cache version’s CSS integrity would be different to your latest CSS integrity which is why it would not load the CSS. A short term fix would be toclear the cache on your service providers dashboard. For Cloudflare: 

- Your pages site’s setttings
- Then go to *Builds & deployments*
- Under *Build cache* click on *clear cache*

For GitHub pages and other service providers, the steps would be similar. 

 To fix this permanently, clear out the *integrity* value like this:

![screenshot of the code with integrity removed](/img/guides/2024/css-integrity-error-hugo/code-screenshot.png)

-MB

