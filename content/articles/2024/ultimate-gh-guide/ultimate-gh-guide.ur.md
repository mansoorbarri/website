---
title: "Aakhiri Github Guide"
date: 2024-02-08
categories:
  - Linux
  - Windows
tags:
  - GitHub
url: "/ur/ultimate-gh-guide/"
type: "post"
showtableOfContents: true
description: "Akhiri GitHub ki guide jo apko chaheye hogi."
---

## Wajah
Github ko use karne ke bohot sare tareeke hain lekin kuch bohot hi fazoul hain. Iss website pe bhi teen-char articles hain lekin mujhe aik article banana tha jismein A to Z sare tareeke hon, specially Linux ke liye.

## Desktop App
Windows pe Github Desktop ka app bohot log isstamal karte hain lekin woh isliye bhi hai kyunke Windows pe CMD ke through apka User Experience kharab hota hai plus Windows users ko CMD bohot kam chalane ataa hai. Linux pe koi official app nahi hai lekin aik Github ke mulazim ne *unofficial Github app* banaya hai: https://github.com/shiftkey/desktop.

Iss app ka maqsad? personally, mein isko as last option hi use karta hoon kyunke ispe: 

- Commit ke size pe limit hai 
- UI bohot kharab hai
- kafi slow hai

## CLI
Ab sirf aik hi tareeka bajhta hai Linux pe jo ke terminal ke through hai. Yehh kuch logo ko thora mushkil lage ga (agar lag raha hai toh ap Github Desktop hi use kar lein) lekin lekin. Darr ke agee jeet hai.

Normal `git pehle se hi installed hota hai Linux systems mein lekin ager apke paas nahi hai toh ap yun install kar sakte hain: 

```bash
sudo apt update && sudo apt install git -y
```

phir commit aur push karne ke liye: 

```bash
git init 
git add . 
git commit -m “{commit-message}” 
git push
```

## GH

GH sabse acha aur teez tareka hai Github pe push aur commit karne ka. Yeh Windows aur Mac pe bhi hai lekin mere personal experience Windows pe itna acha nahi raha GH ke sath.

### Yeh kia balaa hai? 
GH basically Github app ka CLI version hai. Ap pull, push, commit aur PRs bhi dekh sakte ho lekin sabse achi cheeze iski, iski speed hai. 

### okay, isko istamaal kaise karein? 

Apko basically SSH aur GH ko sath use karna hoga: 

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

### Create SSH keys

```bash
ssh-keygen -t ed25519 -C "your-email"
```

Yeh command enter karke, majuda options ke sath continue karein 

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519.pub
```

### add ssh keys to github

- Yeh command use karke public key copy karein: 

```bash
cat ¬/.ssh/id_ed22519.pub
```

- GitHub account mein login karen aur apne profile picture ke upper-right corner mein drop-down menu se "Settings" par jayen.
- left menu mein "SSH and GPG keys" par click karen, phir "New SSH key" button par click karen.
- "Key" field mein, apne public key file ke contents ko copy karke paste karen aur key ko aik naam dein.
- Aakhir mein, "Add SSH key" button par click karke apni nayi key ko save karne ke liye.
- Apne connection ka test karen: ssh -T git@github.com

### Pehli baar GH istemaal karein
Yeh device based hai toh apko yeh harr device pe aik baar karna parega.

```bash
gh auth login 
```
prompts ke sath sath chalein aur authentication ke liye `SSH` istemaal karein.

### Set Github to use SSH

```bash
gh config set -h github.com git_protocol ssh
```

Apni repository ko authenticate karein SSH ke through. Apko yeh harr local repository ke liye karna parega joke apke system pe pehle se hain 

```bash
git remote set-url origin git@github.com:mansoorbarri/website.git
```

*"mansoorbarri/website" ki jagah apna username/repository dalein* 

### Set GPG keys (optional)

Yeh step zarori nai lekin isse apki commits pe aik "verified" tag aajata hai.

- Generate GPG keys:

```bash
gpg --full-generate-key
```

*jab yeh email ya full name ka puche toh apne Github wala username dein name ki wajah aur Github ki email, email ki jagah*

- GitHub account mein login karen aur apne profile picture ke upper-right corner mein drop-down menu se "Settings" par jayen.
- left menu mein "SSH and GPG keys" par click karen, phir "New GPG key" button par click karen.
- Yeh command use karein GPG key dekhne ke liye:

```bash
gpg --armor --export <your email>
```

### sign commits using GPG keys
Yeh command use karein gpg keys ko dekhne ke liye 

```jsx
gpg --list-secret-keys --keyid-format=long
```

Kuch aesi output ayegi: 

```bash
$ gpg --list-secret-keys --keyid-format=long
/Users/anar/.gnupg/secring.gpg
------------------------------------
sec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10]
uid                          anar <anar@example.com>
ssb   4096R/4BB6D45482678BE3 2016-03-10
```

`3AA5C34371567BD2` ko copy karlein jo  `sec   4096R/3AA5C34371567BD2 2016-03-10 [expires: 2017-03-10]` se ayaa hai

*apki key aur output different hogi*

ab yeh karein:  

```bash
git config --global user.signingkey <your GPG key ID>
git config --global commit.gpgsign true
```

that’s it. 

Ab jab bhi ap apni repositories clone karein ge toh woh SSH istemaal kare ga joke pehle HTTPS user karta tha, SSH se clone karne se apki repository khudhi SSH user kar legi. 

-MB 

---
