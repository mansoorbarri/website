---
title: "Expose Your Network To The Internet Without Port Forwarding"
date: 2022-12-14
tags: ["Cloudflare"]
type: "post"
url : "/guides/expose-your-network/"
showtableOfContents: true
description: "Expose your network to the internet without port forwarding. Follow our guide to set up a secure, remote connection and access your devices from anywhere."
---

## Prerequisite

This method is entirely free of costs however, you will just need a cloudflare account and a domain which is using Cloudflare's nameserver's or is bought with Cloudflare. You can signup with cloudflare on [cloudflare.com/signup](https://dash.cloudflare.com/sign-up).

Cloudflare Tunnel is basically a tunnel which works like a VPN, this allows you to expose anything to the internet securely. This can be a website, proxmox server, plex server, docker container or just about anything which requires you to port forward from your router. This is significant especially for those people who's ISPs don't allow port forwarding. 

## Steps

- From the side panel, go to "Zero Trust" 

- Click on the "Access" tab from the side panel followed by "Tunnels" 

- Follow the prompts, select the free plan when it comes to that screen as the free plan is more than enough

- Now go back to "Tunnels" under "Access" from the side bar

- "Create Tunnel" and name your tunnel 

- Follow through the instruction to instal a connector for your specific device and click "next"

- Now fill in the subdomain, domain and IP u wanna forward on. Here it should be localhost and not your public IP. Mine looks something like this: 

![Screenshot](https://github.com/mansoorbarri/website/blob/main/img/guides/2022/expose-your-network/2022.png?raw=true)

- Under "Additional application settings", enable "NO TLS Verify" this option will generate a SSL vertificate for the webpage and click on "Save" 

Now you can access your service from outside your network without port forwarding on your router or device. 

### Video/Source

{{< youtube ey4u7OUAF3c >}}

that's it ✌🏽

-------------------------------------------------------------

  