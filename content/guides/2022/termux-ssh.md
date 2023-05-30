---
title: "SSH into Termux"
date: 2022-08-28
tags: ["Android"]
image: "/img/guides/2022/termux-ssh/main.png"
type: "post"
url : "/guides/termux-ssh/"
showtableOfContents: true
description: "Easily access your Termux system remotely by following our step-by-step guide to SSH into Termux. Start managing your system anytime, anywhere!"
---

Just do the following steps: 

## Install OpenSSH on Termux: 

```bash
pkg upgrade && pkg install openssh
```
## Setup a password for Termux:

```bash
passwd
```
## Get your username: 

```bash
whoami
```

## Start SSH server

```bash
sshd
```
## Connect!

From your computer ssh like usual; the default port Termux uses for SSH is 8022.

example:

my IP is 192.168.0.10

my username: u0_a231

so my command would be: 

```bash
ssh u0_a231@192.168.0.10 -p 8022
```

## Video

{{< rawhtml >}} 

<video width=100% muted autoplay loop>
    <source src="https://github.com/mansoorbarri/website/blob/main/images/termux-ssh/main.m4v?raw=true" type="video/webm">
        your browser doesn't support video tag.
</video>

{{< /rawhtml >}}

*Right click and check "Show all controls" to see video controls**

that's it ✌🏽

-------------------------------------------------------------
{{< rawhtml >}} 
 
{{< /rawhtml >}}