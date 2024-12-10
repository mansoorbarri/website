---
title: "How to install Neovim on Debian the right way"
description: "Install Neovim the right way on Linux; specifically Debian."
date: "2024-04-14"
url: "/neovim-debian/"
draft: false
categories:
  - Linux
tags:
  - Debian 
  - Vim
---

Installing [Neovim](https://neovim.io) can be confusing as it is available on most distributions and on Snap store as well however, all those packages are quite old and will not work with various vim plugins like Lazyvim. 

Same goes for Debian, which I am using while learning Vim. This is the only way which works as of now an is quite easy. 

## Install Curl 
You need `wget` for this. It is installed on all system but if you don't have it, you can install it using: 

```
sudo apt install wget 
```
## Download Neovim App Image
Here we will use `wget` to pull Neovim's app image: 

```bash
wget https://github.com/neovim/neovim/releases/latest/download/nvim.appimage
```
once done, make the app image executable: 

```bash
chmod +x ./nvim.appimage 
```
Now move the app image binary to `/usr/local/bin` so you can run it from `$PATH`: 

```bash
sudo mv nvim.appimage /usr/local/bin/nvim
```
now you can run neovim with `nvim` command and install plugins normally.

## Uninstalling 
when you want to uninstall Neovim, just run this command: 

```bash
sudo rm -R /usr/local/bin/nvim
```
Happy coding! 

-MB 
