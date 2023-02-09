---
title: "UFW | Firewall on Linux Systems"
date: 2022-08-05
tags: ["linux"]
type: "post"
draft: false
showtableOfContents: true
---

Uncomplicated Firewall (UFW) is an easy and beginner friendly firewall for linux systems.

# Install 

```bash
sudo apt-get update  
sudo apt-get install ufw  
```
![](/images/linux-firewall/2022.png)

# Verify Install

```bash
sudo ufw status
```
![](/images/linux-firewall/2022_1.png)

# Basic Blocks

```bash
sudo ufw default deny incoming  
sudo ufw default allow outgoing
```
![](/images/linux-firewall/2022_2.png)

# Enable Firewall

```bash
sudo ufw enable
```
![](/images/linux-firewall/2022_3.png)

# Blocking Ports

you can block any port by "sudo ufw deny PORT" for example, to block port 76 type: 

```bash
sudo ufw deny 76
```

# Allow Ports

you can allow any port by "sudo ufw allow PORT" for example, to allow port 22 (default SSH port) type:

```bash 
sudo ufw allow 22
```

## Video

{{< rawhtml >}} 

<video width=100% muted autoplay loop>
    <source src="/images/linux-firewall/video.m4v" type="video/webm">
        your browser doesn't support video tag.
</video>

{{< /rawhtml >}}

*Right click and check "Show all controls" to see video controls**

# Conclusion

For a home base user UFW is more than enough. Play around with UFW to learn more, "sudo ufw -h" is the wayyy :) 

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