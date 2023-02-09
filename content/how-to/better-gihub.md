---
title: "Better Way To Use GitHub"
date: 2022-11-23
tags: ["GitHub"]
image: "/images/how-to/better-github/main.png"
type: "post"
draft: false
showtableOfContents: true
---

Commandline for Github is complicated and complex however a tool called gh makes git so much easier on commandline and makes using Github that much quicker and easy. 

## Install 

Debian
```bash
sudo apt install gh
```

Windows
```powershell
winget install -e --id Github.cli
```

## Setup 
```bash
gh auth login
```

Follow the prompts but choose SSH as authentication method.

## Set your repo to use GH auth

```bash
git remote set-url origin git@github.com:mansoorbarri/website.git
```

*change "mansoorbarri/website.git" to your repo name**

## Bash Alias

You can add aliases when using linux to make it much more alias, I have added the following lines in my `~/.bashrc`

```bash
gcom() {
	git add .
	git commit -m "$1"
	}
lazyg() {
	git add .
	git commit -m "$1"
	git push
}
```

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