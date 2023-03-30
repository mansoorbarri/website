---
title: "Fedora Post-Install Guide"
date: 2023-02-03
tags: [Linux]
image: "/images/guides/fedora-post-install-guide/main.png"
type: "post"
showtableOfContents: true
---

## Speed up DNF 
add/edit the following file `/etc/dnf/dnf.conf`
```
fastestmirror=True
max_parallel_downloads=10
defaultyes=True
keepcache=True
```
To clean the cache: `dnf clean all`

## System Update
```
sudo dnf update && sudo dnf upgrade -y && sudo reboot
```

## Enable RPM Fusion
```
sudo dnf install https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
``` 

For any errors or other installation guide, visit [rpmfusion.org](https://rpmfusion.org/Configuration)

## Enable Flatpaks 
```
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

## Install Media Codecs 
```
sudo dnf groupupdate multimedia --setop="install_weak_deps=False" --exclude=PackageKit-gstreamer-plugin
sudo dnf groupupdate sound-and-video
```

## Install GNOME applications 
Install GNOME Tweaks: 


that's it <3

----

{{< rawhtml >}} 
<script src="https://utteranc.es/client.js"
        repo="mansoorbarri/website"
        issue-term="title"
        theme="github-dark"
        crossorigin="anonymous"
        async>
</script>
{{< /rawhtml >}}