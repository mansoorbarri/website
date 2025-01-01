---
title: "Start tmux with Ghostty"
description: "A guide to starting tmux with Ghostty"
date: "2025-01-01"
url: "/tmux-ghostty-startup/"
draft: false
categories: 
  - Terminal 
tags:
  - tmux
  - ghostty
---

This is one of the most common questions I've seen since Ghostty's release. Let me show you how to set this up in just a few minutes.

## The Solution: A Smart Launch Script

The key is creating a simple script that manages your tmux sessions. This script will:
- Check if a tmux session already exists 
- Connect to an existing session instead of creating duplicates
- Create a new session if none exists

Here's the script you'll need:

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
*The script is in bash since I am using Ghostty on Debian.*

## Setting Up Ghostty
Once you've created the script, there's just one more step. Open your Ghostty configuration file and add this single line:

```bash
command = ~/path/to/script.sh
```

Make sure to replace ~/path/to/script.sh with the actual path where you saved your script.
That's all there is to it! Now when you launch Ghostty, it will automatically start or reconnect to a tmux session.

If you're interested in more Ghostty customization options, check out my detailed guide on Ghostty configuration [here](/ghostty-config/).

The beauty of this setup is its simplicity - it handles all the session management automatically, so you never have to worry about creating or attaching to tmux sessions manually again.