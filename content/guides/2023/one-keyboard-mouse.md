---
title: "Use One Mouse-Keyboard On Two Systems"
date: 2023-02-17
tags: [Tips]
image: "/images/guides/one-keyboard-mouse/main.png"
url : "/guides/one-keyboard-mouse/"
type: "post"
showtableOfContents: true
description: "Control two systems with one mouse and keyboard. Follow our guide for easy-to-follow instructions to streamline your workflow and optimize your setup"
---

## Brief
Barrier is an open-source software application that allows many computers to share a mouse and keyboard. I'm controlling a Windows machine with a Debian-based machine.

## Installing Barrier
Barrier must be installed on both the Windows and Debian-based machines before it can be used. The most recent version of Barrier can be downloaded from the official website [here](https://github.com/debauchee/barrier/releases).

## Installing Barrier on Windows
To install Barrier on Windows, follow these steps:

- Download the latest Windows installer from the Barrier website.
- Run the installer and follow the on-screen instructions.
- Once the installation is complete, launch Barrier.

## Installing Barrier on Debian
To install Barrier on Debian, you can use the following commands in the terminal:
```
sudo apt update
sudo apt install barrier
```

## Using Barrier
You may use Barrier to control the Windows machine from the Debian-based machine now that you've configured it on both devices.

- On both machines, launch the Barrier.
- Check that the Barrier server on the Linux PC is functioning and that the client on the Windows PC is connected.
- Place your mouse cursor on the screen of the Debian-based system closest to the Windows screen.
- Your mouse pointer will now display on the Windows screen, and you may operate the Windows system from the Debian-based machine using your mouse and keyboard.

that's it <3

----

  