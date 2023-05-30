---
title: "Emoji Support in Linux"
date: 2023-01-27
tags: [Linux]
image: "/images/guides/emoji/main.png"
url : "/guides/emoji/"
type: "post"
showtableOfContents: true
description: "Get emoji support in Linux with our simple guide. Follow our steps to add emojis to your system and enhance your messaging and communication experience."
---

## Install 
This allows you to display most emojis, but some will not display properly, so you must add these settings to ```/etc/fonts/conf.d/68-color-emoji.conf``` 

```
sudo curl -o /etc/fonts/conf.d/68-color-emoji.conf https://gist.githubusercontent.com/alejandro097/9f656610ea3497ebc4f639c84094e3e8/raw
```
*You might have to make this file**

```
sudo apt update && sudo apt install noto-fonts-emoji -y
```

that's it <3

---

  