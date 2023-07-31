---
title: "Connect Your Phone to Linux"
date: 2023-01-20
tags: [Android]
image: "/img/guides/2023/connect-your-phone-to-linux/main.png"
url : "/guides/connect-your-phone-to-linux/"
type: "post"
showtableOfContents: true
description: "Connect your phone to Linux with ease. Follow our guide to transfer files, backup data, and more seamlessly between your devices."
---

## Brief
Using a extension and an app: [IOS](https://apps.apple.com/app/kde-connect/id1580245991) & [Android](https://play.google.com/store/apps/details?id=org.kde.kdeconnect_tp) and a GNOME extension on Debian based distros.

**I'm using Debian 11 and Android 11 for this guide.*

Learn more about KDE Connect here: [kdeconnect.kde.org](https://kdeconnect.kde.org/)

## Prerequisites
Install the [GNOME extension](https://extensions.gnome.org/extension/1319/gsconnect/) & Install the app from [PlayStore](https://play.google.com/store/apps/details?id=org.kde.kdeconnect_tp)

## Connect
If you are using a firewall like UFW, you have to allow network traffic from port 1716: 
```
sudo ufw allow 1716 && sudo ufw reload
```

Now make sure both devices are on the same network and then: 

- Open the KDE app and click on the device name under "Available devices" 
- Click on the orange box, "REQUEST PAIRING" 
- Accept when promt on your PC like shown:

![](/img/guides/2023/connect-your-phone-to-linux/2023.png)

You can change settings to your preference in the android app by: 
- Click on the humburger icon (☰)
- Choose your device name and click on the feature you want to use and grant the appriopriate permissions

**You might have to unpair and pair the devices again after some features*

## Recommendation
The continual notification of the KDE connect app on your phone is one setting you should disable.

Go to:
- Click on the humburger icon (☰)
- Go to settings > Persistent notification
- Disable "Persistent indicator" 

that's it <3

---

  
