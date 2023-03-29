---
title: "Convert Python files to Windows executable files"
date: 2022-12-19
tags: ["Python", "Windows"]
image: "/images/how-to/py-to-exe/main.png"
type: "post"
draft: false
showtableOfContents: true
---

## Prerequisites
1. You should have all the modules installed before compiling
2. You should have all the requirements for the python file before compiling it

## Install Nuitka on Windows
- Go to {{< rawhtml >}} Go to <a href="https://nuitka.net/releases/Nuitka-6.1.177.win-amd64.py39.msi" target="_blank" rel="noopener noreferrer">nuitka.net/download/windows</a>{{< /rawhtml >}} which will download a .msi file 

- Run the file and click on "More info" 

- Click on "Run anyway"

- Click on "Install for all users" then click "Next" 

- Specify the python 3.9 compiler, its easier to use the Python 3.9 from registry and click on "Finish"

## Confirm installation 
```powershell
nuitka --version
```
## Compile 

```powershell
py -m nuitka --minhw64 <filename.py> --standalone --onefile
```
This will make 2 folders with logs and other Nuitka files and a .exe file from your .py file.

I recommend using: 
```powershell
py -m nuitka --minhw64 <filename.py> --standalone --onefile --remove-output
```

where ```--remove-output``` removes the 2 folders after compiling the .exe file.

that's it ✌🏽

-------------------------------------------------------------
{{< rawhtml >}} 
<script src="https://utteranc.es/client.js"
        repo="mansoorbarri/website"
        issue-term="title"
        theme="github-dark"
        crossorigin="anonymous"
        async>
</script>
{{< /rawhtml >}}