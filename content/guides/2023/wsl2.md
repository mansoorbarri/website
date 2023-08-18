---
title: "How to Install and Use WSL2 on Windows 10: A Step-by-Step Guide"
date: 2023-03-17
tags: [Windows]
image: "/img/guides/2023/wsl2/main.png"
url : "/guides/wsl2/"
type: "post"
showtableOfContents: true
description: "Learn how to install and use WSL2 on Windows 10 with our step-by-step guide. Run Linux applications natively on Windows with ease."
---

## Prerequisites
You need to enable the WSL feature by: 
- Open the Start menu and search for "Turn Windows features on or off."
- Scroll down and check the box next to "Windows Subsystem for Linux."
- Click "OK" and wait for the feature to be installed

## Install a Linux Distro
You can choose between variety of Linux Distributions for WSL however I recommend using Debian as explained [here](https://hepton.uk/blogs/why-linux/#which-distribution-should-i-choose)
 
To install Debian, open CMD or Powershell as admin and run: 

```
winget install -e --id Debian.Debian
```

## Setup 
- Open a Command Prompt window as an administrator.
- Type the following command and press Enter:
```
wsl --set-default-version 2
```
- Wait for the command to finish running.

## Start Using it 
Now that you have set up WSL2, you can start using it. To do this, follow these steps:

- Open the Start menu and search for the Linux distribution you installed.
- Click on the distribution to open it.
- Follow the prompts to set up your Linux environment.

that's it <3

----

  