---
title: "Scripting in Python | Py4"
date: 2023-09-27
categories: [Python Course]
url: "/guides/scripting-py4/"
type: "post"
showtableOfContents: true
description: "A deep dive in Python programming language to help you at your IT journey"
---

Before we used Python to make terminal programs however now we will make a program which controls our Linux system to do stuff; this is known as scripting. 

> Scripting is **primarily used to automate tasks for websites and web applications while using an existing program**.
> For this, we will use a module called `subprocess` this is used to run commands on your Linux system. 

## Subprocess init

First we will import `subprocess` by: 

```python
import subprocess
```

The basic syntax of this module to run commands is: 

```python
subprocess.run("{commands}", shell=true) 
```

For example, we can run the `cd` command to change our current working directory to a folder named Python. 

```python
subprocess.run("cd python/", shell=true)
```

This would run the command and change your current working directory to the folder named `python/`

## breakdown

`subprocess` calls the module 

`.run` runs the module so we can run our commands, this is taken from its documentation 

`shell=` this is a boolean value that indicates if we want to run the string given in ( ). This allows us to actually run the command rather than just put the string their on the terminal. 

## Application

This can be useful for doing a lot of things like extracting stored WiFi passwords, house keeping, converting media, et cetera. Here are some of the scripts I have created in the past: 

- WiFi pwd extractor: https://github.com/mansoorbarri/PythonScripts/blob/main/LinuxWifi.py
- Files’ house keeping: https://github.com/mansoorbarri/PythonScripts/blob/main/copy-files.py
- Converting media:
    - images: https://github.com/mansoorbarri/PythonScripts/blob/main/png-to-webp.py
    - HTML-MD: https://github.com/mansoorbarri/PythonScripts/blob/main/html-md-editor

You can find guides for all of the scripts here: [/python](/tags/python/)

that's all <3

---
