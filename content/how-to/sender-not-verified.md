---
title: "Fix | Sender Has Not Been Verified"
date: 2023-03-06
tags: [Email]
image: "/images/how-to/sender-not-verified/main.png"
type: "post"
showtableOfContents: true
---

## Error

You might have seen this error when using an email alias on your domain:
**Email alias guide: [/how-to/email-alias/](/how-to/email-alias/)*

![screenshot of the error](/images/how-to/sender-not-verified/2023.png)

This happenes because of the LUA value in your DNS points to some other domain, you can fix this by changing the LUA value to your domain.

## Fix | DNS Entry

Before:
![Screenshot of previous DNS entry which gives error](/images/how-to/sender-not-verified/2023-01.png)

After: 
![Screenshot of the new DNS entry which fixes the error](/images/how-to/sender-not-verified/2023-02.png)



that's it <3

----

{{< rawhtml >}} 
<script src="https://utteranc.es/client.js"
        repo="mansoorbarri/website"
        issue-term="title"
        theme="preferred-color-scheme"
        crossorigin="anonymous"
        async>
</script>
{{< /rawhtml >}}