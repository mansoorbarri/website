---
title: "Edit HTML Files With Python"
date: 2023-09-04
tags: [Python]
url: "/guides/py-html-editor/"
type: "post"
showtableOfContents: true
description: ""
---

## Context
I have a email template which is made using `<table>` tags in HTML and its a sad job to edit and add messages to send on email. I wanted to change it to a template which does not use `<table>` however doing so made it really non responsive which is not ideally as emails are viewed on various devices. 

### Solution 
I thought of making a python script which adds your message at a specific place on the HTML fiile. 

## Python code
```python 
import re

# Read the HTML file
with open("template.html", "r") as file:
    html_content = file.read()

# Define the message you want to insert
new_message = "Hello, world!"

# Replace {{ Message }} with the new message (case-insensitive)
modified_html = re.sub(r"{{\s*Message\s*}}", new_message, html_content, flags=re.I)

# Write the modified content to a new file named "message.html"
with open("message.html", "w") as file:
    file.write(modified_html)

print("Modified HTML saved to message.html")

```

This works by adding your message in the HTML file where `{{Message}}` is mentioned. This worked great however I wanted a little more, a cherry on the top so I added some lines which allowed it to take Markdown and convert the Markdown to HTML and then insert it in the place of `{{Message}}` because Markdown>. 

## Final Code
```python
import re
import markdown2

# Read the HTML file
with open("template.html", "r") as file:
    html_content = file.read()

# Get the user's input for the message in Markdown format
markdown_message = input("Enter the message in Markdown format: ")

# Convert the Markdown message to HTML
html_message = markdown2.markdown(markdown_message)

# Replace {{ Message }} with the HTML message (case-insensitive)
modified_html = re.sub(r"{{\s*Message\s*}}", html_message, html_content, flags=re.I)

# Write the modified content to a new file named "message.html"
with open("message.html", "w") as file:
    file.write(modified_html)

print("Modified HTML saved to message.html")
```

This worked great which made me think, what if I make a `message.md` file and use that as the message :0 

## Final Final Code 
```python 
import re
import markdown2

# Read the HTML file
with open("template.html", "r") as file:
    html_content = file.read()

# Read the Markdown message from the .md file
with open("message.md", "r") as markdown_file:
    markdown_message = markdown_file.read()

# Convert the Markdown message to HTML
html_message = markdown2.markdown(markdown_message)

# Replace {{ Message }} with the HTML message (case-insensitive)
modified_html = re.sub(r"{{\s*Message\s*}}", html_message, html_content, flags=re.I)

# Write the modified content to a new file named "message.html"
with open("message.html", "w") as file:
    file.write(modified_html)

print("Modified HTML saved to message.html")
```

The code came out great and worked flawlessly. The mentioned code can also be found on [Github](https://github.com/mansoorbarri/PythonScripts/blob/main/html-md-editor)

that's it <3

----

  