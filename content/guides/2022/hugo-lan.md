---
title: "Hugo Server on LAN"
date: 2022-08-18
tags: ["Linux", "HUGO"]
image: "/images/guides/hugo-lan/main.png"
type: "post"
url : "/guides/hugo-lan/"
showtableOfContents: true
description: "Host Hugo server on LAN with our guide. Access your site locally and improve testing and development capabilities with easy-to-follow steps"
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
 
{{< /rawhtml >}}