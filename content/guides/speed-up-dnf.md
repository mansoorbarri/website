---
title: "Speed Up Dnf"
date: 2023-02-06
tags: [Linux]
image: "/images/guides/speed-up-dnf/main.png"
type: "post"
showtableOfContents: true
description: "Speed up DNF with our guide. Follow our step-by-step instructions to optimize package management and reduce download time"
---

add/edit the following file `/etc/dnf/dnf.conf`
```
fastestmirror=True
max_parallel_downloads=10
defaultyes=True
keepcache=True
```
To clean the cache: `dnf clean all`


that's it <3

----

  