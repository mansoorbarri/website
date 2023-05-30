---
title: "Redirects on Hugo"
date: 2023-03-13
tags: [Hugo]
image: "/images/guides/redirects-on-hugo/main.png"
url : "/guides/redirects-on-hugo/"
type: "post"
showtableOfContents: true
description: "Create redirects on Hugo with our guide. Follow our step-by-step instructions to ensure a seamless user experience and improve your website's SEO."
---

The Hugo Redirect Plugin is a Hugo plugin that allows you to create redirect rules for your website. It generates redirect rules by reading a CSV file that contains old URLs and their corresponding new URLs.

## Install Hugo-Redirect

### Add `hugo-redirect` as a submodule
```
git submodule add https://github.com/gcc42/hugo-redirect.git themes/hugo-redirect
```
### Add to .yaml or .toml
.yaml:
```
theme: ["hugo-redirect", "my-theme"]
```
.toml:
```
theme = ["hugo-redirect", "my-theme"]
```

#### Make a Redirect
go to your root directory for Hugo and run: 
```
hugo new redirect/[REDIRECT-NAME.md]
```

The format of the redirect should be: 
```
type = "redirect"
url = "/[URL-RELATIVE-TO-YOUR-SITE]"
redirect_to = "/[URL-LOCATION]"
redirect_enabled = true
```

#### Example
Redirect file for [mansoorbarri.com/github](https://mansoorbarri.com/github) is: 
```
+++
type = "redirect"
url = "/github"
redirect_to = "https://github.com/mansoorbarri"
redirect_enabled = true
+++
```
You can add as many redirects as you like using this method.

that's it <3

----

  