---
title: "Gobuster101"
date: 2023-07-08
tags: [penetration-testing]
image: "/images/guides/gobuster101/main.webp"
url: "/guides/gobuster101/"
type: "post"
showtableOfContents: true
description: "A friendly guide about the tool named GoBuster: Directory/File, DNS and VHost busting tool written in Go."
---

GoBuster is a powerful command-line tool designed for website directory and file enumeration. It enables penetration testers, ethical hackers, and security professionals to discover hidden content, directories, and files on web servers. This guide will walk you through the installation process and provide a detailed overview of GoBuster's features and usage.

GoBuster comes pre-installed with Kali however you can install it on other systems from their github page: https://github.com/OJ/gobuster

### Common Switches

```
  -u, --url               The target URL to scan
  -w, --wordlist          Path to the wordlist file
  -t, --threads           Number of concurrent threads (default: 10)
  -e, --extensions        Specify file extensions to search for (e.g. txt)
  -r, --recursive         Enable recursive directory brute forcing
  -k, --insecure          Skip SSL certificate verification
  -x, --http-method       Specify the HTTP method to use (default: GET)
  -q, --quiet             Enable quiet mode, suppress normal output
  -h, --help              Show the help message and exit
```

For example, to perform a directory brute force scan on a target URL using a specified wordlist, you can use the following command:
```
gobuster dir -u <target_url> -w <wordlist_path>
```

Remember to replace `<target_url>` with the actual URL you want to scan and `<wordlist_path>` with the path to your wordlist file.

### Practice

A really good room I would recommend is [basicpentestingjt](/write-ups/basicpentestingjt/) on TryHackMe.

that's it <3

----

  