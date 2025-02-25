---
title: "Tmux & Ghostty"
description: "My experience setting up and using Tmux with Ghostty."
date: "2025-02-27"
url: "/tmux-ghostty/"
draft: false
categories: 
  - terminal
tags:
  - tmux 
---

In my quest for better productivity, I stumbled upon Tmux, particularly after watching [Theo's video about his tools](https://youtu.be/uaCypXEJjes?si=pHZGRLCK6Ui81ubm&t=477). I installed it and started learning, but I found it incredibly confusing.  I eventually gave up.  In my defense, I was quite busy at the time, and trying to learn Tmux while also developing didn't seem like the best approach.  However...

[Network Chuck's video](https://www.youtube.com/watch?v=nTqu6w2wc68) on Tmux reignited my motivation to learn it properly, once and for all. It turned out to be much easier than I initially thought, especially with Chuck's clear explanations. I've been using it for two months now, and I can't imagine working without it.

I use Tmux with Ghostty, which makes the setup even more interesting. I also use [oh-my-tmux](https://github.com/gpakosz/.tmux), which provides a clean and simple yet powerful configuration.

While using Ghostty, I wanted a Tmux session to start automatically as soon as I launched the terminal.  Ghostty didn't offer a direct way to do this, so I created a simple script:
```bash
~/.config/ghostty/config

font-family = "Geist Mono"
window-decoration = false
background-opacity = 0.80
background=#1a1c1c
command=/home/anar/Music/anar/scripts/ghostty-tmux.sh
keybind=ctrl+shift+w=close_window
confirm-close-surface=false
```

The `command` setting in my Ghostty config executes the following script:

```bash
#!/bin/bash

SESSION_NAME="ghostty"

# Check if the session already exists
tmux has-session -t $SESSION_NAME 2>/dev/null

if [ $? -eq 0 ]; then
  # If the session exists, reattach to it
  tmux attach-session -t $SESSION_NAME
else
  # If the session doesn't exist, start a new one
  tmux new-session -s $SESSION_NAME -d
  tmux attach-session -t $SESSION_NAME
fi
```
This script checks for an existing Tmux session named "ghostty." If the session exists, it attaches to it. If not, it creates a new session with that name.  It works perfectly and is exactly what I needed.

For now, I'll stick with this development environment. It works well, and I prefer to master one environment inside and out rather than constantly switching to new tools every few months.
