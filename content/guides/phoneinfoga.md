---
title: "Getting Started - PhoneInFoga"
date: 2022-08-20
tags: ["Penetration Testing"]
image: "/images/guides/phoneinfoga/main.png"
type: "post"
draft: false
showtableOfContents: true
description: "Get started with PhoneInFoga with our guide. Follow our instructions for a comprehensive overview and start taking advantage of its features"
---

## Brief

[PhoneInFoga](https://github.com/sundowndev/phoneinfoga) - Information gathering & OSINT framework for phone numbers.

This install guide is specific to Debian/Ubuntu machines, for other installation options, visit [PhoneInfoga's install page](https://sundowndev.github.io/phoneinfoga/getting-started/install/).

## Install 

[Installation documentation](https://sundowndev.github.io/phoneinfoga/getting-started/install/)

run these command: 

Install the latest version

```bash
curl -sSL https://raw.githubusercontent.com/sundowndev/phoneinfoga/master/support/scripts/install | bash
```
Confirm/Check install 

```bash
./phoneinfoga version
```

Copy it to path for global install

```bash
sudo mv ./phoneinfoga /usr/bin/phoneinfoga
```

## Usage 

Scan with "phoneinfoga -n [NUMBER WITH COUNTRY CODE]"

Example: 

```bash
phoneinfoga serve -n +1234567891
```
The output is kinda weird and messy so using the web GUI is a better way. 

command: 

```bash
phoneinfoga serve -p 8080
```
-p is to specify a port. PhoneInFoga uses port 5000 by default.

## Useful Link

[find info on phone numbers with PhoneInfoga - NetworkChuck](https://www.youtube.com/watch?v=6CnDdXVTxhU)

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