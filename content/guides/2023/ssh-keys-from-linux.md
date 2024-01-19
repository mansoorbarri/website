---
title: "Create SSH Keys & Install Them on a Linux System"
date: 2023-06-23
categories: [Linux]
url: "/guides/ssh-keys-from-linux/"
type: "post"
showtableOfContents: true
description: "Learn why we created SSH key pair and how to create and install in on the remote system assuming that the remote system is running Linux."
---

## Why? Just Use Passwords.
SSH key pairs outperform passwords in terms of security and convenience. SSH keys resist brute-force attacks thanks to strong cryptographic algorithms, eliminating the vulnerability of easily guessed or stolen passwords. Key pairs provide convenience by eliminating the need to remember or transmit passwords, lowering human error and increasing security. Furthermore, they improve auditability and accountability. SSH key pairs are a secure authentication method that is both reliable and efficient in systems and applications.

## Generate Key Pair
First create a ssh key pair by the following command:
```
ssh-keygen
```
The generation procedure begins. You'll be asked where you want your SSH keys saved. To accept the default location, press the Enter key. The folder's permissions will restrict it to your use only.

You will now be asked to provide a passcode. I strongly recommend that you enter a passcode here. And keep in mind what it is! You can enter no passcode by pressing Enter, but this is not a good idea. A pass composed of three or four unrelated words strung together will produce a very strong pass.

You will be asked to enter the same passphrase once more to verify that you have typed what you thought you had typed.

The SSH keys are generated and stored for you.

## Install The Public Key
In this case, the remote system ip is `127.0.0.1` and the username is `faso`. 

Use the following command to install the SSH public key to the public server: 
```
ssh-copy-id faso@127.0.0.1
```

You will be asked to enter the password of the remote user, in this case `faso`. Once the password has been verified, the public key will be transfered successfully thus you can try logging in the remote machine to check if it asks for the password.  

that's it <3

----

  