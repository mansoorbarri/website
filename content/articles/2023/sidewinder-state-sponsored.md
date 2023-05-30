---
title: "Unveiling Sidewinder Hacker Group's Covert Attack Infrastructure"
date: 2023-05-15
tags: [Info]
image: "/images/articles/sidewinder-state-sponsored/main.webp"
url : "/articles/sidewinder-state-sponsored/"
type: "post"
showtableOfContents: true
description: "Security researchers have discovered previously unknown attack infrastructure that SideWinder used to attack targets in China and Pakistan."
---

Cybersecurity researchers have recently discovered previously undisclosed attack infrastructure utilized by the highly prolific state-sponsored group known as SideWinder. This group has been targeting entities in Pakistan and China, leaving a trail of cyber espionage in its wake. The joint report by cybersecurity companies Group-IB and Bridewell sheds light on a network of 55 domains and IP addresses employed by the threat actors.

## The Mimicry Game: Phishing Domains Impersonating Prominent Organizations

Researchers Nikita Rostovtsev, Joshua Penny, and Yashraj Solanki revealed that the identified phishing domains imitate various organizations in sectors such as news, government, telecommunications, and finance. The sophisticated nature of these mimicked domains aims to deceive unsuspecting victims and gain unauthorized access to sensitive information.

SideWinder has been active since at least 2012, primarily employing spear-phishing techniques to infiltrate targeted environments. The group's focus is widely believed to be associated with Indian espionage interests. The nations most frequently targeted by SideWinder include Pakistan, China, Sri Lanka, Afghanistan, Bangladesh, Myanmar, the Philippines, Qatar, and Singapore.

## A String of Covert Operations Unveiled

In February, Group-IB presented evidence suggesting that SideWinder had targeted 61 government, military, law enforcement, and other organizations across Asia between June and November 2021. More recently, the state-sponsored group was observed employing a technique called server-based polymorphism to carry out evasive attacks against Pakistani government organizations.

The newly discovered domains mimic government organizations in Pakistan, China, and India. Researchers noted the consistent use of the same values in WHOIS records and similar registration information. Some of these domains host government-themed lure documents designed to download an unknown next-stage payload.

A majority of these documents were uploaded to VirusTotal from Pakistan in March 2023. Among them is a Microsoft Word file allegedly from the Pakistan Navy War College (PNWC), which has undergone analysis by QiAnXin and BlackBerry in recent months.

## Additional Findings: LNK Files and Malicious Android APK

Further investigation into SideWinder's infrastructure led to the discovery of a Windows shortcut (LNK) file uploaded to VirusTotal from Beijing in late November 2022. This LNK file is engineered to execute an HTML application (HTA) file retrieved from a remote server that mimics Tsinghua University's email system (mailtsinghua.sinacn[.]co).

Another LNK file, uploaded to VirusTotal around the same time from Kathmandu, adopts a similar method to fetch an HTA file from a domain posing as a Nepalese government website (mailv.mofs-gov[.]org).

Additionally, researchers uncovered a malicious Android APK file (226617) uploaded to VirusTotal from Sri Lanka in March 2023. Disguised as a "Ludo Game," this rogue app requests access to contacts, location, phone logs, SMS messages, and calendar, effectively acting as spyware capable of harvesting sensitive information.

Group-IB noted similarities between this app and the previously disclosed fake Secure VPN app, which was distributed to targets in Pakistan using a traffic direction system (TDS) called AntiBot.

## Targeted Sectors and Recommendations

The domains identified by researchers point to SideWinder's focus on financial, government, and law enforcement organizations, as well as companies specializing in e-commerce and mass media in Pakistan and China. As with many other advanced persistent threat (APT) groups, SideWinder relies on targeted spear-phishing as the initial vector for its attacks.

To counter such threats effectively, organizations should prioritize the deployment of robust business email protection solutions capable of detecting and neutralizing malicious content. Heightened awareness and strong cybersecurity measures are essential to safeguard against the persistent and evolving threats posed by state-sponsored hacker groups like SideWinder.

{{< rawhtml >}}
<div style=" border-top: 1px dotted;" class="dotted-line"></div>
{{< /rawhtml >}}

*Article Reference:*
- [State-Sponsored Sidewinder Hacker Group's Covert Attack Infrastructure Uncovered](https://example.com/article)
- Original Source: The Hacker News
- Report Authors: Nikita Rostovtsev (Group-IB), Joshua Penny (Bridewell), Yashraj Solanki (Bridewell)

that's it <3

---

  