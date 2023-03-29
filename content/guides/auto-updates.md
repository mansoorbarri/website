---
title: "Automatic Updates on Linux"
date: 2022-02-23
tags: ["Linux"]
type: "post"
draft: false
showtableOfContents: true
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

![Screenshot of the command](/images/how-to/auto-updates/2022.png)

# Other config/sources

For more about configuration, go through [this blog](https://haydenjames.io/how-to-enable-unattended-upgrades-on-ubuntu-debian/) by Hayden James.

that’s it ✌🏽

-------------------------------------------------------------
{{< rawhtml >}} 
<script src="https://utteranc.es/client.js"
        repo="mansoorbarri/website"
        issue-term="title"
        theme="dark-blue"
        crossorigin="anonymous"
        async>
</script>
{{< /rawhtml >}}