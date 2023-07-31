---
title: "The Perfect Phone"
date: 2023-07-31
tags: [Android]
url: "/guides/the-perfect-phone/"
type: "post"
showtableOfContents: true
description: "Learn about how I setup my android phone to be production and achieve digital minimalism."
---

The aim of this "perfect phone is to have as much destractions as possible and have everything at ease rather than going through various manus. 

## Things used 
- Debloater:    [Universal Android Debloater](https://github.com/0x192/universal-android-debloater/releases)
- Launcher:     [Niagra Launcher](https://play.google.com/store/apps/details?id=bitpit.launcher)
- Icon Pack:    [Lines Icon Pack](https://play.google.com/store/apps/details?id=com.natewren.linesfree)
- Notifications:   [Dynamic Island](https://play.google.com/store/apps/details?id=com.jamworks.dynamicspot)

## Debloat 
Install ADB: 

debian linux
```
sudo apt install android-sdk-platform-tools
```

Windows
- Download ADB Platform Tools
- Extract Tools to C:\Windows (This allows you to run adb.exe and fastboot.exe from anywhere)
- Install drivers for your phone - Install Android Device Drivers

now install the universal debloater tool from their Github & run the program: https://github.com/0x192/universal-android-debloater/releases

![Screenshot of the tool](https://github.com/0x192/universal-android-debloater/raw/main/resources/screenshots/v0.5.0.png)

Now make sure "Recommended" is selected from the top dropdown menu and then uninstall whatever you don't want. 

## Cosmetic/my setup 
Now install the launcher &/or icon pack and style your device how you want it to be. 

My setup turned out to be like this: 

{{< rawhtml >}}
<video width="235" height="500" autoplay loop>
  <source src="/img/guides/2023/the-perfect-phone/my-setup.mp4" type="video/mp4">
</video>
{{< /rawhtml >}}

## Fix/tip

When you are using Dynamic Island, it will still show up along with your default notification style which is annoying and you have to pay to remove the default notifier. 

To get around this, use ADB to disable default notification like so: 
```
adb shell settings put global heads_up_notifications_enabled 0
```

& to enable default notifier: 
```
adb shell settings put global heads_up_notifications_enabled 1
```

that's it <3

----

  