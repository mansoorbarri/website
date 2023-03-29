---
title: "Hugo Server on LAN"
date: 2022-08-18
tags: ["Linux", "HUGO"]
image: "/images/how-to/hugo-lan/main.png"
type: "post"
draft: false
showtableOfContents: true
---

## Brief

[IP-ADD] is your local IP address.

## Command

use this command instead of "hugo server" 

```bash
hugo server --bind [IP-ADD] --baseURL http://[IP-ADD]
```

## Conclusion

visit http://[IP-ADD] from any device on your LAN to view the temporary hugo site.

that's it ✌🏽

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