---
title: "Linux for Everyone | Day 1"
date: 2023-06-26
tags: ["Linux For Everyone"]
image: "/images/guides/linux-for-everyone/main.webp"
url: "/guides/linux-for-everyone/"
type: "post"
showtableOfContents: true
description: "A new series where you can learn linux commands and tips to help you become a better linux user. This is for everyone from an average linux user to aspiring hackers."
---

Linux is an important tool especially for hackers. ethical of cource.

From today (26.6.23) I will be posting Linux guides, ranging from linux commands to installing & using hacking tools.

# day 1 
## pwd
in GUI (Graphical User Interface), its easy to know where you are however in terminal it might not be straight forward. 

Firstly, you can see above the input area however this doesn't show the full path at times which is why we use the command is `pwd` which is a shortform for "Print Working Directory". 

![terminal window showing the command pwd being used](/img/guides/2023/linux-for-everyone/pwd.png)

Here you can see that the terinal just shows `website` but when we use the command `pwd` the whole path is shown. 

## ls
Taking forward the GUI analogy, when we open a folder we instantly see all the folders and files that are in the folder however in terminal we have the command `ls` to see the directories & files. 

You can remember this by the word "list" so whenever you want to list all the files and directories, the command is `ls`.

![terminal window showing the command ls being used](/img/guides/2023/linux-for-everyone/ls.png)

As you can see, the folders are highlighted by blue and the files are just white/grey. 

## cd 
`cd` also known as "Change Directory" is used to go in and out of folders. 

![terminal window showing the command cd being used](/img/guides/2023/linux-for-everyone/cd.png)

Here the current directory was 'website" and then, using `cd` I changed the directory to "archetypes". 

Now to go back a directory you use `cd ..` which takes you back one directory; to go back two directories, we use `cd ../..` and you can go back as much as possible by adding `../`. 

For example, to go back five directories I can use `cd ../../../../../`

![terminal window showing the command cd being used to go back a directory](/img/guides/2023/linux-for-everyone/cd2.png)

Here, I was on "archetypes" then by using `cd ..` I went back to "website".

you can also use `cd` to go back to your home directory like so: 

![](/img/guides/2023/linux-for-everyone/cd3.png)

## clear
Doing all these commands probably makes your terminal all filled, you can clear your terminal by the `clear` command 

{{< rawhtml >}}
<video autoplay loop muted style="width: 100%;" >
  <source src="/img/guides/2023/linux-for-everyone/clear.mkv" type="video/mp4" alt="video of the clear command">
  Your browser does not support the video tag.
</video>
{{< /rawhtml >}}

## cat 
`cat` is used to print a file to your terminal. For example, in my "archetypes" directory I have a file named "default.md". 

![terminal window showing the command cat being used](/img/guides/2023/linux-for-everyone/cat.png)

## cp 
`cp` is used to copy a file. 

We will copy the default.md file to another folder named "folder1" like so:

![terminal window showing the command cp being used](/img/guides/2023/linux-for-everyone/cp.png)

## Challenge
You have to copy ".bashrc" file to your Downloads folder.

Answer will be posted on [my twitter](https://twitter.com/MansoorBarri) tomorrow at 16 00 UTC; till then you may post your answers in the comments section below.

that's it <3

----

  