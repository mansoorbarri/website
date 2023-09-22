---
title: "If & else | py3"
date: 2023-09-22
tags: [Python Course]
url: "/guides/if-else-py3/"
type: "post"
showtableOfContents: true
description: "A deep dive in Python programming language to help you at your IT journey"
---

## Recap
Last time we learnt that we can store user input in a variable like so: 
```python 
print("Hi, welcome to anar helpdesk bot")
# input("Hi, may I know your name?")
issue = input("How may I help you today?\n")
print(issue)
```
today we will use if & else statements to: 
- show a list of  things we offer
- Ask the user about what they want to do
- Tell them how they can connect with us or fix their issue

## If statements 
If statements are instructions for your program to do something if something else if true or false, for example:
- we can say to use an umbrella **if** its raining outside
- Wear a jacket before going outside **if** the temperature is below 10 degrees

this brings in the "programming" aspect in python. In our case, we can do this to present them with options and then show them relavent ways they can get help. 

Firstly, we will print out options which are vailble: 

```python 
print("Hi, welcome to anar helpdesk bot")
# input("Hi, may I know your name?")
issue = input("How may I help you today?\n")
print("""
1. My WiFi is too slow
2. My system is lagging
3. I need help with Python
4. Something else
selected-option= input()
""") 
```

This allows the user to see all the options and input what they want by entering a number, their choosen option will be then stored in a variable called `selected-option` which then allow us to run if & else statements to server the user properly. 

### first IF statement

```
