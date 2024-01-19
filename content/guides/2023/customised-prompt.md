---
title: "Customise Your Prompt with Starship"
date: 2023-01-06
tags: ["Linux"]
url : "/guides/customised-prompt/"
type: "post"
showtableOfContents: true
description: "Customize your command prompt with Starship. Follow our guide to personalize your prompt and enhance your terminal experience with ease"
---

## Install 
```bash
curl -sS https://starship.rs/install.sh | sh
```
& add the following to ```~/.bashrc```
```bash
eval "$(starship init bash)"
```

You can also find installation instructions for other operating systems here: [https://starship.rs/guide](https://starship.rs/guide/#%F0%9F%9A%80-installation)

## Config
You can now completely customise your prompt by editing the config file, which is accessible via:
```
starship config
```
alternatively, you can use presets from https://starship.rs/presets/

I prefer Starship's default minimal style, so I don't use any presets or have anything in my config file.

![Screenshot of my terminal prompt](/img/guides/2023/customised-prompt/2022.png)

that's it <3

----
  