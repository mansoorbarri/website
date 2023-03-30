---
title: "Fix Screen Tearing"
date: 2023-02-01
tags: [Linux]
image: "/images/guides/fix-screen-tearing/main.png"
type: "post"
showtableOfContents: true
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

{{< rawhtml >}} 
<script src="https://utteranc.es/client.js"
        repo="mansoorbarri/website"
        issue-term="title"
        theme="github-dark"
        crossorigin="anonymous"
        async>
</script>
{{< /rawhtml >}}