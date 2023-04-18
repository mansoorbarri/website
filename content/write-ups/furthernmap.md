---
title: "THM | nmap"
date: 2022-01-02
type: "post"
draft: false
showtableOfContents: true
---

## Room

https://tryhackme.com/room/furthernmap

## Task 1: Deploy

#### Question 1: Deploy the attached VM

*No Answer Needed*

## Task 2: Introduction 

#### Question 1: What networking constructs are used to direct traffic to the right application on a server?

*~ Ports*

#### Question 2: How many of these are available on any network-enabled computer?

*~ 65535*

#### Question 3: [Research] How many of these are considered "well-known"? (These are the "standard" numbers mentioned in the task)

*~ 1024*

## Task 3: Nmap Switches

#### Question 1: What is the first switch listed in the help menu for a 'Syn Scan' (more on this later!)?

*~ -sS*

```bash
nmap -h | grep "SYN"
```

![Screenshot of the command](https://miro.medium.com/max/630/1*JfDU__RfiG0HwADtbT2Wmw.png)

#### Question 2: Which switch would you use for a "UDP scan"?

*~ -sU*

```bash
nmap -h | grep "UDP"
```

![Screenshot of the command](https://miro.medium.com/max/630/1*IPNlLSF_YowNvZS2WAhJ7g.png)

#### Question 3: If you wanted to detect which operating system the target is running on, which switch would you use?

*~ -O*

```bash
nmap -h | grep "OS"
```

![Screenshot of the command](https://miro.medium.com/max/630/1*O1AgA9H7Kd6ZiBaW-6s_vg.png)

#### Question 4: Nmap provides a switch to detect the version of the services running on the target. What is this switch?

*~ -sV*

```bash 
nmap -h | grep "service"
```

![screenshot of the command](https://miro.medium.com/max/630/1*DP64PN3tXjcn6G2WrTf1Mg.png)

#### Question 5: The default output provided by nmap often does not provide enough information for a pentester. How would you increase the verbosity?

*~ -v*

```bash
nmap -h | grep "verbosity"
```

![screenshot of the command](https://miro.medium.com/max/630/1*2JU6NjAksW1UF6bAoFQEUQ.png)

#### Question 6: Verbosity level one is good, but verbosity level two is better! How would you set the verbosity level to two?
(Note: it's highly advisable to always use at least this option)

*~ -vv*

```bash 
nmap -h | grep "verbosity"
```

![screenshot of the command](https://miro.medium.com/max/630/1*2JU6NjAksW1UF6bAoFQEUQ.png)

#### Question 7: What switch would you use to save the nmap results in three major formats?

*~ -oA*

```bash
nmap -h | grep "Output"
```

![screenshot of the command](https://miro.medium.com/max/630/1*ikWWac6PzuIxF02eZRHMEA.png)

#### Question 8: What switch would you use to save the nmap results in a "normal" format?

*~ -oN*

```bash
nmap -h | grep "normal"
```

![screenshot of the command](https://miro.medium.com/max/630/1*H5dLSxLimRIz-6dFeZl9dQ.png)

#### Question 9: A very useful output format: how would you save results in a "grepable" format?

*~ -oG*

```bash
nmap -h | grep "Output"
```
![screenshot of the command](https://miro.medium.com/max/630/1*9VkiYPok8ROHv5aTnns38Q.png)

#### Question 10: How would you activate this setting?

*~ -A*

```bash
nmap -h | grep "OS"
```

![screenshot of the command](https://miro.medium.com/max/630/1*057ll05UObbbMI9yj7Td6w.png)

#### Question 11: How would you set the timing template to level 5?

*~ T5*

```bash
nmap -h | grep "timing"
```

![screenshot of the command](https://miro.medium.com/max/630/1*SpFL1LLYt7KrvTvf6wIIDQ.png)

#### Question 12: How would you tell nmap to only scan port 80?

*~ -p 80*

```bash
nmap -h | grep "port"
```

![screenshot of the command](https://miro.medium.com/max/630/1*PfVsSgTbcB0m82sgiWuFog.png)

#### Question 13: How would you tell nmap to scan ports 1000-1500?

*~ -p 1000-1500*

#### Question 14: How would you tell nmap to scan all ports?

*~ -p-*

#### Question 15: How would you activate a script from the nmap scripting library (lots more on this later!)?

*~ -- script*

```bash
nmap -h | grep "script"
```

![screenshot of the command](https://miro.medium.com/max/630/1*6P40Kpdz07Mxz2Tnsp6mLg.png)

#### Question 16: How would you activate all of the scripts in the "vuln" category?

*~ --script=vuln*

```bash
nmap -h | grep "script"
```

![screenshot of the command](https://miro.medium.com/max/630/1*6P40Kpdz07Mxz2Tnsp6mLg.png)

## Task 4: ```Scan types``` Overview

#### Question 1: Read the Scan Types Introduction

*No answer needed*

## Task 5: ```Scan types``` TCP Connect Scans

#### Question 1: Which RFC defines the appropriate behaviour for the TCP protocol?

*~ RFC 793*

![source](https://miro.medium.com/max/571/1*gU7ODh1damWkcLRZ7QxjOg.png)

#### Question 2: If a port is closed, which flag should the server send back to indicate this?

*~ RST*

![source](https://miro.medium.com/max/571/1*pAvoen6RFD_EhtZW0Iabcw.png)

## Task 6: ```Scan Types``` SYN Scans

#### Question 1: There are two other names for a SYN scan, what are they?

*~ Half-Open, Stealth*

![source](https://miro.medium.com/max/565/1*eweNzeUivBtXyvPfYWp-LQ.png)

#### Question 2: Can Nmap use a SYN scan without Sudo permissions (Y/N)?

*~ N*

![source](https://miro.medium.com/max/566/1*HIgs_84Vyo4LlsJo1rb6eA.png)

## Task 7: ```Scan Types``` UDP Scans

#### Question 1: If a UDP port doesn't respond to an Nmap scan, what will it be marked as?

*~ open|filtered*

![source](https://miro.medium.com/max/570/1*An7FaIzWZ-aki-O0W1YR9A.png)

#### Question 2: When a UDP port is closed, by convention the target should send back a "port unreachable" message. Which protocol would it use to do so?

*~ ICMP*

![source](https://miro.medium.com/max/565/1*zAWeNK47XU5gE2GgXfofdw.png)

## Task 8: ```Scan Types``` NULL, FIN and Xmas

#### Question 1: Which of the three shown scan types uses the URG flag?

*~ xmas*

![source](https://miro.medium.com/max/553/1*bwPvy-4GHhCyFWJ5V78r1A.png)

#### Question 2: Why are NULL, FIN and Xmas scans generally used?

*~ Firewall evasion*

![source](https://miro.medium.com/max/559/1*mJvPT8-49PBEDbRswx1iIA.png)

#### Question 3: Which common OS may respond to a NULL, FIN or Xmas scan with a RST for every port?

*~ Microsoft Windows*

![source](https://miro.medium.com/max/558/1*ZqFxYZi6wnk0G9j7gcQBKA.png)

## Task 9: ```Scan Types``` ICMP Network Scanning

#### Question 1: How would you perform a ping sweep on the 172.16.x.x network (Netmask: 255.255.0.0) using Nmap? (CIDR notation)

*~ nmap -sn 172.16.0.0/16*

![source](https://miro.medium.com/max/558/1*hXcL6RQGX91m4GCLcYqFtA.png)

## Task 10: ```NSE Scripts``` Overview

#### Question 1: What language are NSE scripts written in?

*~ Lua*

![source](https://miro.medium.com/max/565/1*qfK8n2cx5_VwGP7dWOw-pw.png)

#### Question 2: Which category of scripts would be a very bad idea to run in a production environment?

*~ intrusive*

![source](https://miro.medium.com/max/551/1*_cpUPUQQLs1unNcTAXhCEQ.png)

## Task 11: ```NSE Scripts``` Working with the NSE

#### Question 1: What optional argument can the ```ftp-anon.nse``` script take?

*~ maxlist*

![source](https://miro.medium.com/max/563/1*RdcdhBrNxqEqZ3ZyxRXRfA.png)

![source](https://miro.medium.com/max/630/1*N3HB2MQ0DJfPgw0i7T4h4A.png)

## Task 12: ```NSE Scripts``` Searching for Scripts

#### Question 1: What is the filename of the script which determines the underlying OS of the SMB server?

*~ smb-os-discovery.nse*

```bash
cd /usr/share/nmap/scripts && ls | grep "os"
```

![source](https://miro.medium.com/max/566/1*rNpQa6pHETXc5HtsNBk5DQ.png)

#### Question 2: Read through this script. What does it depend on?

*~ smb-brute*

```bash
cat smb-os-discovery.nse | grep "depend"
```

![source](https://miro.medium.com/max/630/1*cVBzaPYMJT4EE1sJuyW0kA.png)

## Task 13: Firewall Evasion

#### Question 1: Which simple (and frequently relied upon) protocol is often blocked, requiring the use of the ```-Pn``` switch?

*~ ICMP*

![source](https://miro.medium.com/max/438/1*KOoZqY5-0m52KTdXd69ipQ.png)

#### Question 2: [Research] Which Nmap switch allows you to append an arbitrary length of random data to the end of packets?

*~ --data-lenght*

## Task 14: Practical

#### Question 1: Does the target ```(MACHINE_IP)``` respond to ICMP (ping) requests (Y/N)?

*~ N*

```bash
nmap <machine-ip>
```

![source](https://miro.medium.com/max/630/1*PEHgTauHxaMrBqR2o9ZIWA.png)

#### Question 2: Perform an Xmas scan on the first 999 ports of the target -- how many ports are shown to be open or filtered?

*~ 999*

```bash
sudo nmap -Pn -sX -vv -p 0–900 <machine-ip>
```

![source](https://miro.medium.com/max/630/1*CCc_sX5YaEB_HKeBSTUpjA.png)

Explaination: 

* sudo is used to give admin permission to nmap

* Pn is used because we know from the previous command that target does not respond to ICMP requests

* -sX is used because we want to do a Xmas scan

* -vv is used because level 2 verbosity is recommanded

* -p is used to specify port range, which in this case is from 0 to 900

#### Question 3: There is a reason given for this -- what is it?

*no response*

#### Question 4: Perform a TCP SYN scan on the first 5000 ports of the target -- how many ports are shown to be open?

*~ 5*

```bash
sudo nmap -Pn -sS <machine-ip>
```
![source](https://miro.medium.com/max/630/1*JYPavMh4FcBOjgpvxQydKQ.png)

Explaination:

* sudo is used because TCP SYN scan requires admin privileges

* -Pn is used because we know from the previous command that target does not respond to ICMP requests

* -sS indicates that it is a TCP scan

#### Question 5: Open Wireshark (see Cryillic's Wireshark Room for instructions) and perform a TCP Connect scan against port 80 on the target, monitoring the results. Make sure you understand what's going on.

*No answer needed*

#### Question 6: Deploy the ```ftp-anon``` script against the box. Can Nmap login successfully to the FTP server on port 21? (Y/N)

*~ Y*

```bash 
nmap -Pn -sV -sC <machine-ip>
```

![source](https://miro.medium.com/max/630/1*1cSKh1SK-w5i0NjWubOtWA.png)

Explaination:

* -Pn is used because we know from the previous command that target does not respond to ICMP requests

* -sV is used to determine the version of the service running on the port

* -sV is used to scan with defualt NSE scripts (which includes ftp-anon)

## Task 15: Conclusion

#### Question 1: Read the conclusion

*No answer needed*

that's it :) Here is a [Cheat Sheet](https://www.stationx.net/nmap-cheat-sheet/) for future use :)

that's it ✌🏽

-------------------------------------------------------------
{{< rawhtml >}} 
 
{{< /rawhtml >}}