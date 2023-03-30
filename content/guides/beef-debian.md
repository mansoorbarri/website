---
title: "Install BeEF on Debian"
date: 2022-02-15
tags: ["Linux", "Penetration Testing"]
type: "post"
draft: false
showtableOfContents: true
---

# DISCLAIMER

*__THIS TOOL SHOULD ONLY BE USED FOR EDUCATIONAL OR ETHICAL HACKING PURPOSE. MISUSE OF THIS TOOL WILL LEAD TO PROSECUTION.__*

## BRIEF

[BeEF](https://github.com/beefproject/beef) is short for The Browser Exploitation Framework. It is a penetration testing tool that focuses on the web browser.

## Step 1: installing dependencies 

Before installing anything update your repositories.
```
sudo apt update -y
```

![SS of the command](/images/guides/BeEf-Debian/1.png)

Ruby, Ruby-dev and Git is required for BeEF. Install them using:
```
sudo apt install ruby ruby-dev git -y
```

![SS of the command](/images/guides/BeEf-Debian/2.png)

## Step 2: Installation

Clone BeEF repo 
```
git clone https://github.com/beefproject/beef
```
![SS of the command](/images/guides/BeEf-Debian/3.png)

cd into beef folder
```
cd beef/
```
Run the install script with sudo 
```
sudo ./install
```
![SS of the command](/images/guides/BeEf-Debian/4.png)

Say 'y' to both prompts

![SS of the command](/images/guides/BeEf-Debian/5.png)
.

![SS of the command](/images/guides/BeEf-Debian/6.png)

## Step 3: Setup

open config.yaml and change the default credentials. BeEF will not work with default creds

```
nano config.yaml
```
![SS of the command](/images/guides/BeEf-Debian/7.png)

Here I am using "test" as username and "beef" as password

![SS of the command](/images/guides/BeEf-Debian/8.png)
*use ctrl+x then press y then enter/return to save and exit the config file*

Now start BeEF by
```
./beef
```
![SS of the command](/images/guides/BeEf-Debian/9.png)

Here I got a error. To fix use this command
```
bundle install
```

![SS of the command](/images/guides/BeEf-Debian/10.png)
*if you don't have bundler use ``` sudo apt install bundler -y ```*

Type your sudo password

![SS of the command](/images/guides/BeEf-Debian/11.png)

now start BeEF again
```
./beef
```

![SS of the command](/images/guides/BeEf-Debian/12.png)

![SS of the command](/images/guides/BeEf-Debian/13.png)

Use the link next to "UI URL" to access the BeEF portal

![SS of the command](/images/guides/BeEf-Debian/14.png)

BeEF portal 

![SS of the command](/images/guides/BeEf-Debian/15.png)

Login and use BeEF for __education and pen testing__ purposes only 

that’s it ✌🏽

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