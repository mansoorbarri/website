---
title: "Mirror Android Screen with Sound Wirelessly"
date: 2023-08-02
categories: [Android]
url: "/guides/wireless-android-screen-mirror/"
type: "post"
showtableOfContents: true
description: "Learn about screen & sound mirroring tools and how to use them wirelessly from your phone to your computer."
---

**Disclaimer: this only works when your phone and computer is on the same network**

Previously I have explained how you can [mirror your android phone](/guides/android-screen-mirror) on machine however you can also do it wirelessly as well in a different method but kinda the same.

## Installation 
Install `scrcpy` & `sndcpy` just like how it is mentioned in the previous guide: https://mansoorbarri.com/guides/android-screen-mirror/

Then install ADB: 
debian linux
```
sudo apt install android-sdk-platform-tools
```

Windows
- Download ADB Platform Tools
- Extract Tools to C:\Windows (This allows you to run adb.exe and fastboot.exe from anywhere)
- Install drivers for your phone - Install Android Device Drivers

Now connect your phone using a USB cable and run: 
```
adb connect {ip}:5555
```
where `{ip}` is your phone's IP for example, `adb connect 127.0.0.1:5555`

now disconnect the USB cable and run `sndcpy` or/and `scrcpy` and you should be able to connect over wifi. 

*Note: the adb wireless connection may disconnect when your phone or computer restarts* 

that's it <3

----

  