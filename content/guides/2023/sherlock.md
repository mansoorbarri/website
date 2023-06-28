---
title: "Find Social Media Accounts with Sherlock"
date: 2023-06-28
tags: [penetration testing]
image: "/images/guides/sherlock/main.webp"
url: "/guides/sherlock/"
type: "post"
showtableOfContents: true
description: "Find one's social media account with a hacking tool called Sherlock. Learn more about the tool and how to use it effective in your cyber security journey."
---

{{< rawhtml >}}
<h3 style="color: red">DISCLAIMER: DON'T DO THIS WITH ANYONE WITH ill INTENT</h3>
{{< /rawhtml >}}

this is completely legal but things can take turns if Sherlock isn't used properly.

[Sherlock](https://github.com/sherlock-project/sherlock) is a hacking tool made in python to find social media accounts; this is useful when someone has same usernames across social media platforms but otherwise this might not be as effective. 

## Install 
Clone the repo 
```
git clone https://github.com/sherlock-project/sherlock.git
```

Install the requirements
```
pip3 install -r requirements.txt
```

## usage 
```
python3 sherlock {username}
```

You can also specify timeout duration so the scan doesn't take long, this will be specified in seconds and is the maximum amount of seconds Sherlock will look for the username on a specific site. The default timeout is 60 seconds.

```
python3 sherlock {username} --timeout 25 
```

For example, 
```
python3 sherlock MansoorBarri --timeout 15
```

shows the following: 
```
[*] Checking username mansoorbarri on:

[+] Chess: https://www.chess.com/member/mansoorbarri
[+] Enjin: https://www.enjin.com/profile/mansoorbarri
[+] Fiverr: https://www.fiverr.com/mansoorbarri
[+] Freelancer: https://www.freelancer.com/u/mansoorbarri
[+] G2G: https://www.g2g.com/mansoorbarri
[+] GitHub: https://www.github.com/mansoorbarri
[+] Medium: https://medium.com/@mansoorbarri
[+] Quizlet: https://quizlet.com/mansoorbarri
[+] Telegram: https://t.me/mansoorbarri
[+] Twitter: https://twitter.com/mansoorbarri
[+] Vero: https://vero.co/mansoorbarri
[+] authorSTREAM: http://www.authorstream.com/mansoorbarri/
[+] ebio.gg: https://ebio.gg/mansoorbarri

[*] Search completed with 13 results
```

that's it <3

----

  