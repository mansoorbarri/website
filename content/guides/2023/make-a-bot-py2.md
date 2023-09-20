---
title: "Make a Helpdesk Bot | Py2"
date: 2023-09-20
tags: [python course]
url: "/guides/make-a-bot-py2/"
type: "post"
showtableOfContents: true
description: ""
---

## Recap 
Previously, we learnt that we can add `print` statements to print things on the terminal. Now we will start with making a proper bot. 

## Greetings 
Firstly, we will greet the user using the print function like explained in [py1](/guides/python-course-py1/)

```python
print("Hi, welcome to anar helpdesk bot")
```

## Input
Then, we want to ask the name of the user/customer. We can do this with `input` function which allows us to take inputs from the user or in this case, our customer. We can use this in many ways and this will get significant later on as well. 

To greet and take input from the user we can code something like this: 
```python 
input("Hi, may I know your name?")
```
Now when you run this code you will see that the script doesn't stop automatically since its waiting for an input. Now once you give an input, you will see that the script doesn't really do anything. 

To store/remember an input, we have to use something known as "variables" in our python programs. Variables is just a way to reuse data in programming, for example, we can do something like `a = 1` and then print the variable named `a` anywhere in our code; which would look something like this: `print(a)` 

Note you don't need to add quotation when using print function with variables. This is because its not a string and the data is dynamic, if you put quotes then it would just print "a" everytime. 

## Comments
For out bot we can comment out our input function by adding "#" infront of the line where which would make our script ignore the line thus not running it when the code. 

```python 
# input("Hi, how may I help you today?")
```    

Now you can run the code however nothing will happen. 

## Variables 
To add a variable to your input statement, we can just do this: 
```python 
issue = input("How may I help you today?)
```

Here `issue` can be called whatever you like. Now you can call it whenever you want in the script, to test this we can just add a print function to print the variable `issue` 

```python 
print(issue)
```

and this should print whatever is input is given to the input function. 

## Final code 
```python 
print("Hi, welcome to anar helpdesk bot")
# input("Hi, may I know your name?")
issue = input("How may I help you today?\n")
print(issue)
```

All code used in this course will be availble at: https://github.com/mansoorbarri/python-course/

that's it <3

----

  