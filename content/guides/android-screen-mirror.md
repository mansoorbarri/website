---
title: "Mirror Android Screen with Sound"
date: 2022-10-26
tags: ["Linux"]
image: "/images/guides/android-screen-mirror/main.png"
type: "post"
draft: false
showtableOfContents: true
---
# Brief

You can't mirror screen and sound together so we'll use two different tools to do the job. This method can be done on Linux & Windows but I am using Linux (Debian) in this case.

### Tools

[Scrcpy](https://github.com/Genymobile/Scrcpy) - for screen mirror

[sndcpy](https://github.com/rom1v/sndcpy) - for sound

# Install

Scrcpy:
```bash
sudo apt install scrcpy -y 
```
Sndcpy:
download the [latest release](https://github.com/rom1v/sndcpy#get-the-app) and extract the files

# Mirror

### Screen with Scrcpy
First, go to your device settings and enable developer mode then, connect your Android device to your computer with your charger.

Run Scrcpy on your computer terminal
```bash
Scrcpy
```
you should see your phone screen on another window like this 

![picture of the new window](/images/guides/android-screen-mirror/2022.png)

### Sound with Sndcpy

Run the linux file from the extracted files

```bash
./sndcpy
```
Now you can play anything to check everything.

# Recommendation

I use Scrcpy with some switches like:
```bash 
Scrcpy --turn-screen-off --stay-awake
```
You can see more on their Github page @ [Scrcpy](https://github.com/Genymobile/Scrcpy#features)

& while using Sndcpy, just reduce the volume to 0% on the phone so you don't hear "echo" 

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