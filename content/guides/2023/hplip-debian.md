---
title: "HPLIP Install On Debian"
date: 2023-03-03
tags: [Linux]
image: "/images/guides/hplip-debian/main.png"
url : "/guides/hplip-debian/"
type: "post"
showtableOfContents: true
description: "Install HPLIP on Debian with our guide. Streamline your printing experience with step-by-step instructions for setting up your HP printer on Linux."
---

*This guide is written for Hplip installation on Debian 11**

## Prerequisites
Install the required dependencies by running the following command:
```
sudo apt update && sudo apt upgrade -y 
sudo apt install libcups2-dev libssl-dev libusb-1.0-0-dev python3-dev python3-pip
```

## Download HPLIP
Go to [SourceForce](https://sourceforge.net/projects/hplip/) and download HPLIP

Once the download is complete, make the file executable by running the following command:
```
chmod +x hplip-3.16.7.run
```
*Note: Replace "3.16.7" in the above command with the version you downloaded.*

## Install 
Run the installer
```
sudo ./hplip-3.16.7.run
```

Follow the prompts and answer any questions asked by the installer.

Note: During the installation process, you may be prompted to install additional dependencies. Follow the instructions given by the installer to install them.

My Install output looked like [this](https://github.com/mansoorbarri/website/blob/main/images/guides/hplip-debian/hplip.txt?raw=true).

## Post Install
Once the installation is complete, you can check if HPLip is installed correctly by running the following command:
```
hp-check
```

Finally, restart the CUPS service or restart your system to ensure that the changes take effect:
```
sudo systemctl restart cups.service
```

that's it <3

----

  