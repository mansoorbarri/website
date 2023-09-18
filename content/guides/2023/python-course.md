---
title: "Python Course for Beginners | 1"
date: 2023-09-18
tags: [Python Course]
url: "/guides/python-course/"
type: "post"
showtableOfContents: true
description: "A deep dive in Python programming language to help you at your IT journey"
---

## Why Python 
This course goes through everything you need to know about python and start making your own scripts. It doesn't have to be something specific since Python can be used to do various type of things even if you have nothing to do with IT.

We will be making a helpdesk bot which asks the user their name, type of issue & what their issue is. 

## What do you need? 
Nothing. except a IDE to render your code however you can use online code editors as well like [Replit](https://replit.com/). In this course however, we'll use vscode as our code editor. 

The next two steps are only for people who are NOT using replit or any other online code editors.

## Installing Python interpreter 
In operating systems like Mac & Linux, python comes built in however with Windows you have to install the interpreter from here: https://www.python.org/downloads/

## VSCode Setup
**Install VSCode:**
- Linux (Deb): `sudo apt install -y vscode`
- Windows: `winget install -e --id Microsoft.VisualStudioCode`

alternatively you can install from their download page: https://code.visualstudio.com/download

**Install Python extention:**

The beauty of vscode is that you can customise it to your liking by adding various extention like Python.

- Click on the extension icon on the left sidebar and search for "Python"  like so: 

![screenshot of the extention installing steps](/img/guides/2023/python-course/code-extension.png)

Now, restart VSCode and start coding!

## Your first python code 
- From the top bar, select File > Open Folder > [your folder]

`[your folder]` is your folder where you will store all your files with code. 

Create a file named `main.py` by clicking on the "new file" icon: 

![screenshot of new file creation](/img/guides/2023/python-course/new-file.png)

**Now your very first code:**
```python
print("hello world")
```

`print` allows you to print to the console. Running this code should show "Hello world" on your terminal

To run the code click the play icon to run the code. 

here, `print` is a function, we'll learn about functions a bit later but for now knowing that its a fuction is enough. and in the function we have a string which is indicated by quatation marks; these can be double or single quotes. Strings are usually just text. 

You can print a number as well by `print(2)`, you can also print multi line string like so: 

Code:
```python
print("""Line 1 
line 2 
line 3""")
```

Output: 
```
Line 1 
line 2 
line 3
```

Another interesting thing you can do is add two or more strings. 

Code:

```python 
print("section 1" + "section 2")
```

Output: 
```
section 1section 2
```

Now as you can see that the output is showing up as together, but there is also a issue that there is no space between the two phrases like normal english. This is because computer interprets exactly how you told it too.

To add the space you can either add a space after the or before the last one like so: 

Code:
```python 
print("section 1" + " section 2")
```

Output: 
```
section 1 section 2
```

that's it <3

----

  