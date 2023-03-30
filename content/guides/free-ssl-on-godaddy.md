---
title: "Get a Free SSL Certificate for Your GoDaddy Subdomain using SSL Certificate Generator"
date: 2023-03-27
tags: [Hosting]
image: "/images/guides/free-ssl-godaddy/main.png"
type: "post"
showtableOfContents: true
---

## Prerequisites
GoDaddy Windows Hosting: This guide assumes that you are using GoDaddy's Windows Hosting service to host your website. If you are using a different hosting provider or operating system, the steps may vary.

## Step 1: Generate your SSL certificate
- Navigate to https://punchsalad.com/ssl-certificate-generator/ in your web browser.
- Enter your subdomain and email address, then click "Generate Certificate."
- Follow the prompts to verify your ownership of the domain via DNS. This typically involves creating a TXT record in your DNS settings with a provided code.
- Once verification is complete, you will be able to download your SSL certificate.

## Step 2: Apply your SSL certificate to your GoDaddy subdomain
- Log in to your GoDaddy account and navigate to your domain settings.
- Click on "SSL/TLS" and then "Manage" to access your SSL settings.
- Copy and paste the contents of your primary cert file provided by the SSL certificate generator into the appropriate box.
- Save your SSL settings.
- Now go to your hosting settings for your subdomain and select your added SSL Certificate.


that's it <3

----

{{< rawhtml >}} 
<script src="https://utteranc.es/client.js"
        repo="mansoorbarri/website"
        issue-term="title"
        theme="github-dark"
        crossorigin="anonymous"
        async>
</script>
{{< /rawhtml >}}