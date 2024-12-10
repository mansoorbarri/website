---
title: "How To Use Cloudflare & GitHub to Host Your Static Site"
date: 2023-02-22
categories: ["Website"]
tags: ["Cloudflare", "GitHub"]
url : "/guides/cloudflare-hugo/"
type: "post"
showtableOfContents: true
description: "Host your static site with Cloudflare and GitHub. Follow our guide for easy setup and get your site online quickly!"
---

## Context
I've been using Hugo incorrectly by hosting only the `public/` on github and then using Cloudflare's nameservers on my domain, but there's a better way that's pretty neat.

## Advantage Of Doing This 
The main benefit is that you have version control over your raw `.md` files, and it takes up less storage space because you are only storing raw files, while the html files are stored with Cloudflare.

## Prerequisites
Create a new repository or remove `public/` files from an existing repository, then add your hugo files and proceed with the steps below.

## Steps
- **Make a new Cloudflare Pages project as follows:** Go to the Cloudflare Pages dashboard and press the "Create a Project" button. Choose a name for your project, a GitHub repository, and the branch that will contain your Hugo-generated static files.

- **Configure your build settings:** In the project settings, configure your static site's build settings. You can use the default build settings or customise the build process to meet your specific requirements. For example, you might want to specify your site's base URL or change the output directory.

- **Build your site:** After you've configured your build settings, Cloudflare Pages will build your site for you using Hugo. Depending on the size of your site, this could take a few minutes.

- **Preview your site:** Once the build process is complete, you can preview your site in the project dashboard by clicking the "Preview" button. This will open your site in a new tab, allowing you to double-check that everything is as it should be.

- **Deploy your site:** If everything looks good, click the "Deploy" button in the project dashboard to send your site to production. Cloudflare Pages will deploy your site to its global network of servers automatically, ensuring that it is fast and dependable for your visitors.

- **Configure custom domains:** You can configure a custom domain for your site in the project settings. Cloudflare Pages supports a wide range of domain name providers, so you should have no trouble setting up your custom domain and ensuring that it is properly configured for your site.

## Extras
Because you are now using Cloudflare, you can remove all of the settings from GitHub Pages.

that's it <3

----

  