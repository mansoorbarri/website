---
title: "Remove Debian comepletely from DualBoot"
date: 2022-03-15
tags: ["Windows"]
type: "post"
draft: false
showtableOfContents: true
---

## Requirements
Windows 10 PC


## I - Delete partition
Right click on the start button (bottom left corner) and click on "Disk Management"

![Screenshot of the step](/images/how-to/remove-dualboot/2022.png)

ideally there should be 2 linux partition, one swap area and other is main disk partition. These are the two partitions I have

![Screenshot of the step](/images/how-to/remove-dualboot/2022_1.png)

right click on one of them and click on "Delete Volume"

![Screenshot of the step](/images/how-to/remove-dualboot/2022_2.png)

click yes on the pop up

![Screenshot of the step](/images/how-to/remove-dualboot/2022_3.png)

repeat the last two steps for the second partition. Once done right click on your main drive and click "Extend Volume" to add the free space to main partition

![Screenshot of the step](/images/how-to/remove-dualboot/2022_4.png)

Click "Next" on the pop up

![Screenshot of the step](/images/how-to/remove-dualboot/2022_5.png)

Once done, the free space will be added to your main partition like so

![Screenshot of the step](/images/how-to/remove-dualboot/2022_6.png)

## II - Delete Grub Bootloader
Click on the start button, search for "cmd" and run cmd as admin

![Screenshot of the step](/images/how-to/remove-dualboot/2022_7.png)

In the command prompt type
```
diskpart
```
![Screenshot of the step](/images/how-to/remove-dualboot/2022_8.png)

type
```
list disk
```
to list all the disks on your system

![Screenshot of the step](/images/how-to/remove-dualboot/2022_9.png)

Select the disk where you installed your linux OS, in my case it's Disk 0 (zero)

```
select <DISK NUMBER>
```
Next, list the partitions by typing 
```
list part
```

![Screenshot of the step](/images/how-to/remove-dualboot/2022_10.png)

Select the "System" partition by specifying it by partition number, in my case its partition 2

```
select part <PARTITION NUMBER>
```

then assign a drive letter to the partition. The drive letter should not be in use already, I will go with letter X

![Screenshot of the step](/images/how-to/remove-dualboot/2022_11.png)

Exit diskpart by typing
```
exit
```
You will be back in command prompt, here type 
```
<YOUR DRIVE LETTER>:
```

![Screenshot of the step](/images/how-to/remove-dualboot/2022_12.png)

list the folders in the directory by typing 
```
dir
```

![Screenshot of the step](/images/how-to/remove-dualboot/2022_13.png)

I am removing debian, so I will be typing 
```
rd debian /s
```
*change "debian" with your OS*

![Screenshot of the step](/images/how-to/remove-dualboot/2022_14.png)

Once done, you will have a new "Local Disk". It will be removed once you restart your PC. 

![Screenshot of the step](/images/how-to/remove-dualboot/2022_15.png)

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