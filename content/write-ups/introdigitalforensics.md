---
title: "THM | Intro to Digital Forensics"
date: 2022-04-10
type: "post"
draft: false
showtableOfContents: true
---

## Room

https://tryhackme.com/room/introdigitalforensics

## Task 1: Introduction to Digital Forensics

#### Question 1: Consider the desk in the photo above. In addition to the smartphone, camera, and SD cards, what would be interesting for digital forensics?

*~ laptop*

## Task 2: Digital Forensics Process

#### Question 1: It is essential to keep track of who is handling it at any point in time to ensure that evidence is admissible in the court of law. What is the name of the documentation that would help establish that?

*~ Chain of Custody*

## Task 3: Practical Example of Digital Forensics

#### Question 1: Using ```pdfinfo```, find out the author of the attached PDF file.

*~ Ann Gree Shepherd*

Command used:- 

```bash
pdfinfo ransom-letter.pdf
```

#### Question 2: Using ```exiftool``` or any similar tool, try to find where the kidnappers took the image they attached to their document. What is the name of the street?

*~ Milk Street*

Command used:- 

```bash
exiftool letter-image.jpg
```

#### Question 3: What is the model name of the camera used to take this photo?

*~ Canon ROS R6*

Command used:- 

```bash
exiftool letter-image.jpg
```

that's it ✌🏽

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