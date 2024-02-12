---
title: "Coming Soon Hugo Theme"
type: "post" 
showtableOfContents: "true"
tags: ["hugo"]
date: "2023-09-03"
---

![screenshot of the site](https://raw.githubusercontent.com/mansoorbarri/coming-soon/main/images/screenshot.png)

Coming soon is a hugo theme which can be used before publishing your actual site to build hype or to just have something on your domain while you develop your site.

***Note: all variables in `{ }` should be personalised***

## Setup 
Make a new hugo site
```
hugo new site {sitename}
cd {sitename}
git clone https://github.com/mansoorbarri/coming-soon.git themes/coming-soon
```

Copy `examplesite/config.toml` files to yours for quick setup
```
cp themes/coming-soon/examplesite/config.toml . 
```

Open `config.toml` and edit as per your liking. 

## Guide 
### Basics
```toml
baseURL = "https://cshugo.mansoorbarri.com"
languageCode = 'en-us'
theme = "coming-soon"

[params]
    title = "Coming Soon Hugo" 
    description = "A simple countdown"
    favicon = ""
    message = "COMING SOON!" 
    release = "Jan 30, 2024" 
    background = "" 


```

- `title`: Shows up on the top left of the webpage as well as the tab title
- `description`: Shows up to the bottom left as well as the `meta` description
- `favicon`: Favicon icon for your website, default file is `/static/favicon.ico`
- `message`: Default is "COMING SOON" however you can change this to whatever suits you
- `release`: The date **and/or** time of when your site will be release. The countdown will be towards this time and/or time. 
- `background`: The background video/image you want.

*Note: All `message`, `release` & `background` can be left empty if you want default values*

### Social Icons
You can add social icons on the bottom right to give updates to your audience and let them know about your presense on other platforms. 
```toml 
socialIcons = [
{name = "email", url = "example@example.com"},      
{name = "twitter", url = "https://twitter.com/"},    
{name = "facebook", url = "https://facebook.com/"},    
{name = "github", url = "https://github.com/"},    
{name = "instagram", url = "https://instagram.com/"},    
{name = "tiktok", url = "https://tiktok.com/"},    
]
```

You should remove links to socials which you don't want to mention. 

Now you can publish it to your host. 

### Twitter feed 
you can have your twitter feed as a way to update on your website. 

```toml
[params.twitter]
	enable = true  # enabled by default 
	username = "mansoorbarri" # enter your Twitter username here
```

## Performance 
![Screenshot of the results from Pages Insights](/img/downloads/comingsoonhugo/performance.png)

Thats it <3 

---
