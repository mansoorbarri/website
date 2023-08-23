---
title: "Ahrefs: The SEO Speacialist"
date: 2023-08-23
tags: [Website]
url: "/guides/ahrefs/"
type: "post"
showtableOfContents: true
description: "Learn about the tool Ahref and how you can use it to better your SEO and site errors."
---

## Context 
I have been using Ahrefs for almost a year now which lead to my site (mansoorbarri.com) being the top 3 for the keyword "Mansoor Barri" on Google & DuckDuckGo. 

## Ahrefs Setup 
### Sign Up 
- Go to https://Ahrefs.com/signup/ 
- Follow the signup instructions
- If plan is asked, select the free plan

### Connecting Your Site
Verification methods could include adding a meta tag to your website's HTML, uploading a verification file to your server, or modifying your DNS records. I prefer to add DNS records as uploading files to verify might slow down your website; potentially ruining your SEO. 

- Follow the intruction to verify via DNS
- Turn `Run first crawl now` on 

## Errors & Issues
Once your first crawl has finished, click on the % and go to `All issues` and filter the results by clicking on `Importance` and selecting `Error`

- Click on one of the erros and look for which web page is causing the error and which element of the page is affected and try to fix it. 
- Once done, choose another error and try to fix that
- Continue till you have fixed all the errors and then start another crawl by clicking `New crawl` on the top right-hand side

### Example
![Screenshot of a site showing three errors](/img/guides/2023/ahrefs/errors.png)

Here you can see that I have three errors, I will go with `Meta refresh redirect` 

![Screenshot of error details](/img/guides/2023/ahrefs/errors-detail.png)

Here it shows that there are 3 links which redirect the user using `meta redirect` this affects SEO since its slow and causes the use to leave your website. 

I can fix this by removing the redirect pages and redirecting the use using Cloudflare's redirect feature as it doesn't use `Meta refresh`

Once you have fixed all the "errors", run another crawl and look for any other errors which are not fixed or any new errors. Repeat the cycle until you have 95-100% on site audit.

that's it <3

----

  