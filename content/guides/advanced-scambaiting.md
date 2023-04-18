---
title: "Advanced Scambaiting"
date: 2022-08-24
tags: ["Scambait"]
image: "/images/guides/advanced-scambaiting/main.png"
type: "post"
draft: false
showtableOfContents: true
description: "Advanced scambaiting: Learn expert techniques to trick scammers and take action. Enhance your skills with our advice. Read our article"
---

## Disclaimer

**DO THESE THINGS AT YOUR OWN RISK**

**IT IS NOT RECOMMENDED TO DO THESE THINGS AS SCAMBAITING**

## Reverse Anydesk connection

First you have to let them connect to your PC, make sure you see their anydesk ID before accepting their connection request.

![anydesk request pop-up](/images/guides/advanced-scambaiting/2022.png)

then send them anydesk request from another PC or the host PC (if you are using VM) at the same time, when accepting their anydesk connection request. If you time it perfecting and you have an inexperienced scammer, you should be connected to the scammer's PC.

## Getting their IP

For this you need a software known as [Wireshark](https://www.wireshark.org/)

Windows:
```
winget install -e --id WiresharkFoundation.Wireshark
```

Debian/Ubuntu: 
```
sudo apt install wireshark
```
#### When connected via Anydesk: 

run a scan before scammer's request, accept the request and save the wireshark capture (just in case). enter "ip.src == [your-local-ip] && tcp.port 7070" as filter, this will narrow down capture results to packet from the given ip and only tcp packets. 

In most cases, the scammer's IP would be from the result as shown here:

![wireshark with the filter](/images/guides/advanced-scambaiting/2022_1.png)

You might have to look-up all the IPs to know the exact one.

#### When connected via TeamViewer

You can't really get their IP via TeamViewer since TeamViewer uses proxy servers to connect both parties which is a bummer for us, your only option at this point is social engineering.

## IP Address OSINT

There is not much you can do with just their IP so scanning for ports can be the first step for doing various other things. 

We can use [Nmap](https://nmap.org/) to scan for ports. I have an [article](https://mansoorbarri.com/guides/nmap) explaining the tool in general. You can also watch this video for more help: [Nmap Tutorial to find Network Vulnerabilities
| NetworkChuck](https://www.youtube.com/watch?v=4t4kBkMsDbQ)

You can install nmap on Debian/Ubuntu: 

```bash
sudo apt install nmap
```

for other installation options, visit [nmap.org](https://nmap.org/download.html).

You can also lookup their IP address for more information like their city/coutry & ISP. 

I use [whatismyipaddress.com](https://whatismyipaddress.com/ip-lookup) for this.

## Phone Number OSINT

You can use smth like [PhoneInfoga](https://github.com/sundowndev/phoneinfoga) to get information about a number.

Install process & usage is explained [here](https://mansoorbarri.com/guides/phoneinfoga/).

that's it ✌🏽

-------------------------------------------------------------
{{< rawhtml >}} 
 
{{< /rawhtml >}}