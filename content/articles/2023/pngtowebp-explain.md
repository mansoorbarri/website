---
title: "Converting PNG to WebP Images in Python: A Step-by-Step Guide"
date: 2023-04-24
categories:
    - Coding
tags: ["Python"]
url : "/guides/pngtowebp-explain/"
type: "post"
showtableOfContents: true
description: "Learn how to convert PNG to WebP using Python and PIL. Step-by-step guide for developers. Perfect for implementing a PNG to WebP converter."
---

This article explains the code for a PNG to WebP converter in Python. The code utilizes the Python Imaging Library (PIL) to open and manipulate images, and the os and sys modules to work with files and directories.

Code Explanation
The code starts with an ASCII art of the text "code by Mansoor Barri" printed to the console using the `print()` function.

Next, the required modules are imported:
```python
from PIL import Image
import os
import sys
```
- The `Image` module is imported from PIL, which provides functions for opening, manipulating, and saving images.
- The `os` and `sys` modules are imported to work with files and directories.

A function named `convert_png_to_webp()` is defined, which will perform the conversion of PNG to WebP images.

Inside the function, the input and output paths are obtained from the command line arguments using `sys.argv[1]` and `sys.argv[2]` respectively:
```python
input_path = '/home/anar/' + sys.argv[1]
output_path = '/home/anar/' + sys.argv[2]
```
Note that the input and output paths are assumed to be provided as command line arguments and are concatenated with the home directory path of the user.

Then, the absolute paths of the input and output paths are obtained using the `os.path.abspath() `method:
```python
input_abs_path = os.path.abspath(input_path)
output_abs_path = os.path.abspath(output_path)
```
Next, the `with` statement is used to open the input PNG file using the `Image.open()` method from PIL, and the opened image is stored in a variable named `img`:
```python
with Image.open(input_path) as img:
```
Inside the `with` block, the `save()` method is used to save the opened image as a WebP file using the `img.save()` method, with the output path specified by the user and the format set to `'webp'`:
```python
img.save(output_path, 'webp')
```

Finally, a message is printed to the console indicating that the conversion is complete and the output file is saved at the specified output path:
```python
print("~/" + sys.argv[1] + " is converted and saved at " + "~/" + sys.argv[2])
```

Lastly, the `convert_png_to_webp()` function is called to execute the code:
```python
convert_png_to_webp()
```

Full code can be found [here](https://github.com/mansoorbarri/PythonScripts/blob/main/png-to-webp.py). I hope you find this article helpful for understanding the code of the PNG to WebP converter in Python. Happy coding! 

that's it <3

----

  