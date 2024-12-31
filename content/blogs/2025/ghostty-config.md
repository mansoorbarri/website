---
title: "My Ghostty Config"
description: "A look into my Ghostty config."
date: "2025-01-04"
url: "/ghostty-config/"
draft: false
categories: 
  - Linux
  - Terminal
tags:
  - Ghostty
---

using Ghostty has been a great experience. However, getting it exactly where I want it to be requires a fair amount of configuration. 

Here is a look into my Ghostty config. Just to give a bit of context, I daily drive Debian Linux and using my terminal with tmux. 

## Ghostty Config
```bash
# ~/.config/ghostty/config

font-family = "Geist Mono"
window-decoration = false
background-opacity = 0.80
background=#1a1c1c
command=/home/anar/Music/anar/scripts/ghostty-tmux.sh
keybind=ctrl+shift+w=close_window
confirm-close-surface=false
```

- `font-family`: sets the font to Geist Mono.
- `window-decoration`: disables the titlebar and borders.
- `background-opacity`: sets the background opacity to 80%.
- `background`: sets the background color to #1a1c1c.
- `command`: intial command to run when Ghostty starts. this starts tmux. 
- `keybind`: sets the keybind to ctrl+shift+w to close the window.
- `confirm-close-surface`: disables the confirmation prompt when closing a window.

## Ghostty 

{{< video src="/img/guides/2025/ghostty-config/ghostty.webm" caption="ghostty preview" >}} 