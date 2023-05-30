---
title: "Vital Terminal Tools"
date: 2022-11-26
tags: ["Linux"]
image: "/images/guides/terminal-commands/main.png"
type: "post"
url : "/guides/terminal-commands/"
showtableOfContents: true
description: "Discover vital terminal tools with our guide. Learn about essential command-line utilities to improve productivity and efficiency"
---

## [TLDR](https://github.com/tldr-pages/tldr)
A humane version of man pages. 

### Install 
```bash
pip3 install tldr
```

![screenshot of the step](/images/guides/terminal-commands/1.png)

## [AutoJump](https://github.com/wting/autojump)

A faster way to navigate your filesystem. Saves a lot of time.

### Install 

```bash
sudo apt install autojump
```

![screenshot of the step](/images/guides/terminal-commands/2.png)

## [Trash-CLI](https://github.com/andreafrancia/trash-cli)

Deletes the files to recycle bin in terminal. 

### Install
```bash
sudo apt install trash-cli
```

You can make a alias for "rm" to trash-cli by adding the following alias to ~/.bashrc file.

```bash
alias rm="trash" 
```
## [Ccrypt](https://github.com/wvangeit/ccrypt)

Secure encryption and decryption of files and streams.

### Install 
```bash
sudo apt install ccrypt
```

#### Encrypt

```bash
ccencrypt path-to-file
```

#### Decrypt
```bash
ccdecrypt path-to-file
```

that's it ✌🏽

-------------------------------------------------------------

{{< rawhtml >}} 
 
{{< /rawhtml >}}