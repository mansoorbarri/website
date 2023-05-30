---
title: "THM | tmux"
date: 2022-04-12
type: "post"
url : "/write-ups/rptmux/"
showtableOfContents: true
---

## Room

https://tryhackme.com/room/rptmux

## Task 1: Screens wishes it was this cool

#### Question 1: First things first, let's go ahead and install tmux. This can be done on Ubuntu/Kali with the command: apt-get install tmux

*No answer needed*

#### Question 2: Once tmux is installed, let's launch a new session. What command do we use to launch a new session without a custom name?

*~ tmux*

#### Question 3: All tmux commands start with a keyboard button combination. What is the first key in this combination?

*~ control*

#### Question 4: How about the second key? Note, these keys must be pressed at the same time and released before pressing the next target key in the combination. 

*~ b*

#### Question 5: Lets go ahead and detach from our newly created tmux session. What key do we need to add to the combo in order to detach?

*~ d*

#### Question 6: Well shoot, we've detached from our session. How do we list all of our sessions?

*~ tmux ls*

#### Question 7: What did our session name default to when we created one without a set name?

*~ 0*

#### Question 8: Now that we've found the name of our session, how do we attach to it?

*~ tmux a -t 0*

#### Question 9: Let's go ahead and make a new window in this session. What key do we add to the combo in order to do this?

*~ c*

#### Question 10: Seems like we have plenty of windows and nothing to fill them up with. Let's remedy that problem by deploying the VM above and running and nmap scan against it. Deploy the VM now.

*No answer needed*

#### Question 11: Run the following scan against the VM: nmap -sV -vv -sC TARGET_IP

*No answer needed*

#### Question 12: What key do we add to the combo to enter copy mode?

*~ [*

#### Question 13: Copy mode is very similar to 'less' and allows up to scroll up and down using the arrow keys. What if we want to go up to the very top?

*~ g*

#### Question 14: How about the bottom? 

*~ G*

#### Question 15: What key do we press to exit "copy mode"? 

*~ q*

#### Question 16: This window we're working in is nice and all but I think we need an upgrade. What key do we add to the combo to split the window vertically?

*~ %*

#### Question 17: How about horizontally?

*~ "*

#### Question 18: We can now move between these panes using the key combo and arrow keys, try it out!

*No answer needed*

#### Question 19: We can also resize these panes by holding down the key combo and pressing the arrow keys, try it out now! 

*No answer needed*

#### Question 20: Wait a minute, we've forgotten about our original window! We can go back it using the key combo and the number of the session! Try going back to this original window and then returning to our new one!

*No answer needed*

#### Question 21: what key do we add to the combo to 'kill' the pane?

*~ x*

#### Question 22: Now that's we've finished out work, what can we type to close the session?

*~ exit*

#### Question 23: Last but not least, how do we spawn a named tmux session named 'neat'?

*~ tmux new -s neat*

that's it ✌🏽

-------------------------------------------------------------
{{< rawhtml >}} 
 
{{< /rawhtml >}}
