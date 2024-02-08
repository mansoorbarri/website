---
title: "The Ultimate Guide to Github On Linux"
date: 2024-02-08
categories:
  - Linux
  - Windows
tags:
  - GitHub
url: "/ultimate-gh-guide/"
type: "post"
showtableOfContents: true
description: "The only guide you will need to use Github on Linux."
---

## Context

There are many ways to use Github on Linux however some are worse than others. On this site, I have shared many ways but I wanted to make *an ultimate guide to Github on Linux*.

## Starters

Github desktop is quite popular in Windows as Windows doesn’t really have a good alternative however on Linux Github doesn’t even have an official application. Even then people use an unofficial version of their desktop application made by one of Github’s employeers: https://github.com/shiftkey/desktop.

What is it good for? 
nothing. I personally use it only when everything else fails. Some reasons why I don’t recommend using it:

- Commit size restrictions
- bad UI
- relatively  slow

## CLI

The only reasonable way to use Github on Linux would be using the CLI. Some find it daunting (*that’s when you use Github desktop*) but but but. With just a bit of learning curve, you can become a lot faster and better at pushing stuff on Github. 

For a normal CLI experience, you don’t need to install anything new except `git` which you probably have installed by default as most distributions come with it. Alternatively, you can use these commands to install it

```bash
sudo apt update && sudo apt install git -y
```

then you can commit & push code using: 

```bash
git init 
git add . 
git commit -m “{commit-message}” 
git push
```

yes it is that long and winded.

## GH

This is by far the best way to do anything to do with commits & pushing code to Github. It is available on Windows however I don’t really have good experiences with it. I still have it though and use it whenever I can. 

### What is gh though?

It is a cli version of Github, the application. You can pull, push, commit, do PRs and much more. && more importantly its faster than other ways. 

Personally, I have been using it just for a year which is weird because I don’t know how I lived without it. I use it with SSH login and I never have to deal with logins and other Github annoyances ever again. 

### okay, but how do you do this gh thing?

I have made various articles before however here is everything you have to do to gh with SSH: 

### Install GH

Debian

```bash
sudo apt install gh -y
```

Windows

```bash
winget install -e GitHub.cli
```

Mac

```bash
brew install gh
```

## Create SSH keys

```bash
ssh-keygen -t ed25519 -C "your-email"
```

Enter this command & go with default options. Then: 

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519.pub
```

### add ssh keys to github

- Use the following command to copy the public key:

```bash
cat ¬/.ssh/id_ed22519.pub
```

- Log in to your GitHub account and go to “Settings” from the drop-down menu under your profile picture in the upper-right corner.
- Click on “SSH and GPG keys” on the left-hand menu, and then click on the “New SSH key” button.
- In the “Key” field, copy and paste the contents of your public key file give the key a descriptive name.
- Finally, click the “Add SSH key” button to save your new key.
- Test your connection: `ssh -T [git@github.com](mailto:git@github.com)`

### Setup GH for the first time (device based)

```bash
gh auth login 
```

go through the prompts and use `SSH` as an authentication method.

### Set Github to use SSH

```bash
gh config set -h github.com git_protocol ssh
```

now set your repository for SSH authentication. You have to do this for local repositories only *(repositories which are already cloned on your system)*

```bash
git remote set-url origin git@github.com:mansoorbarri/website.git
```

*change “mansoorbarri/website” with your username/repostiory* 

## Set GPG keys (optional)

Now  this step isn’t really important however this will make it so your commits has that “verified” tag on your commits. 

- Generate GPG keys:

```bash
gpg --full-generate-key
```

*when it asks for your name and email, enter your Github username under name && Github email under email.*

- Log in to your GitHub account and go to “Settings” from the drop-down menu under your profile picture in the upper-right corner.
- Click on “SSH and GPG keys” on the left-hand menu, and then click on the “New GPG key” button.
- Use this command to get your GPG key:

```bash
gpg --armor --export <your email>
```

copy the whole output *(yes, including “—-BEGIN PGP PUBLIC KEY BLOCK—-”)*

## sign commits using GPG keys

use this command to see all the GPG keys

```jsx
gpg --list-secret-keys --keyid-format=long
```

The output will look something like this: 

```bash
$ gpg --list-secret-keys --keyid-format=long
/Users/anar/.gnupg/secring.gpg
------------------------------------
sec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10]
uid                          anar <anar@example.com>
ssb   4096R/4BB6D45482678BE3 2016-03-10
```

copy `3AA5C34371567BD2` from `sec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10]`

*your key will be different*

now run: 

```bash
git config --global user.signingkey <your GPG key ID>
git config --global commit.gpgsign true
```

that’s it. 

From now, when you clone your repositories from [Github.com](http://Github.com), it will clone it using the “SSH” tab rather than “HTTPS” which will automatically make sure that your project uses SSH as the authentication method.

You don't have to use these methods && using Github Desktop on Linux is absolutely fine however you will be missing out on a lot of performance gains. :( 

-MB 

---
