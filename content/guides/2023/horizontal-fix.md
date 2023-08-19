---
title: "Fix Horizontal Lines on YouTube Videos"
date: 2023-01-30
tags: [Browser]
image: "/img/guides/2023/horizontal-fix/main.png"
url : "/guides/horizontal-fix/"
type: "post"
showtableOfContents: true
description: "Fix horizontal lines on YouTube videos with our guide. Improve your viewing experience with easy-to-follow troubleshooting steps"
---

## Browser
This is usually due to hardware acceleration, which you can disable by going to `chrome:/settings/?search=hardware` 

and unchecking the option `Use hardware acceleration when available`

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

  