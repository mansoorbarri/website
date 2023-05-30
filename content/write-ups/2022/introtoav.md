---
title: "THM | Introduction to Antivirus"
date: 2022-08-07
type: "post"
url : "/write-ups/introtonav"
showtableOfContents: true
image: "/img/write-ups/2022/introtoav/main.webp"
---

## Room

https://tryhackme.com/room/introtoav

![screenshot of the room](/img/write-ups/2022/introtoav/main.webp)

## Task 1 - Introduction

*no answer needed*

## Task 2 - Antivirus Software 
*answers are from the text**

#### Question 1: What was the virus name that infected John McAfee's PC?

~ *brain*

#### Question 2: Which PC Antivirus vendor implemented the first AV software on the market?

~ *McAfee*

#### Question 3: Antivirus software is a _____-based security solution.

~ *host*

## Task 3 - Antivirus Features 
*answers are from the text**

#### Question 1: Which AV feature analyzes malware in a safe and isolated environment?

~ *emulator*

#### Question 2: An _______ feature is a process of restoring or decrypting the compressed executable files to the original. 

~ *unpacker*

#### Question 3

*no answer needed*

## Task 4 - Deploy the VM

*no answer needed*

## Task 5 - AV Static Detention

#### Question 1: What is the sigtool tool output to generate an MD5 of the AV-Check.exe binary?

~ *f4a974b0cf25dca7fbce8701b7ab3a88:6144:AV-Check.exe*

explaination: open cmd and type this command: 
```
c:\Program Files\ClamAV\sigtool.exe" --md5 c:\Users\thm\Desktop\Samples\AV-Check.exe"
```
it uses sigtool.exe to generate md5 hash for AV-Check.exe

#### Question 2: Use the strings tool to list all human-readable strings of the AV-Check binary. What is the flag?

~ *THM{Y0uC4nC-5tr16s}*

explaination open cmd and type these commands: 

```
cd Desktop/Samples
strings AV-Checks.exe | findstr "THM"
```
change directory to Desktop/Samples then check strings in the file AV-Checks.exe. Since thm flags starts with "THM" we can specify that as well to make it easier by "| findstr "THM"".

![](/img/write-ups/2022/introtoav/2022_1.png)

## Task 6 - Other Detection Techniques [answer is from the text]

#### Question 1: Which detection method is used to analyze malicious software inside virtual environments?

~ *Dynamic Detection*

## Task 7 & 8

*no answer needed*

that's it ✌🏽

-------------------------------------------------------------
{{< rawhtml >}} 
 
{{< /rawhtml >}}

