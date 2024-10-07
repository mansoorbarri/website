---
title: "Python QR-code Generator"
description: "A simple Python program to make QR codes which don't expire and can be customised in any way you want"  
date: "2024-04-12"
url: "/qrcode-generator/"
draft: false
categories:
  - Python
tags:
  - qrcode
---

I wanted to use QR code to mention all my sources for a poster however I could not find any QR code generator which would **never** expire and would allow me to customise however I want. Specifically, I wanted the QR code to be transparent which no website seems to have. 

### Code teardown 

So the actual code goes like: 

- a function called `generate_qr_code` which specifies all the properties of the qr code and the data which the qr code will hold. I just added the option for a URL as that was what I wanted and thats much more flexiable as I can update it if the link is from Google Drive (which it will be). 

```python 
def generate_qr_code(url, fill_color, output_file):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=0,
    )
    qr.add_data(url)
    qr.make(fit=True)

    img = qr.make_image(fill_color="#9999d2", back_color="transparent")
    img.save(output_file)
```

- Then there is a `main` function takes the users' input i.e. the URL and the destination file. There is some logic as well to check if the URL works and if it doesn't then the script mentions that to the user. 

```python 
def main():
    fill_color = input("Enter the color reference number (e.g., #ffffff) for the fill color: ")

    while True:
        url = input("Enter the URL: ").strip()
        try:
            response = requests.head(url)
            if response.status_code == 200:
                break
            else:
                print("Error: URL is not accessible. Please enter a valid URL.")
        except Exception as e:
            print(f"Error: {e}")

    output_file = input("Enter the destination file name (with .png extension): ")

    generate_qr_code(url, fill_color, output_file)
```

thats pretty much it. You can contribute to this script and add other features or implement the same features using a better method. You can use the script as well to generate QR codes by cloning the code from GitHub: https://github.com/mansoorbarri/qr-code/ 

Happy coding!

-MB

