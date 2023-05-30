---
title: "Hosting Your Static Website for Free with GitHub: A Comprehensive Guide"
date: 2022-04-12
tags: ["Hosting"]
type: "post"
url : "/guides/hosting/"
showtableOfContents: true
description: "Host your static website for free with GitHub using our comprehensive guide. Follow our step-by-step instructions to get your site up and running quickly"
---

## Disclaimer
There are many ways to host static website for free. In this guide we will use github as a hosting platform. Github can only host static websites*

## Prerequisites
* Github account
* Code for your website

## Main

### Step 1: Click the "+" icon and click "New repository"

![source](/img/guides/2022/hosting/2022.png)

### Step 2: Set basic info 

Keep a name for your repository. Adding '.github.io" at the end of your repo name is important

Make sure "Add a README" file is checked

"Create repository"

![source](/img/guides/2022/hosting/2022_1.png)

### Step 3: add your code

Upload your code like so

![source](/img/guides/2022/hosting/2022_2.png)

![source](/img/guides/2022/hosting/2022_3.png)

### Step 4: Enabling github pages

Go to settings > Pages

![source](/img/guides/2022/hosting/2022_4.png)

Select "main" as source and "save"

![source](/img/guides/2022/hosting/2022_5.png)

Your site domain will be given

### [optional] Step 5: Custom Domain

Enter your custom domain as shown and "save"

![source](/img/guides/2022/hosting/2022_6.png)

Add these DNS settings on your domain:

| Type	| Name      	| IP 	 		  	 |
|-------|---------------|--------------------|
| A 	| [domain-name] | 185.199.108.153	 |
| A  	| [domain-name] | 185.199.109.153	 |
| A 	| [domain-name] | 185.199.110.153	 |
| A 	| [domain-name] | 185.199.111.153	 |
| CNAME	| www			| [github-repo-name] |

Your DNS table should look something like this:

![source](/img/guides/2022/hosting/2022_7.png)

this DNS table is for [mansoor.cf](https://mansoor.cf) with [github](https://github.com/mansoorbarri/website)

that's it ✌🏽

-------------------------------------------------------------
{{< rawhtml >}} 
 
{{< /rawhtml >}}