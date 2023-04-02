---
title: "Nmap quick start"
date: 2022-02-19
tags: ["linux", "Penetration Testing"]
type: "post"
draft: false
showtableOfContents: true
description: "Quickly get started with Nmap using our guide. Follow our instructions for easy-to-use scanning and network discovery capabilities"
---

# DISCLAIMER

*__THIS TOOL SHOULD ONLY BE USED FOR EDUCATIONAL OR ETHICAL HACKING PURPOSE. MISUSE OF THIS TOOL WILL LEAD TO PROSECUTION.__*

## Brief

[Nmap](https://github.com/nmap/nmap) - the network mapper.

## install

#### Debian

```
sudo apt install nmap
```

#### Snap

```
sudo snap install nmap
```

## Basic Arguments

#### 1. pingging whole network

##### -sP

```
nmap -sP <ip/24>    
```

For example: 

```
nmap -sP 172.67.208.3/24
```

#### 2. Simple TCP scan

A TCP is what makes the internet. TCP aka Transmission Control Protocol is a standard that defines how to establish and maintain a network conversation via the[ three way handshake](https://www.geeksforgeeks.org/tcp-3-way-handshake-process/).

```
nmap -sT <ip>
```

#### 3. Stealth Scan

TCP SYN scan. Which basically means that it does not complete the three way handshake thus having fewer chances of getting caught by the firewall. This is also the default mode for nmap if no arguments are given.

```
nmap -sS <ip>
```

#### 4.  Aggressive mode

Enables OS detection, version detection, script scanning, and traceroute

```
nmap -A <ip>
```

#### 5. Skip host discovery 

Usually nmap pings a network before checking for open ports. For security reasons some sys admins block ICMP requests (pings), for this nmap has a switch -Pn

```
nmap -Pn <ip>
``` 

#### 6. Specify ports

Use -p to specify ports

```
nmap -p 80, 443 <ip>
```

#### 7. use defualt NSE scripts

Use Nmap Scriping Engine to run a lite vulnerability scan.

```
nmap -sC <ip>
```

#### 8. CVE detection 

Using the NSE you can run a full vulnerability test against a target

``` 
nmap --script vuln <ip>
```

## Real world example

```
nmap -sS -sC <ip> -o <filename>
```

where

-sS is a stealth scan

-sC is scan with default NSE scripts. Considered useful for discovery.

-o outputs the results in a file

## Practice

You can practice nmap in a [TryHackMe Room](https://tryhackme.com/room/furthernmap)

Help: [walkthrough](https://mansoorbarri.medium.com/tryhackme-nmap-room-furthernmap-47355e92a85) 

## References

[NetworkChuck](https://www.youtube.com/watch?v=4t4kBkMsDbQ)

[Nmap CheatSheet](https://www.stationx.net/nmap-cheat-sheet/)

that’s it ✌🏽

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