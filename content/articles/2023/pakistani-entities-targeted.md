---
title: "Pakistan Targeted In a Sophisticated Attack"
date: 2023-07-28
tags: ["Cyber News"]
url: "/articles/pakistani-entities-targeted/"
type: "post"
showtableOfContents: true
description: ""
---

In a recent incident, several entities in Pakistan fell victim to a sophisticated cyberattack orchestrated by an unidentified threat actor. The attack involved the deployment of ShadowPad, malicious software that can infiltrate and compromise systems, posing serious risks to the affected organisations.

## Targets and Timeline
The targets of this attack included a government entity, a public sector bank, and a telecommunications provider, as reported by cybersecurity experts at Trend Micro. 

The attacks were carried out over a period spanning from mid-February 2022 to September 2022, raising concerns about the scale and duration of the breach.

## Supply-Chain Attack Suspected
The method used in this attack is suspected to be a supply-chain attack, wherein the threat actor tampered with a legitimate software application to distribute the malware covertly. The application in question was "E-Office," developed by the National Information Technology Board (NITB) of Pakistan and intended to facilitate paperless operations within government departments.

The attackers cleverly disguised their malicious intent by adding three files to the authentic MSI installer of E-Office. These files were `Telerik.Windows.Data.Validation.dll`, `mscoree.dll`, and `mscoree.dll.dat`. One of these files, `Telerik.Windows.Data.Validation.dll`, was signed by Microsoft and served as a means to load the ShadowPad payload into the system through DLL side-loading.

## Social Engineering Tactics
Although it remains uncertain how the compromised installer was delivered to the victims, it is suspected that social engineering tactics were used. It's possible that the threat actor enticed unsuspecting individuals to run the trojanized version of E-Office, unknowingly installing the malware on their systems.

## Potential Chinese Threat Actor Link
Upon closer examination of the attack, cybersecurity researchers noted similarities in the obfuscation techniques used with those employed by a Chinese hacking group known as Winnti (or APT41), as previously exposed by Positive Technologies in January 2021. This observation sparked speculation about a potential link to Chinese threat actors, but conclusive attribution is challenging due to the lack of concrete evidence.

## Post-Exploitation Activities
The ramifications of this attack were severe, as post-exploitation activities involved the use of Mimikatz, a tool designed to extract passwords and credentials from the system's memory. This further heightened concerns about the theft of sensitive information and potential access to critical systems.

## Researcher's Insights
Trend Micro's researcher, Daniel Lunghi, described the attacker as highly capable, effectively modifying a governmental application's installer to compromise three sensitive targets. While the ShadowPad malware has been associated with Chinese threat actors in the past, it is crucial to avoid jumping to conclusions without definitive proof.

## Conclusion
This incident serves as a stark reminder of the constant and evolving threat posed by cyber attackers, especially with supply-chain attacks becoming increasingly prevalent. Organisations must remain vigilant, implement robust cybersecurity measures, and stay informed about the latest threats to protect their data, systems, and reputation from harm. 

Collaborative efforts between governments, cybersecurity companies, and private entities are essential in countering such attacks and safeguarding the digital landscape.

that's it <3

---

  
