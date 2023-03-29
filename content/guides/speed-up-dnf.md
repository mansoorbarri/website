---
title: "Speed Up Dnf"
date: 2023-02-06
tags: [Linux]
image: "/images/how-to/speed-up-dnf/main.png"
type: "post"
showtableOfContents: true
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

{{< rawhtml >}} 
<script src="https://utteranc.es/client.js"
        repo="mansoorbarri/website"
        issue-term="title"
        theme="github-dark"
        crossorigin="anonymous"
        async>
</script>
{{< /rawhtml >}}