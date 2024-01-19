---
title: "Modules in Python | Py3"
date: 2023-09-25
categories: ["python course"]
url: "/guides/modules-py3/"
type: "post"
showtableOfContents: true
description: ""
---

## Recap 
Previously, we did this: 
```python
print("Hi, welcome to anar helpdesk bot")
# input("Hi, may I know your name?")
print("How may I help you today?")
print('''
1. My WiFi is too slow
2. My system is lagging
3. I need help with Python
4. Something else
''')
option_selected = input()

if option_selected == "1": 
    print("Please restart your router")
elif option_selected == "2":
    print("clear your temp directory then restart your system")
elif option_selected == "3":
    print("ask in the comments of this post :)")
elif option_selected == "4": 
    print("error404")
```

Now we will use a module to add a bit of delay in replies; its not much so don't worry.

## Module 
You can use modules to make python a strong tool. Python as a standalone language is quite simple but modules are the things that makes it quite versatile. 

here we will use a module called `time` to break the program and give it a bit of realism. Our code will change to this: 

```python
import time #imports the module, time
print("Hi, welcome to anar helpdesk bot")
# input("Hi, may I know your name?")
print("How may I help you today?")
print('''
1. My WiFi is too slow
2. My system is lagging
3. I need help with Python
4. Something else
''')
option_selected = input()

time.sleep(3) # breaks the program for 3 seconds

if option_selected == "1": 
    print("Please restart your router")
elif option_selected == "2":
    print("clear your temp directory then restart your system")
elif option_selected == "3":
    print("ask in the comments of this post :)")
elif option_selected == "4": 
    print("error404")
```

now as you can see that we have imported the module and then used the code `time.sleep()` to pause the program and the number in `( )` will indicate the duration of the break in seconds. Here we are pausing for 3 seconds.

## Final code
all the code can be found at: https://github.com/mansoorbarri/python-course/

that's it <3

----

  