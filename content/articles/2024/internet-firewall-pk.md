---
title: "How Internet Firewalls Work?"
description: 
date: "2024-07-05"
url: "/internet-firewall-pk/"
draft: false
categories:
  - Firewall 
tags:
  - Pakistan
  - China 
  - Middle East
---

Recently, there was news about Pakistan developing and implementing an internet firewall, which led me to explore how these firewalls work. While traditional infrastructure firewalls are relatively simple, nation-wide firewalls are far more complex.

## Methodology

There are three main methods used to prevent citizens from accessing certain content or websites:

- DNS Poisoning 
- TCP Attack 
- Invisible Ban 

## DNS Poisoning 

A Domain Name Service (DNS) works like a phone book. It contains website addresses and their corresponding IP addresses. When a user accesses a website, the DNS server returns the IP address of that website.

DNS Poisoning works by redirecting the DNS server to a malicious server, meaning the domain name can be redirected to a malicious website or blocked by the firewall.

### Example 
Imagine I want to visit my website (mansoorbarri.com).

![Example showing a normal client-DNS relationship](/img/guides/2024/internet-firewall-pk/dns-poisoning-before.png)

In the normal scenario, my browser tries to access the website (mansoorbarri.com) and the DNS server returns the IP address of the website, which is 192.168.40. In the case of DNS poisoning, we are redirected to a different IP address.

![Example showing a poisoned client-DNS relationship](/img/guides/2024/internet-firewall-pk/dns-poisoning-after.png)

Here, the request is the same *(mansoorbarri.com)* but the DNS server returns a different IP address.

You might wonder why the same DNS server is redirecting to a different IP address. In many countries, the DNS server is usually owned by ISPs (Internet Service Providers) who work closely with the government to control website accessibility.

## TCP Attack

TCP is the protocol used to transfer data over the internet. It is a connection-oriented protocol, meaning the client and server need to be connected before data can be transferred.

In a TCP attack, the client sends a request to the server, which responds accordingly. This process continues until the server responds with the data the client is looking for. However, if the firewall blocks a response, the data is not received.

### Example 
I want to visit my website (mansoorbarri.com) and read an article about internet firewalls at https://mansoorbarri.com/internet-firewall-pk/.

![Picture showing the request and response for the TCP attack](/img/guides/2024/internet-firewall-pk/tcp-attack.png)

Here, I visit the website (mansoorbarri.com) and the server responds with the main page of the website. Then, I try to visit the article (https://mansoorbarri.com/internet-firewall-pk/) but the firewall blocks the request because the article is restricted.

This method is useful when a government wants to block specific content rather than an entire website. This is why some YouTube videos may not play or load indefinately; the website (https://youtube.com) is not blocked, but the specific video is.

## Invisible Ban

The term "Invisible Ban" describes being banned from a platform without an obvious reason. The government can request the platform to block a specific user or IP address. Sometimes the platform does not comply, making this technique less effective.

I call it an Invisible Ban because the user is unaware of being banned, while the audience sees a message that the user has been banned or is unavailable.

## Conclusion

In conclusion, understanding how nation-wide internet firewalls work highlights the complex and sophisticated methods governments use to control online content. These techniques, including DNS poisoning, TCP attacks, and invisible bans, enable authorities to restrict access to specific information while maintaining overall connectivity. As technology evolves, so too will the methods used to regulate internet access, impacting how we interact with the digital world. 

To counter these restrictions, we need decentralized platforms that operate above the firewall systems of governments. Such platforms could ensure the free flow of information, making it harder for authorities to block content and allowing users to access and share information without undue interference.

-MB 

---