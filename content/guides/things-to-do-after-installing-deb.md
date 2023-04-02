---
title: "10 Things to Do After Installing Debian"
date: 2023-01-09
tags: ["Linux"]
image: "/images/guides/things-to-do-after-installing-deb/main.png"
type: "post"
showtableOfContents: true
description: "New to Debian? Discover 10 must-do post-installation tasks with our guide. Improve performance, security, and usability in no time"
---

## Enable Dark Mode 

- Search for "Tweaks" 
- On the left-hand side pane, click on ‘Appearance.’ Next to the applications drop-down menu, select the “Adawaita-dark” option.

![Screenshot of the Tweaks app showing the dark mode option](/images/guides/things-to-do-after-installing-deb/2022.png)

## Add your user to the sudoers file 

- Launch a terminal and follow these commands

```
su -
```
```
usermod -aG sudo newuser
```
**change your username with "newuser"* 

## Installing Updates 
``` 
sudo apt update && sudo apt upgrade -y && sudo reboot
```

## Install a firewall
```
sudo apt install ufw -y 
```
Deny all the traffic in and out for now by 

```
sudo ufw default deny incoming  
sudo ufw default allow outgoing
```
You can allow traffic by: ```sudo ufw allow [port]``` 

## Changing your terminal
I personally like terminator as it is fast and allows multiple terminal sessions by split screen, you can install it by: 
```
sudo apt install terminator -y 
```
## Enable Minimise Button

- Search for "Tweaks" 
- On the left-hand side pane, click on "Windows Titlebars" enable the "minimise" option.

![Screenshot of the Tweaks app where minimise button is enabled](/images/guides/things-to-do-after-installing-deb/2022_1.png)

## Install GNOME extensions
GNOME extensions can be installed to extend the functionality of the GNOME desktop environment. Clipboard Indicator is the most important extension in my opinion, so to instal it, you must:

- Install the browser extension: [https://chrome.google.com/gnome](https://chrome.google.com/webstore/detail/gnome-shell-integration/gphhapmejobijbbhgpjhcjognlahblep)
- Then go to [https://gnome.org/CI](https://extensions.gnome.org/extension/779/clipboard-indicator/) and install the extension

You should now see a clipboard history in the top bar.

![Screenshot of the clipboard indicator extension in action](/images/guides/things-to-do-after-installing-deb/2022_2.png)

## Enable Tray Icons

You can enable icons on your top bar by installing Tray Icons. Simply visit [https://gnome.org/trayicon](https://extensions.gnome.org/extension/1503/tray-icons/) to enable it.

![Screenshot of top bar after installing the extension](/images/guides/things-to-do-after-installing-deb/2022_3.png)

## Install Microsoft Fonts
Microsoft Fonts should be installed because they are widely used and using the web without them would feel alienating. Simply type the following command into your terminal.

```
sudo apt install fonts-crosextra-carlito fonts-crosextra-caladea -y 
```

## Enable Snap and FlatPak
Snap and FlatPak packages are universal Linux app packaging formats. That is, they are compatible with any Linux distribution. Enable them by: 

Open Software Center > Search for gnome software > Select the first entry > Enable Snap and FlatPak in Add-ons section > Restart Software Center

that's it <3

----
{{< rawhtml >}} 
<script src="https://utteranc.es/client.js"
        repo="mansoorbarri/website"
        issue-term="title"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
{{< /rawhtml >}}