---
title: "THM | Bypassing UAC"
date: 2022-04-11
type: "post"
draft: false
showtableOfContents: true
---

## Room

https://tryhackme.com/room/bypassinguac

steps won't be explained since the room has walkthrough*
## Task 1: Introduction

#### Question 1: Click and continue learning!

*No answer needed*

## Task 2: User Account Control (UAC)

#### Question 1: What is the highest integrity level (IL) available on Windows?

*~ system*

#### Question 2: What is the IL associated with an administrator's elevated token?

*~ high*

#### Question 3: What is the full name of the service in charge of dealing with UAC elevation requests?

*~ Application Information Service*

## Task 3: UAC: GUI based bypasses

#### Question 1: What flag is returned by running the msconfig exploit?

*~ THM{UAC_HELLO_WORLD}*

#### Question 2: What flag is returned by running the azman.msc exploit?

*~ THM{GUI_UAC_BYPASSED_AGAIN}*

## Task 4: UAC: Auto-Elevating Processes

#### Question 1: What flag is returned by running the fodhelper exploit?

*~ THM{AUTOELEVATE4THEWIN}*

## Task 5: UAC: Improving the Fodhelper Exploit to Bypass Windows Defender

#### Question 1: What flag is returned by running the fodhelper-curver exploit?

*~ THM{AV_UAC_BYPASS_4_ALL}*

## Task 6: UAC: Environment Variable Expansion

#### Question 1: What flag is returned by running the DiskCleanup exploit?

*~ THM{SCHEDULED_TASKS_AND_ENVIRONMENT_VARS}*

## Task 7-8

*No answer needed*

that's it ✌🏽

-------------------------------------------------------------
{{< rawhtml >}} 
<script src="https://utteranc.es/client.js"
        repo="mansoorbarri/website"
        issue-term="title"
        theme="dark-blue"
        crossorigin="anonymous"
        async>
</script>
{{< /rawhtml >}}