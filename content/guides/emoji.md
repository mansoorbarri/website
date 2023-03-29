---
title: "Emoji Support in Linux"
date: 2023-01-27
tags: [Linux]
image: "/images/how-to/emoji/main.png"
type: "post"
showtableOfContents: true
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

{{< rawhtml >}} 
<script src="https://utteranc.es/client.js"
        repo="mansoorbarri/website"
        issue-term="title"
        theme="github-dark"
        crossorigin="anonymous"
        async>
</script>
{{< /rawhtml >}}