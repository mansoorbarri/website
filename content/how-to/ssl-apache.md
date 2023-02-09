---
title: "SSL Certificate with Certbot"
date: 2022-03-17
tags: ["Linux"]
type: "post"
draft: false
showtableOfContents: true
---

# Requirements
Debian, Apache2, Snapd, Certbot

# Install
```
sudo apt update 

sudo apt install snapd -y 
```
install certbot
```
sudo snap install certbot --classic
```
![Screenshot of the command](/images/ssl-apache/2022_1.png)

Create symbolic link so you can run certbot command from the terminal

```
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```
Run certbot command
```
sudo certbot --apache
```

![Screenshot of the command](/images/ssl-apache/2022_3.png)
*you can change "--apache" to "--nginx" if you are using nginx instead of apache*

# Getting the Cert

Enter your valid email address so certbot can contact you for renewal and security notices

![Screenshot of the command](/images/ssl-apache/2022_4.png)

agree all the T&Cs

![Screenshot of the command](/images/ssl-apache/2022_5.png)

![Screenshot of the command](/images/ssl-apache/2022_6.png)

enter your domain name
![Screenshot of the command](/images/ssl-apache/2022_7.png)

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