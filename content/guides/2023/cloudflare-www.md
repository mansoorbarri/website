---
title: "Redired WWW to Cloudflare Pages"
date: 2023-05-22
tags: [Cloudflare]
image: "/img/guides/2023/cloudflare-www/main.webp"
url : "/guides/cloudflare-www/"
type: "post"
showtableOfContents: true
description: "Learn how to make a www subdomain redirect to Cloudflare pages."
---

### Steps
- Login to [Cloudflare dashboard](https://dash.cloudflare.com/) and go to your domain's DNS. 
- Create a DNS A record for `www` subdomain with the value of `192.0.2.1`

| Type            | Name             | Value        |
|-----------------|------------------|--------------|
| A               | www              | 192.0.2.1

- Now go to Account Home > Bulk Redirects > Create a new Bulk Redirects list > Create new lst 
- In the content type, select Redirect.
- Add your redirect Source URL and Target URL. Your target URL must include `https://` before the apex domain.
- Select **Edit parameters** > select **Preserve query string**, **Subpath matching** and **Preserve path suffix.**
- Select **Add to list**.
- Go to **Bulk Redirects** > **Create Bulk Redirects** > **select your list** > **Save and Deploy**.

### Cloudflare Docs
https://developers.cloudflare.com/pages/how-to/www-redirect/

that's it <3

----

  
