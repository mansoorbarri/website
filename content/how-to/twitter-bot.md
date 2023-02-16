---
title: "Twitter Bot in Python (without API)"
date: 2022-02-21
tags: ["Python"]
type: "post"
draft: false
showtableOfContents: true
---

## Brief

I wanted to make a python script which would share my latest blog on Twitter & Linkedin, So I made one.

We will use firefox as the browser thus, we would need geckodriver. The tutorial assumes you already have it.

## Code Breakdown

### Modules

```python
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
import warnings
import time
```
- We are gonna use Selenium for webscrapping 
- options so we can open browser in headless mode 
- Warnings to ignore deprecation warnings given by selenium. You would want to improve your code so the warnings go away but I go this way.

- Import time so we can pause the script when pages are loading 

### Ignore Warnings

```python
warnings.filterwarnings("ignore", category=DeprecationWarning) 
```
This line will stop selenium to bloat terminal with warnings.

### Set Options (optional)
```python
options = Options()
options.headless = True
```
These lines will make sure that browser window does not open. This is optional. I am going with headless browser.

### Message Input
```python
msg = input("Enter your message: \n")
```
This line takes input from the user and puts it in a variable 'msg'. This variable will be used as the main post. \n makes the output start from the next line instead of being next to the question. Something like this:

![Screenshot of output starting from the next line](/images/how-to/twitter-bot/1.png)

### Twitter Credentials 

```python
uname = "<username>"
pwd = "<password>"
```
Very self explainatory. This part takes username and password gives it variables "uname" and "pwd".

### Open Firefox
```python
driver = webdriver.Firefox(options=options)
```
This line of code opens Firefox with the options set previously.

### Open Login Page
```python
driver.get("https://twitter.com/i/flow/login")
time.sleep(5)
```
First line opens the login page for twitter. Second makes the script sleep for 5 seconds using the time module.

### Select the Username Field
```python
username = driver.find_element_by_name("text")
username.click()
```
These lines select the username field on the twitter login page.

### Enter Username
```python
username.send_keys(uname)
```
Enters username in the username field.

### Proceed 
```python
driver.find_element_by_css_selector("div.css-18t94o4:nth-child(6) > div:nth-child(1)").click()
time.sleep(1)
```
These lines click 'next' on the page.

### Select the Password Field
```python
password = driver.find_element_by_name("password")
password.click()
```
Select the password field.

### Enter the password in the password field
```python
password.send_keys(pwd)
```
Enter the password in the password field.

### Click Login Button
```python
driver.find_element_by_css_selector(".r-ywje51 > div:nth-child(1)").click()
time.sleep(5)
```
This clicks on the login button and pauses the script for 5 seconds so the main twitter page can load.

### Click the Text Box
```python
driver.find_element_by_css_selector(".public-DraftStyleDefault-block").click()
```
This clicks the twitter text box aka "Whats happening?"

### Type the Message
```python
text = driver.find_element_by_css_selector(".notranslate")
text.send_keys("", msg, " ")
```
These lines type the messsage from the variable "msg" set earlier.

### Click the Tweet Button
```python 
driver.find_element_by_css_selector("div.r-l5o3uw:nth-child(4)").click()
```
Clicks the "tweet" button

### Close the Browser
```python
driver.close()
```
This closes the browser. The script ends.

## Entire Code

I have added some other things which personilises and makes the code neat i.e. Comments, Progress, ACII.

Whole code:

```python
#!/usr/bin/env python3

#import modules
from selenium import webdriver
import warnings
import time

#store start time 
start_time = time.time()

#print acii
a = '''
 +-++-++-++-+ +-++-+ +-++-++-++-++-++-++-+ +-++-++-++-++-+
 |c||o||d||e| |b||y| |M||a||n||s||o||o||r| |B||a||r||r||i|
 +-++-++-++-+ +-++-+ +-++-++-++-++-++-++-+ +-++-++-++-++-+
'''
print(a)

#ignore warnings
warnings.filterwarnings("ignore", category=DeprecationWarning) 

#set option for headless browser
options = Options()
options.headless = True

#ask msg
msg = input("Enter your message: \n")

#creds
uname = "mansoorbarri"
pwd = "Yamahateslar1x1@twitter"

#open firefox
driver = webdriver.Firefox(options=options)

#go to login page
driver.get("https://twitter.com/i/flow/login")
time.sleep(5)

#click on username field
username = driver.find_element_by_name("text")
username.click()

#print progress
print("Logging in twitter\n")

#type the username
username.send_keys(uname)

#click "next"
driver.find_element_by_css_selector("div.css-18t94o4:nth-child(6) > div:nth-child(1)").click()
time.sleep(1)

#click on the password field
password = driver.find_element_by_name("password")
password.click()

#type the password
password.send_keys(pwd)

#click login
driver.find_element_by_css_selector(".r-ywje51 > div:nth-child(1)").click()

#wait for the page to loaod
time.sleep(5)

#print progress
print("Tweeting\n")
#click on "what's happenning?"
driver.find_element_by_css_selector(".public-DraftStyleDefault-block").click()

#type your msg
text = driver.find_element_by_css_selector(".notranslate")
text.send_keys("", msg, " ")

#tweet!
driver.find_element_by_css_selector("div.r-l5o3uw:nth-child(4)").click()

#print progress
print("Tweeted\n")

#close the browser
driver.close()

#print time it took
print("time to complete tweeting", time.time() - start_time)
```
View the python file on [github.](https://github.com/mansoorbarri/PythonScripts/blob/main/twitter-bot.py)

that’s it ✌🏽

-------------------------------------------------------------
{{< rawhtml >}} 
<script src="https://utteranc.es/client.js"
        repo="mansoorbarri/website"
        issue-term="title"
        theme="dark-blue"
        crossorigin="anonymous"
        async>
</script>
{{< /rawhtml >}}