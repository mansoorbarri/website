---
title: "Wireshark 101"
date: 2023-07-07
tags: [penetration-testing]
image: "/images/guides/wireshark-101/main.webp"
url: "/guides/wireshark-101/"
type: "post"
showtableOfContents: true
description: ""
---

Wireshark is a powerful network protocol analyzer that allows you to capture and inspect network traffic in real-time. It is a widely used tool by network administrators, security professionals, and developers to troubleshoot network issues and analyse network behaviour. One of the key features of Wireshark is the ability to apply filters to focus on specific network packets of interest. In this article, we will explore the basics of Wireshark filters and provide some examples that anyone can try.

## Installation
Before we dive into Wireshark filters, let's ensure you have Wireshark installed on your system. Follow these steps to install it:

Visit the Wireshark website and download the appropriate version for your operating system.
Run the installer and follow the on-screen instructions to complete the installation.

## Wireshark Filters
Wireshark filters allow you to selectively display network packets based on specific criteria. Filters can be used to capture only the packets that are relevant to your analysis, reducing the amount of data you need to analyze. Here are some basic filter examples:

## Filter by Source IP Address
To capture packets from a specific source IP address, use the following filter:'
```
ip.src == <source_ip_address>
```
Replace `<source_ip_address>` with the actual IP address you want to filter. For example, to capture packets from the IP address `192.168.0.100`, use:

## Filter by Destination IP Address
Similar to filtering by source IP address, you can filter packets by their destination IP address using the following filter:
```
ip.dst == <destination_ip_address>
```
Replace `<destination_ip_address>` with the actual IP address you want to filter. For example, to capture packets destined for the IP address `192.168.0.200`, use:
```
ip.dst == 192.168.0.200
```

##  Filter by Port Number
You can filter packets by their source or destination port number using the following filter:
```
tcp.port == <port_number>
```
Replace `<port_number>` with the actual port number you want to filter. For example, to capture packets on port `80` (HTTP), use:
```
tcp.port == 80
```

## Filter by Protocol

To capture packets of a specific protocol, use the following filter:
```
<protocol>
```
Replace `<protocol>` with the desired protocol, such as `tcp`, `udp`, `http`, etc. For example, to capture only HTTP packets, use:

## Filter by MAC Address
To capture packets from a specific MAC address, use the following filter:
```
eth.addr == <mac_address>
```
Replace `<mac_address>` with the actual MAC address you want to filter. For example, to capture packets from the MAC address `00:11:22:33:44:55`, use:
```
eth.addr == 00:11:22:33:44:55
```

## Conclusion
Wireshark filters provide a powerful way to analyze and focus on specific network packets during your network troubleshooting or analysis tasks. In this article, we covered some basic filters that you can try. Experiment with these filters and explore the vast capabilities of Wireshark to gain insights into your network traffic.

that's it <3

----

  