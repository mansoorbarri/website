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
print("How may I help you today?")
print('''
1. My WiFi is too slow
2. My system is lagging
3. I need help with Python
4. Something else
''')
option_selected = input()
```
```

this code allows the user to input what they want help with and stores it in the `option_selected` variable. 

### using if 
to use the variable in an if statement, we have to use a mixture of if, elif & else like so: 
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
    print("ask your mom")
```
```

`if`: this is like saying "if" in English, if something is true then the program will carry out something otherwise it won't. In this case, if the `option_selected` variable is equal to 1 then it will run the print statement otherwise it will go to the next statement which is `elif`; now `elif` is only ran if the statment above is not true so if the user has choosen "3" for example then the program will skip the if statement and the first elif statement and go straight to the third statement and carry out the instructions in that statemnet which is to print "ask in the comments of this post". 

Now you can run this and test out all the statements and see if they work right. 

## Final code 
all the code can be found at: https://github.com/mansoorbarri/python-course/

that's all <3

---
