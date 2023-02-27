---
title: "Admin User vs Standard User"
date: 2023-03-01
tags: [Info]
image: "/images/articles/admin-vs-standard/main.png"
type: "post"
showtableOfContents: true
---

## Debate
On Windows, most security advisories recommend that we run as a standard user rather than an administrator. However, when you think about it, this doesn't really make sense; people coming from Linux or Mac may say that running as standard user is a safe and sensible way of using your computer, but on Windows, in the event of a ransomware, all users except the admin user will be infected, and the standard user can't really do much on Windows, which is why common sense is the only protective guard you can have while using Windows.

## Extras
Changing the standard user setting to ask for pwd is one way to harden the UAC prompt. A guide to doing so can be found [here](/how-to/enable-uac):

![Thumnail for the article Enable UAC Prompt Password For Standard User](/images/how-to/enable-uac/main.png)

## Conclusion 
Personally, I believe that using Normal user over admin user on Windows has no advantage unless you are using Windows machines in an enterprise environment. Just use admin user with some common sense.

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