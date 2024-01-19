---
title: "Create GitHub SSH Keys"
date: 2023-02-08
tags: [GitHub]
url : "/guides/create-github-ssh-keys/"
type: "post"
showtableOfContents: true
description: "Create SSH keys for GitHub with our guide. Enhance authentication and streamline workflow with simple setup steps for secure key generation"
---

## Generating a new SSH key
- Type `ssh-keygen -t ed25519 -C "YOUR-EMAIL"` in your terminal and go with all the default options.
- Now enter the following commands in order: 
```
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/YOUR-.PUB-FILE
```

## Add SSH key to GitHub 
- Use the following command to copy the public key: 
```
cat ~/.ssh/YOUR-.PUB-FILE
```
- Log in to your GitHub account and go to "Settings" from the drop-down menu under your profile picture in the upper-right corner.

- Click on "SSH and GPG keys" on the left-hand menu, and then click on the "New SSH key" button. 

- In the "Key" field, copy and paste the contents of your public key file give the key a descriptive name. 

- Finally, click the "Add SSH key" button to save your new key.

## Test Your Connection 
```
ssh -T git@github.com
```
You should see a message that says "Hi {username}! You've successfully authenticated, but GitHub does not provide shell access."

that's it <3

----

  