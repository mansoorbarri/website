---
title: "Fix Screen Tearing"
date: 2023-02-01
tags: [Linux]
image: "/images/guides/fix-screen-tearing/main.png"
url : "/guides/fix-screen-tearing/"
type: "post"
showtableOfContents: true
description: "Eliminate screen tearing with our easy-to-follow guide. Follow our troubleshooting steps and improve your visual experience with smooth, seamless graphics"
---

## Intel X11 Config
Edit/Add: `/etc/X11/xorg.conf.d/20-intel.conf`

```
Section "Device"
    Identifier    "Intel Graphics"
    Driver        "intel"
    Option        "TearFree"  "true"
EndSection
```

After rebooting if you start to see screen artifacts there is a BAD Driver package that causes this. Remove `sudo apt remove xserver-xorg-video-intel`.

that's it <3

----

  