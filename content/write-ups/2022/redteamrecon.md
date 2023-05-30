---
title: "THM | Red Team Recon"
date: 2022-04-15
type: "post"
url : "/write-ups/redteamrecon/"
showtableOfContents: true
---

## Room

https://tryhackme.com/room/redteamrecon

## Task 1: Introduction

*No answer needed*

## Task 2:  Taxonomy of Reconnaissance

*No answer needed*

## Task 3: Built-in Tools

#### Question 1: When was ```thmredteam.com``` created (registered)? (YYYY-MM-DD)

*~ 2021-09-24*

```bash
whois thmredteam.com
```

![source](/img/write-ups/2022/redteamrecon/2022.png)

#### Question 2: To how many IPv4 addresses does ```clinic.thmredteam.com``` resolve?

*~ 2*

```bash
host clinic.thmredteam.com
```

![source](/img/write-ups/2022/redteamrecon/2022_1.png)

#### Question 3: To how many IPv6 addresses does ```clinic.thmredteam.com``` resolve?

*~ 2*

```bash
host clinic.thmredteam.com
```

![source](/img/write-ups/2022/redteamrecon/2022_2.png)


## Task 4: Advanced Searching

#### Question 1: How would you search using Google for ```xls``` indexed for http://clinic.thmredteam.com?

*~ filetype:xls site:clinic.thmredteam.com*

#### Question 2: How would you search using Google for files with the word passwords for http://clinic.thmredteam.com?

*~ passwords site:clinic.thmredteam.com*

## Task 5: Specialized Search Engines

#### Question 1: What is the shodan command to get your Internet-facing IP address?

*~ shodan myip*

## Task 6: Recon-ng

#### Question 1: How do you start ```recon-ng``` with workspace ```clinicredteam```

*~ recon-ng -w clinicredteam*

#### Question 2: How many modules with the name ```virustotal``` exist?

*~ 2*

* run "recon-ng" in terminal 

* "marketplace install virustotal"

* "module search virustotal"

![source](/img/write-ups/2022/redteamrecon/2022_3.png)

#### Question 3: There is a single module under ```hosts-domains```. What is its name?

*~ migrate_hosts*

* run "recon-ng" in terminal 

* "marketplace install hosts-domains"

* "module search hosts-domain"

![source](/img/write-ups/2022/redteamrecon/2022_4.png)

#### Question 4: ```censys_email_address``` is a module that “retrieves email addresses from the TLS certificates for a company.” Who is the author?

*~ Censys Team*

* run "recon-ng" in terminal 

* "marketplace info censys_email_address"

![source](/img/write-ups/2022/redteamrecon/2022_5.png)

## Task 7: Maltego 

#### Question 1: What is the name of the transform that queries NIST’s National Vulnerability Database?

*~ nist NVD*

#### Question 2: What is the name of the project that offers a transform based on ATT&CK?

*~ MISP project*

## Task 8: Summary

*No answer needed*

that's it ✌🏽

-------------------------------------------------------------
{{< rawhtml >}} 
 
{{< /rawhtml >}}