---
title: "How to Add Custom HTML Code to Your Hugo Website"
date: 2023-03-29
tags: [Hugo]
image: "/img/guides/2023/html-in-hugo-markdown/main.png"
url : "/guides/html-in-hugo-markdown/"
type: "post"
showtableOfContents: true
description: "Customize your Hugo website with custom HTML code. Follow our guide for step-by-step instructions to enhance functionality and create a unique site"
---

### Create a new shortcode

To use the ```rawhtml``` shortcode, you'll first need to create a new shortcode file in your Hugo project. You can create a new shortcode file in the layouts/shortcodes/ directory. For example, you can create a file called rawhtml.html in the layouts/shortcodes/ directory.

In the ```rawhtml.html``` file, add the following line: 
```html
{{.Inner}}
```

### Usage
Now you can put your HTML within ```rawhtml``` shortcode for example the comments section for this post is present using a ```<script>``` tag. Code example:

![Code Example](/img/guides/2023/html-in-hugo-markdown/2023.png)

that's it <3

----

  