---
title: "Mirror Android Screen with Sound"
date: 2022-10-26
tags: ["Android"]
image: "/img/guides/2022/android-screen-mirror/main.png"
type: "post"
url : "/guides/android-screen-mirror/"
showtableOfContents: true
descripition: "Mirror your Android screen with sound: Learn how to do it wirelessly or with cables. Enjoy your favorite content on a bigger screen. Read our article."
---
# Brief

You can't mirror screen and sound together so we'll use two different tools to do the job. This method can be done on Linux & Windows but I am using Linux (Debian) in this case.

### Tools

[Scrcpy](https://github.com/Genymobile/Scrcpy) - for screen mirror

[sndcpy](https://github.com/rom1v/sndcpy) - for sound

# Install

Scrcpy:
```bash
sudo apt install scrcpy -y 
```
Sndcpy:
download the [latest release](https://github.com/rom1v/sndcpy#get-the-app) and extract the files

# Mirror

### Screen with Scrcpy
First, go to your device settings and enable developer mode then, connect your Android device to your computer with your charger.

Run Scrcpy on your computer terminal
```bash
Scrcpy
```
you should see your phone screen on another window like this 

![picture of the new window](/img/guides/2022/android-screen-mirror/2022.png)

### Sound with Sndcpy

Run the linux file from the extracted files

```bash
./sndcpy
```
Now you can play anything to check everything.

# Recommendation

I use Scrcpy with some switches like:
```bash 
Scrcpy --turn-screen-off --stay-awake
```
You can see more on their Github page @ [Scrcpy](https://github.com/Genymobile/Scrcpy#features)

& while using Sndcpy, just reduce the volume to 0% on the phone so you don't hear "echo" 

that's it ✌🏽

---
