---
title: "GoldenJackal: New Threat Group Targeting Middle Eastern and South Asian Governments"
date: 2023-05-24
tags: [Cyber News]
image: "/images/articles/new-threat-targeting-asia/main.webp"
type: "post"
showtableOfContents: true
description: ""
---

## Introduction

An advanced persistent threat (APT) actor named GoldenJackal has been targeting government and diplomatic entities in the Middle East and South Asia since 2019, according to a report by Russian cybersecurity firm Kaspersky. This highly targeted APT aims to conduct espionage operations and has chosen specific countries such as Afghanistan, Azerbaijan, Iran, Iraq, Pakistan, and Turkey as its primary targets.

## Modus Operandi

GoldenJackal employs a specific set of .NET-based malware to gain control over victim computers, propagate through removable drives, gather information, capture screenshots, steal credentials, and exfiltrate data. The threat actor has been observed using a fake Skype installer and a malicious Word document as initial infection vectors. Notably, the malicious Word document exploits the Follina vulnerability, which was made public only two days prior.

## Malware Used by GoldenJackal

The malware used by GoldenJackal includes:

- **JackalControl**: A trojan that provides remote control capabilities over the victim machine. It supports a range of predefined commands, enabling the threat actors to execute arbitrary code, download/upload files, and maintain control over the compromised system.

- **JackalSteal**: An implant deployed on the victim machine to identify and exfiltrate specific files of interest to a command-and-control (C&C) server. It can monitor logical drives, remote shares, and removable USB drives.

- **JackalWorm**: This malware propagates through removable USB drives. It hides and replaces the directory that was last modified with a copy of the worm, infecting other systems when the infected USB drive is connected to them. It drops a program designed to install the JackalControl trojan.

- **JackalPerInfo**: Designed to collect information about the compromised system, JackalPerInfo gathers specific files containing stored credentials and information about the victim's web activities.

- **JackalScreenWatcher**: This utility captures screenshots of the victim's desktop at regular intervals and sends them to a hardcoded C&C server.

## Usage of Compromised WordPress Websites

GoldenJackal leverages compromised WordPress websites as intermediaries to proxy requests to and from a backbone server. This tactic helps the group maintain anonymity and reduce its visibility by utilizing unsuspecting websites.

## Potential Connection to Turla

While there are some tactical similarities between GoldenJackal and the Russia-linked cyberespionage group Turla, such as the use of .NET tools and compromised WordPress websites, Kaspersky states that there is currently low confidence in establishing a definitive connection between the two. Further analysis is required to determine if there is any direct relationship between GoldenJackal and Turla.

## Conclusion

The emergence of GoldenJackal as a sophisticated APT targeting government and diplomatic entities in the Middle East and South Asia highlights the need for enhanced cybersecurity measures. Organizations and governments in the region must remain vigilant, update their defenses, and collaborate closely with cybersecurity experts to mitigate the risks posed by such advanced threat groups. The ongoing development and evolution of GoldenJackal's malware toolkit signify a persistent and evolving threat landscape that requires continuous monitoring and proactive defense strategies.

*Note: This article includes additional context provided on the GoldenJackal threat group.*

that's it <3

---
