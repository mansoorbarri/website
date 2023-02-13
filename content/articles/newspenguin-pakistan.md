---
title: "NewsPenguin Cyber Attack Targets Pakistani Entities During Upcoming International Maritime Expo"
date: 2023-02-12
tags: ["Cyber News"]
image: "/images/articles/newspenguin-pakistan/main.png"
type: "post"
showtableOfContents: true
---

## Introduction
NewsPenguin, a new cyber threat group, has been linked to a phishing campaign targeting Pakistani entities.

## Targeted Phishing Emails: 
The attacker sent out targeted phishing emails with a weaponized document attached, ostensibly for the Pakistan International Maritime Expo and Conference (PIMEC-23).

The emails are intended to target marine-related entities and event attendees by tricking recipients into opening a seemingly innocuous Microsoft Word document.

## Weaponized Document
After launching the document and enabling [macros](https://en.wikipedia.org/wiki/Macro_(computer_science)), a technique known as remote template injection is used to retrieve the next-stage payload from an actor-controlled server.

The server is set up to return the artefact only if the request comes from a Pakistani IP address.

## Covert Spying Tool
BlackBerry Research and Intelligence Team discovered the server hosting two ZIP archive files without password protection.

One of the archive files contains a Windows executable (updates.exe) that serves as a covert spying tool capable of circumventing [sandboxes](https://en.wikipedia.org/wiki/Sandbox_(computer_security)) and [virtual machines](https://en.wikipedia.org/wiki/Virtual_machine).

## Measures to Avoid Being Discovered
The threat actor behind the campaign has made a concerted effort to remain undetected.

For example, there is a five-minute delay between each request to reduce the risk of being discovered. In the event of exposure or when the operation is completed, the implant includes self-delete commands.

## Data Theft
The implant is programmed to steal sensitive files from the victim's hard drive. It searches the system for files, gathers information about them, and uploads them to the remote server if they are deemed interesting.

The binary's contents are encrypted using the XOR encryption algorithm, with "penguin" as the XOR key. The HTTP response containing the backdoor also includes the name parameter in the Content-Disposition response header set to "getlatestnews".

## Goal
The campaign's goal is to find and steal the most interesting files containing information about the conference's theme, people's networking, and technologies presented there. Rather than being a financially motivated attack, it appears that the threat actor is actively targeting government organisations.

## Advance Planning 
An examination of the domain hosting the payloads reveals that it has been registered since June 30, 2022, indicating some level of campaign planning.

The name NewsPenguin refers to the unusual XOR key and the name parameter, and BlackBerry discovered no tactical overlaps that link the malware to any currently-known threat actor or group.

that's it <3

---

{{< rawhtml >}} 
<script src="https://utteranc.es/client.js"
        repo="mansoorbarri/website"
        issue-term="title"
        theme="github-dark"
        crossorigin="anonymous"
        async>
</script>
{{< /rawhtml >}}