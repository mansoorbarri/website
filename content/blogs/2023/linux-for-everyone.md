---
title: "Linux for Everyone"
date: 2023-06-26
categories: ["linux"]
url: "/guides/linux-for-everyone/"
type: "post"
showtableOfContents: true
description: "A new series where you can learn linux commands and tips to help you become a better linux user. This is for everyone from an average linux user to aspiring hackers."
---

Linux is an important tool especially for hackers. ethical of course.

From today (26.6.23) I will be posting Linux guides, ranging from linux commands to installing & using hacking tools.

# Day 1 
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

you can also use `ls -a` to see hidden files: 

![screenshot of the  command being used](/img/guides/2023/linux-for-everyone/cd3.png)

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

*note:you can also use ctrl+l to clear the terminal.*

## cat 
`cat` is used to print a file to your terminal. For example, in my "archetypes" directory I have a file named "default.md". 

![terminal window showing the command cat being used](/img/guides/2023/linux-for-everyone/cat.png)

## cp 
`cp` is used to copy a file. 

We will copy the default.md file to another folder named "folder1" like so:

![terminal window showing the command cp being used](/img/guides/2023/linux-for-everyone/cp.png)

# Day 2 

## mv 
`mv` is short for `move`, we have to use this with care is move will delete the original file. 

the usage for `mv` is the same as the [cp](#cp) command.

## touch 
`touch` is to create a text document. 

![terminal window showing the command touch being used](/img/guides/2023/linux-for-everyone/touch.png)

## nano 
`nano` is a text file editor similar to notepad on Windows. We will edit the same file we just created, file.txt. 

*note: `nano` is a may seem very complicated for now so you may not prefer `nano` and can use another text editor*

nano usage: 
```
nano {file-name}
```

{{< rawhtml >}}
<video autoplay loop muted style="width: 100%;" >
  <source src="/img/guides/2023/linux-for-everyone/nano.mp4" type="video/mp4" alt="video of the clear command">
  Your browser does not support the video tag.
</video>
{{< /rawhtml >}}

to save a file in nano, press: `ctrl+X` then `y` and then the enter key


## sudo 
`sudo` is like running a file as adminstrator. This is relavent when installing something or changing system settings like adding or removing users. 

Usage of `sudo` is pretty straight forward, you have to add `sudo` before the command. For example, to install nmap the command is `apt install nmap` however you will get an error if you run it without `sudo` thus making the command as 
```
sudo apt install nmap
```

## grep 
`grep` is used to pharse through outputs. For example, we will search for the word "TCP" in the `nmap` help page: 

```
nmap -h | grep "TCP" 
```

![terminal window showing the command grep being used](/img/guides/2023/linux-for-everyone/grep.png)

here we get all the sentences with "tcp" in it. This can be really helpful when searching through files or text. 

## history 
`history` can be used to see all the previous commands you have been using previously. There is nothing to it except you can use `history` & `grep` to fully take advantage of the history feature. 

# Day 3 | Managing Users
## adduser 
`adduser` allows you to add a user to your system. 

syntax: 
```
sudo adduser {username} 
```

## passwd
`passwd` used to change a user's password. 

syntax: 
```
sudo passwd {username}
```

## usermod
`usermod` allows you to change user details. 

syntax:
```
sudo usermod {username} {switches}
```

*note: you can know switches by entering `sudo usermode -h`*

## su 
`su` used as "Switch User". 

syntax for any user:
```
su - {username}
```

syntax for root user: 
```
sudo su -
```

## userdel 
`userdel` allows you to delete a user(s).

syntax:
```
sudo userdel {username} 
```





# Day 4 | Installing stuff 

## apt 
`apt` is used on debian & debian based distributions like ubuntu, kali, kubuntu, et cetra 

syntax for installing something: 
```
sudo apt install {package name}
```

syntax for uninstalling something: 
```
sudo apt remove {package name}
```

syntax for downloading updates: 
```
sudo apt update 
```

syntax for installing updates: 
```
sudo apt upgrade
```

## git 
to download custom tools from GitHub, you have to use `git`

syntax: 

Download the tools
```
git clone {repository link}
```

Install requirements 
```
sudo pip3 install -r requirements.txt
```
*note: this assumes that you are in the directory which has requirements.txt*

# Day 5 | Daemons

Daemons are like services in Linux. This is similar to `services.msc` on Windows. 

To check the status of a daemon: 
```
sudo systemctl status {daemon name}
```

stop a daemon: 
```
sudo systemctl stop {daemon name}
```

start a daemon: 
```
sudo systemctl start {daemon name}
```

start a daemon on startup 
```
sudo systemctl enable {daemon name}
```

stop a daemon on startup 
```
sudo systemctl disable {daemon name}
```

# Day 6 | Processes

## ps
`ps` allows you to see processes running. 

view processes running by a user
```
ps -u {username}
```

## killall 
`killall` is used to kill a process. 

```
killall {process name}
```

sometimes a process is stuck or most commonly known as "not responding" but then you have to use: 

```
sudo killall -9 {process name}
```

# Day 7 | helpful things 

## python web server 
You can use python to make a web server right in your terminal window with python.

This can be useful while hacking or just doing IT, to do this you need to install python: 

```
sudo apt install python3 
```

then: 
```
python3 -m http.server
```

and this will start a server on [localhost:8080](http://localhost:8080)

this can be used to transfer files as well. The possibilities are endless. 

## wget 
`wget` can be used to download a file or other web files like .html

syntax: 
``` 
wget {switch} {url}
```

Here are more external tools that may help and will make you effective: [/guides/terminal-commands/](/guides/terminal-commands/)

## Challenge 
There is another tool like `wget` called `curl`, curl is used for hacking, the challenge is to search about curl either by Google or their help page by `curl -h` 

that's it <3

----

  