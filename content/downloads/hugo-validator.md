---
title: "Hugo Theme Submission Validation Script"
date: "2024-01-29"
hidden: false
---

I have been developing multiple Hugo themes with the intention of getting it on the [Hugo themes page](https://themes.gohugo.io) however, despite having the experience of doing this multiple times, I get something wrong everytime. So I decided to make a script which goes through the important things which are required to submit your theme on their site. 

Some things include: 
- Absolute links 
- Author information 
- Licence information 
- Theme version

You can learn more here: https://github.com/mansoorbarri/hugo-validator/

## Usage 
Make sure you have `python` & `git` installed on your system before using the tool.

- Clone the script: `git clone https://github.com/mansoorbarri/hugo-validator && cd hugo-validator`
- install the requirements: `pip3 install -r requirements.txt` 
- Run the validator: `python3 validator.py` 

*you might have to run the validator with `python` instead of `python3` especially in Windows.*

## Contributions
If you want want more things to be validate by the script or have a better way to do this, feel free to send a PR over on GitHub. 

## Compiled File 
There is **no** standalone file for Windows or Mac however, it will come later down the line. Right now its a simple script so it doesn't make sense to have a compiled file for it in my opinion. 

---
