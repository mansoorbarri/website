---
title: "THM | Linux Modules"
date: 2022-04-20
type: "post"
draft: false
showtableOfContents: true
---

## Room

https://tryhackme.com/room/linuxmodules

## Task 1: Let's Introduce

*No answer needed*

## Task 2: du

*No answer needed*

## Task 3: Grep, Egrep, Fgrep

#### Read the above

*No answer needed*

#### Question 1: Is there a difference between egrep and fgrep? (Yea/Nay)

*~ Yea*

#### Question 2: Which flag do you use to list out all the lines NOT containing the 'PATTERN'?

*~ -v*

#### Download the above given file and answer the following questions.

*~ No answer needed*

#### Question 3: What user did you find in that file?

*~ bobthebuilder*

#### Question 4: What is the password of that user?

*~ LinuxIsGawd*

#### Question 5: Can you find the comment that user just left?

*~ fs0ciety*

## Task 4: Did someone said STROPS?

*No answer needed*

## Task 5: tr

#### Read the Above.

*No answer needed*

#### Question 1: Run tr --help command and tell how will you select any digit character in the string?

*~ :digit:*

#### Question 2: What sequence is equivalent to [a-zA-Z] set?

*~ :alpha:*

#### Question 3: What sequence is equivalent to selecting hexadecimal characters?

*~ :xdigit:*

## Task 6: awk

#### Read the above

*No answer needed*

#### Question 1: use awk command  to print the following output

*~ awk "BEGIN{FS=" "; OFS=":"} {print $1,$4}" awk.txt*

#### Question 2: How will you make the output as following (there can be multiple; answer it using the above specified variables in BEGIN pattern)

*~ awk "BEGIN{ORS=", "} {print $1}" awk.txt*

## Task 7: sed

#### Question 1: How would you substitute every 3rd occurrence of the word 'hack' to 'back' on every line inside the file file.txt?

*~ sed 's/hack/back/3g' file.txt*

#### Question 2: How will you do the same operation only on 3rd and 4th line in file.txt?

*~ sed '3,4 s/hack/back/3g' file.txt*

#### Question 3: Download the given file, and try formatting the trailing spaces in sed1.txt with a colon(:).

*~ sed 's/ */:/g'  sed1.txt*

#### Question 4: View the  sed2 file in the directory. Try putting all alphabetical values together, to get the answer for this question.

*~ CONGRATULATIONS YOU MADE IT THROUGH THIS SMALL LITTLE CHALLENGE*

#### Question 5: What pattern did you use to reach that answer string?

*~ s/[[:digit:]]//g*

#### cat sed2.txt | tr -d '[:digit:]'

*No answer needed*

#### Question 6: What did she sed?(In double quotes)

*~ "That's What"*

## Task 8: xargs

#### Read the above

*No answer needed*

#### Question 1: You're working in a team and your team leader sent you a list of files that needs to be created ASAP within current directory so that he can fake the synopsis report (that needs to be submitted within a minute or 2) to the invigilator and change the permissions to read-only to only you(Numberic representation). You can find the files list in the "one" folder.

*~ cat file | xargs -I files -t sh -c “touch files; chmod 400 files”*

#### Question 2: You can find the files for this task in two folder.

*~ ls | xargs -I word -n 1 -t sh -c ‘echo word >> shortrockyou; rm word’*

#### Question 3: Which flag to use to specify max number of arguments in one line.

*~ -n*

#### Question 4: How will you escape command line flags to positional arguments?

*~ ---* 

(two hyphens)

## Task 9: sort and uniq

#### Read the above 

*No answer needed*

#### Question 1: Download the file given for this task, find the uniq items after sorting the file. What is the 2271st word in the output.

*~ lollol*

#### Question 2: What was the index of term 'michele'

*~ 2550*

## Task 10: cURL

#### Read the above 

*No answer needed*

#### Question 1: Which flag allows you to limit the download/upload rate of a file?

*~ ---limit-rate* 

(two hypthens)limit-rate

#### Question 2: How will you curl the webpage of https://tryhackme.com/ specifying user-agent as 'juzztesting'

*~ curl -A ‘juzztesting’ https://tryhackme.com/*

#### Question 3: Can curl perform upload operations?(Yea/Nah)

*~ yea*

## Task 11: wget

#### Read the above 

*No answer needed*

#### Question 1: How will you enable time logging at every new activity that this tool initiates?

*~ -N*

#### Question 2: What command will you use to download https://xyz.com/mypackage.zip using wget, appending logs to an existing file named "package-logs.txt"

*~ wget -a package-logs.txt https://xyz.com/mypackage.zip*

#### Question 3: Write the command to read URLs from "file.txt" and limit the download speed to 1mbps.

*~ wget -i file.txt — limit-rate=1m*

## Task 12: xxd

#### Read the above

*No answer needed*

#### Question 1: How will you seek at 10th byte(in hex) in file.txt and display only 50 bytes?

*~ xxd -s 0xa -l 50 -b file.txt*

#### Question 2: How to display a n bytes of hexdump in 3 columns with a group of 3 octets per row from file.txt? (Use flags alphabetically)

*~ xxd -c 9 -g 3 file.txt*

#### Question 3: Which has more precedence over the other -c flag or -g flag?

*~ -c*

#### Question 4: Download the file and find the value of flag.

*~ flag{wh3sdw0lw1gl9oqasad2fs48as}*

## Task 13: Other modules

#### Read the last learning task.

*No answer needed*

#### Question 1: It's safe to run systemctl command and experiment on your main linux system neither following a proper guide or having any prior knowledge? (Right/Wrong)

*~ wrong*

#### Question 2: How will you import a given PGP private key. (Suppose the name of the file is key.gpg)

*~ gpg --- import key.gpg*

gpg (two hyphens) import key.gpg

#### Question 3: How will you list all port activity if netstat is not available on a machine? (Full Name)

*~ socket statistics*

#### Question 4: What command can be used to fix a broken/irregular/weird acting terminal shell?

*~ reset*

## Task 14: Is it night yet? 

#### Press F to pay respect

*~ F*

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