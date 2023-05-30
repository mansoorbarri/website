---
title: "Better APT"
date: 2022-07-20
tags: ["Linux"]
type: "post"
url : "/guides/better-apt/"
showtableOfContents: true
description: "Explore the best alternatives to APT package manager with our comprehensive guide. Find the right package manager to optimize your Linux-based system."
---

why not APT? APT has slow mirrors, APT isn't optimised for performance right out of the box, rolling back updates or installs is pain because there is no concept of history and last but not the least, the look of APT is just mehhh.

Nala is just better. Nala fixes all these problems right from the start while having APT is the backend.

# Install

add repository

```bash
echo "deb http://deb.volian.org/volian/ scar main" | sudo tee /etc/apt/sources.list.d/volian-archive-scar-unstable.list
wget -qO - https://deb.volian.org/volian/scar.key | sudo tee /etc/apt/trusted.gpg.d/volian-archive-scar-unstable.gpg > /dev/null
```

Install on Debian Stable or Ubuntu: 
```bash
sudo apt update && sudo apt install nala-legacy
```

*for other versions and methods, visit the [nala repo](https://github.com/volitank/nala#installation)*

# Choosing The Right Mirrors

In most cases the first three are the best onces. Choose them like so:

![reference image](/img/guides/2022/better-apt/2022.png)

# Usage

Just change "nala" with "apt" when installing, removing or updating the system.

# View Update History

View the history:

```bash
nala history
```

Undo [sudo nala history undo ID]

```bash
sudo nala history undo 1
```

# .bashrc change for apt -> nala
copy this to your .bashrc so it uses nala even when you type "apt"

```
apt() { 
  command nala "$@"
}
sudo() {
  if [ "$1" = "apt" ]; then
    shift
    command sudo nala "$@"
  else
    command sudo "$@"
  fi
}
```

# Conclusion 

Nala is something I use personally and it has dramatically decreased the time I spend managing packages on Debian machines, This is something you wish you had before. 

that's it ✌🏽

-------------------------------------------------------------
{{< rawhtml >}} 
 
{{< /rawhtml >}}