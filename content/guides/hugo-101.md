---
title: "Step-by-Step Guide on Using Hugo"
date: 2023-04-06
tags: [Hugo]
image: "/images/guides/hugo-101/main.webp"
type: "post"
showtableOfContents: true
description: "Learn how to use Hugo in this step-by-step guide. Create a beautiful website easily with Hugo and any Hugo theme."
---

## Install
The first step is to install Hugo on your computer. You can download the latest version from the Hugo website: https://gohugo.io/getting-started/installing/

### Commands: 
Windows: 
```powershell
winget install Hugo.Hugo.Extended
```

Linux (Debian based): 
```
sudo apt install hugo
```

## Create a new Hugo Site
Create a new Hugo site by running the following command in your terminal:

```
hugo new site mysite
```

This will create a new Hugo site in a folder called "mysite".

## Downlod the theme
For this guide, I will use the Tella theme 

You can download the Tella theme from the Github repository: https://github.com/opera7133/tella. You can either clone the repository using Git or download the zip file and extract it.

I will be cloning so the command will be: 
```
git clone https://github.com/opera7133/tella themes/tella
```

This will clone the theme to ```/themes/tella``` when the git command is ran from the root of the hugo site ([```mysite```](/guides/hugo-101/#create-a-new-hugo-site))

## Configure your site
In the root directory of your Hugo site, create a new file called config.toml and add the following content:

```makefile
baseURL = "/"
title = "My Hugo Site"
theme = "tella"
```
You can also configure other options in this file, such as the language, the copyright notice, and the navigation menu.

### Create content
Create new content by running the following command in your terminal:
```
hugo new {content-type}/{content-name}.md
```

Replace "{content-type}" with the type of content you want to create (e.g., post, page, project), and {content-name} with the name of your content (e.g., my-first-post).

****Note: ```content-type``` depends on what your theme supports and what is the name of the content type itself.***

This will create a new Markdown file in the content folder of your site, with some basic front matter that you can edit to add your own content.

## Preview your site
To preview your site, run the following command in your terminal:
```
hugo server
```

This will start a local web server that you can access in your web browser at "http://localhost:1313/". You should see your Hugo site with the Tella theme applied.

## Theme customization 
You can customize the Tella theme by editing the files in the ```layouts``` and ```static``` folders of the theme. For example, you can change the colors, the fonts, the layout, and the content of the theme.

## Build your site
When you are ready to publish your site, run the following command in your terminal:
```
hugo
```
This will generate a static website in the ```public``` folder of your site, which you can upload to your web hosting service or your own server.

that's it <3

----

{{< rawhtml >}} 
<script src="https://utteranc.es/client.js"
        repo="mansoorbarri/website"
        issue-term="title"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
{{< /rawhtml >}}