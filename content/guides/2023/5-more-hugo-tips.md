---
title: "5 More Hugo Tips"
date: 2023-09-06
tags: [hugo]
url: "/guides/5-more-hugo-tips/"
type: "post"
showtableOfContents: true
description: "5 more things that you should know about hugo which will make you much more efficient when working with the best static site generator"
---

### Context 
Quite a while ago I made a post about [5 Hugo Features You Should Be Using](/guides/hugo-tips) however, I have compiled a few more tips which you might know or might not. 

## List
- Serve Drafts 
- Serve Future posts
- Limit Summary 
- Custom `public` folder 

## Serve Drafts
You can serve posts which are in drafts with a simple option with your normal hugo command like so: 
```
hugo server -D
```
**or** 
```
hugo -F 
```

- `-D` allows it to serve posts which are in drafts 

## Serve Future posts 
Similar to serving drafts, you can serve posts which are dated at a later date by `hugo server -F` or `hugo -F` 

Additionally, you can combined both to be `hugo server -FD` or `hugo -FD` serving both, future and drafts posts.

## Limit Summary 
Some themes have `/blogs/` with blog title and as well as summary which is first few lines from the blog itself. You have no way of controlling this except use `<!--more-->` after you have done writing your "summary" or first few lines that you wanna show as the summary.

For example, this blog has the following code: 
![screenshot of the code](/img/guides/2023/5-more-hugo-tips/summary-limiter-code.png)


The output will be: 
![Screenshot of the output](/img/guides/2023/5-more-hugo-tips/summary-limiter.png)

As you can see, the summary stops before `<!--more-->`

## Change public directory
you can change the `public` directory where hugo compiles your website. This can be helpful when hosting your website on the same machine. 

Command: `hugo -d {custom-dir}`

that's it <3

----

  
