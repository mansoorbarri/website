---
title: "Enable UAC Prompt Password For Standard User"
date: 2023-02-27
tags: [Windows]
url : "/guides/enable-uac/"
type: "post"
showtableOfContents: true
description: "Enhance security on your Windows PC with UAC prompt password for standard users. Follow our step-by-step guide for instructions."
---

Simply run this [`.reg`](/img/guides/2023/enable-uac/Standard_users_UAC_Prompt_for_credentials.reg) file which will ammend a registery key

the key: 
```
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System
```

ConsentPromptBehaviorUser DWORD

0 = Automatically deny elevation requests

1 = Prompt for credentials on the secure desktop

3 = Prompt for credentials (default)

that's it <3

----

  