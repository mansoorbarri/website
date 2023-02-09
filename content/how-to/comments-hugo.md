---
title: "Comments on HUGO site"
date: 2022-11-21
tags: ["HUGO"]
image: "/images/how-to/comments-hugo/main.png"
type: "post"
draft: false
showtableOfContents: true
---

Here I'm using Hugo theme called [GoKarna](https://github.com/526avijitgupta/gokarna) but you can pretty much do this with any Hugo theme.

## HUGO Setup

make a file with the name "rawhtml.html" in /layours.shortcodes directory of your theme and put the follwing line. 

**if your don't have the shortcodes directory, you can make one.*

```html
{{.Inner}}
```

## Utterances Setup 

Add utterances to your github repository from [github.com/apps/utterances](https://github.com/apps/utterances)

then get your HTML code from [utteranc.es](https://utteranc.es)

## Add comments

Now add the raw html tag followed by your HTML code from utteranc.es and end it with closing html tag.

It will look something like this: 

![](/images/how-to/comments-hugo/1.png)

that's it ✌🏽

-------------------------------------------------------------

{{< rawhtml >}} 
<script src="https://utteranc.es/client.js"
        repo="mansoorbarri/website"
        issue-term="title"
        theme="dark-blue"
        crossorigin="anonymous"
        async>
</script>
{{< /rawhtml >}}