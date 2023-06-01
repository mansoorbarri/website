---
title: "Fix Grub Not Showing for Windows and Linux Dual Boot System"
date: 2023-05-31
tags: [Windows]
image: "/images/guides/no-grub-windows-linux/main.webp"
url: "/guides/no-grub-windows-linux/"
type: "post"
showtableOfContents: true
description: "Fix grub not showing when dual booting linux."
---

Copy-paste the following command: 
```
bcdedit /set {bootmgr} path \EFI\debian\grubx64.efi
```
This is for debian however you can change the folder name for other distributions.


that's it <3

----

  