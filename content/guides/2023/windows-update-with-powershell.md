---
title: "Windows Update With Powershell"
date: 2023-01-16
tags: [Windows]
image: "/img/guides/2023/windows-update-with-powershell/main.png"
url : "/guides/windows-update-with-powershell/"
type: "post"
showtableOfContents: true
description: "Streamline your Windows updates with PowerShell. Our guide shows you how to automate the update process and keep your system up-to-date with ease."
---

**These actions are only possible with administrative privileges.*

## Prerequisites
Install the update module: 
```powershell
Install-Module PSWindowsUpdate
Add-WUServiceManager -MicrosoftUpdate
```

## Command
Install all availble updates 
```
Install-WindowsUpdate -MicrosoftUpdate -AcceptAll -AutoReboot | Out-File "C:\MSUpdates.log" -Force
```
Update logs can be found at: ```C:\MSUpdates.log```

![screenshot of the log file](/img/guides/2023/windows-update-with-powershell/2023.png)

that's it <3

----

  