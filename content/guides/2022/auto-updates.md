---
title: "Automatic Updates on Linux"
date: 2022-02-23
tags: ["Linux"]
type: "post"
url : "/guides/auto-updates/"
showtableOfContents: true
description: "Automatic updates on Linux: Learn the benefits, risks, and how to configure your system. Keep your Linux up-to-date and secure. Read our article."
---

# Brief

[Unattendeed Upgrades](https://github.com/mvo5/unattended-upgrades) - Automatic installation of security upgrades on apt based systems.

# install

```
sudo apt update

sudo apt install unattended-upgrades -y
```

# Enable Automatic Updates

enable automatic updates by: 
```
sudo dpkg-reconfigure -plow unattended-upgrades 
```
- "-plow" is to set prorioty as low for unattended upgrades.

select "yes" from these options: 

![Screenshot of the command](/img/guides/2022/auto-updates/2022.png)

# Other config/sources

For more about configuration, go through [this blog](https://haydenjames.io/how-to-enable-unattended-upgrades-on-ubuntu-debian/) by Hayden James.

that’s it ✌🏽

-------------------------------------------------------------
{{< rawhtml >}} 
 
{{< /rawhtml >}}