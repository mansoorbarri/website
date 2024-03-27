---
title: "CSS Integrity Error Hugo"
description: "How to fix CSS integrity error in Hugo. This usually happens when publishing your website using a Pages service on Cloudflare or GitHub."
date: "2024-03-27"
url: "/css-integrity-error-hugo/"
draft: false
categories:
  - Linux
  - Windows
  - Android
tags:
  - Hugo
  - Cloudflare
---

Mene bohot sari Hugo ki themes develop ki hain aur harr baar aik issue ataa hai ke CSS aur JS load nai hoti website pe lekin, [localhost](http://localhost) pe sahi chalti hai jab ap `hugo server` run karein. 

Yeh issue basically apke service provider ki side se hai, jese ke Cloudflare pages ya GitHub pages. Yeh providers apki website ki cache version store karte hain, jo cache ki *integrity* value different hoti hai apki website ke latest version se jiski wajah se CSS load nai hoti. Aik asaan hal yeh hai ke ap apne service provide se cache clear kar dein. Cloudflare ke liye yeh steps hain: 

- Apne pages site ki settings pe jayein
- Phir *Builds & deplotments* pe jayein
- *Build cache* ke neeche *clear cache* pe click karein

Github Pages ke liye bhi aesi steps hain. 

Iss issue ko permanently fix karne ke liye apko *integrity* ki value hata ni paregi, kuch aese:

![screenshot of the code with integrity removed](/img/articles/2024/css-integrity-error-hugo/code-screenshot.png)

-MB
