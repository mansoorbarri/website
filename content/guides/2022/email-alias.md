---
title: "Email Alias With Cloudflare"
date: 2022-02-17
tags: [Cloudflare, Email]
type: "post"
url : "/guides/email-alias/"
showtableOfContents: true
description: "Create email aliases with Cloudflare for enhanced privacy and organization. Follow our guide to set up aliases and simplify your email management"
---

## Brief

You can forward email with pretty much any domain provider but in this case I am using Cloudflare.

By the end of this article, you will be able to send and receive email from a custom email address that uses your domain name.

You will need to enable 2 Step verification on your google account for this to work.

## Step 1: Setup Cloudflare

The first step is to setup cloudflare so it can route email. In this case my domain is mansoor.cf and I will be routing test@mansoor.cf.

Open your cloudflare dash and go to the "Email" section from the sidebar

![SS of the step](/img/guides/2022/email-alias/1.png)

click "create address"

![ScreenShot of the step](/img/guides/2022/email-alias/2.png)

Under Custom address type the mail address you want, in this case I will be using test and click Save

![ScreenShot of the step](/img/guides/2022/email-alias/3.png)

## Step 2: Email Client Setup

## Gmail

Head over to the setting like so

![Screenshot of the step](/img/guides/2022/email-alias/4.png)

Under "Accounts and Import" go to "Add another email address" in the "Send mail as"

![Screenshot of the step](/img/guides/2022/email-alias/5.png)

Here enter the custom mail address as Email address

![Screenshot of the step](/img/guides/2022/email-alias/6.png)

Here enter your details in this order

SMTP Server: smtp.gmail.com

Port: 587

Username: mansoorbarrii@gmail.com

Password: <<app password>>

Username should be your main gmail. In my case its mansoorbarrii@gmail.com

![Screenshot of the step](/img/guides/2022/email-alias/7.png)

To get your app password go through these steps

1. Go to your [Google Account Settings](https://myaccount.google.com/). Go to App Passwords under Security.

![Screenshot of the step](/img/guides/2022/email-alias/8.png)

![Screenshot of the step](/img/guides/2022/email-alias/9.png)

From the 1st dropdown select "Mail" and "Other" from second

![Screenshot of the step](/img/guides/2022/email-alias/10.png)

You can type anything in custom name. I am going with test@mansoor.cf

![Screenshot of the step](/img/guides/2022/email-alias/11.png)

The yellow highlighted characters is your password

![Screenshot of the step](/img/guides/2022/email-alias/12.png)

**You may encounter this error**

![Screenshot of the error](/img/guides/2022/email-alias/14.png)

This happens becuase the page timed out. Try again with the same steps and it should work.

Verify your mail

![Screenshot of the error](/img/guides/2022/email-alias/13.png)

Enable the Mail alias and you are good to go

![Screenshot of the error](/img/guides/2022/email-alias/15.png)

## Hotmail/Outlook



- Go to {{< rawhtml >}} <a href="https://account.live.com/names/Manage?uaid=dbee175bc2864b5aa5db93b77d6e7d65" target="_blank" rel="noopener noreferrer">account.live.com/alias</a>{{< /rawhtml >}}  

- Sign in and click on "Add email address", under "Add an existing email address as a Microsoft account alias" type your email alias which you want. In my case it's test@mansoor.cf

- Click on "Add alias", on the next page click on "Verify and then click on the link from the verification link. 

## ThunderBird

Go to your account settings from the main page

![Screenshot of the step](/img/guides/2022/email-alias/16.png)

Click "Manage Identities"

![Screenshot of the step](/img/guides/2022/email-alias/17.png)

Add

![Screenshot of the step](/img/guides/2022/email-alias/18.png)

Last but not the least enter your details like so

![Screenshot of the step](/img/guides/2022/email-alias/19.png)

# Update
You might get the following error sometimes: 

![screenshot of the error](/img/guides/2022/sender-not-verified/2023.png)

Here is the guide to fix this: [/guides/sender-not-verified/](/guides/sender-not-verified/)

that’s it ✌🏽

-------------------------------------------------------------
{{< rawhtml >}} 
 
{{< /rawhtml >}}