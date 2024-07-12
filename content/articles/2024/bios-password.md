---
title: "Reset BIOS Adminstration Password"
description: "step-by-step guide shows you how to use the "System Disabled" code and an online tool to regain access, saving you from expensive repair fees." 
date: "2024-07-08"
url: "/bios-password/"
draft: false
categories:
  - Linux
  - Windows
tags:
  - BIOS
---

## Context 

I was repairing a laptop with currupted Windows but got a blue screen with *"Enter Adminstration Password"* however, this password was never set and its not anywhere on the laptop which is confusing. 

I saw some online ads of people offering to fix this for $100 which is just bs. 

## Fixing BIOS Admin Password 

First enter wrong password so it shows a *"System Disabled"* with a code. Something like this: 

![Picture of the "system disable" screen](/img/guides/2024/bios-password/system-disabled.webp)

Now visit [bios-pw](https://bios-pw.org) and enter the code which is shown. Make sure you enter the alphabet as well. Something like this:  

![screenshot of bios-pw](/img/guides/2024/bios-password/bios-pw.png)

Now restart the laptop and the BIOS should be accessable. 

-MB

---
