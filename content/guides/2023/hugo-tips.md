---
title: "5 Hugo Features You Should Be Using "
date: 2023-08-28
tags: [Hugo]
url: "/guides/hugo-tips/"
type: "post"
showtableOfContents: true
description: "A list of things you should be doing for a better and safer Hugo website."
---

## list
- Manage URLs 
- Turn of `/tags/` & `/categories/`
- HTML in .md files
- Comments 
- Hugo on localhost

## URLs 
You can manage post/pages URLs by adding `url:` in your frontmatter. For example, for this guide the front matter looks something like this: 
```yaml
---
title: "10 Hugo Features You Should Be Using "
date: 2023-08-28
tags: [Hugo]
url: "/guides/hugo-tips/"
type: "post"
showtableOfContents: true
description: "A list of things you should be doing for a better and safer Hugo website."
---
```

The URL of the post will be `/guides/hugo-tips/` despite the directory being `/guides/2023/hugo-tips`

This can help with SEO and making the URLs hugam readable. 

## Disable Taxonomy
You can disable `/tags/` & `/categories/` by adding the following in your `config.toml`:
```toml
disableKinds = ["taxonomy", "term"]
```

You can also disable taxonomy for a build like so: 
```toml 
hugo --disableKinds=taxonomy,term
```
or 
```toml
hugo server --disableKinds=taxonomy,term
```

## HTML code in posts
You should be able to add HTML code on your site by default however some themes are a bit old and might not support html code by default. To over come that, you can add the following code in `/layouts/shortcodes/rawhtml.html`:
```html 
{{.Inner}}
```
Using this you can make various other customisation to your content like coloured text and adding comments to your hugo site.

## Comments
You can add comments to any static site including hugo using Utterances as explained before at [/guides/comments-hugo/](/guides/comments-hugo/)

In summary, you can add your code from Utterances whereever you need a comment section: 
![Screenshot of code to add comments](/img/guides/2022/comments-hugo/1.png)

## Hugo on Localhost
This can be helpful when working in a team and publishing live ammendments to your localhost, which then can be available to the internet using port forwarding.

Code: 
```
hugo server --bind [IP-ADD] --baseURL http://[IP-ADD]
```

Here, `[IP-ADD]` is your local IP address.

that's it <3

----

  