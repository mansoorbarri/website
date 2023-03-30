---
title: "Block Websites On Your Home Network"
date: 2023-01-02
tags: ["Info"]
image: "/images/guides/home-security/main.png"
type: "post"
draft: false
showtableOfContents: true
---

## Brief 
OpenDNS has a home network security system that you can enable by changing DNS settings on your router's admin page. Because some Internet Service Providers (ISPs), such as Virgin Media, do not allow you to change your DNS, this method may not work for you.

## Steps
To begin, sign up for OpenDNS, at [www.opendns.com/homefree](https://signup.opendns.com/homefree/)

- Scroll down to enter your information.
- Access your router's administration page; the address is usually printed on the back of the router. then locate the DNS settings and enter the following DNS addresses:

    - 208.67.222.222
    - 208.67.220.220

- Now check your settings by going to [opendns.com/welcome](https://welcome.opendns.com/)
- Login to [OpenDNS CPanel](https://login.opendns.com/)
- Click on "Add a network" then click on "ADD THIS NETWORK" 
- Lastly, give your network a name

## Recommended Settings
I recommend the "Moderate" filtering level option because it has a good balance of websites to block and websites not to block. You can add or remove any domains under "Manage individual domains" if you don't want it to block a website or vice versa.

Another tip is to enable stats and logs so you can see which sites are being visited the most (especially those that are blocked) and by which IP address.

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