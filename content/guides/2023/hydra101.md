---
title: "Hydra101"
date: 2023-07-12
tags: [101]
image: "/images/guides/hydra101/main.webp"
url: "/guides/hydra101/"
type: "post"
showtableOfContents: true
description: "A beginner friendly guide to Hydra. A hacking tool to crack passwords."
---

Hydra is a command-line-based password cracking tool that supports various network protocols, including HTTP, FTP, SSH, Telnet, and more. It automates the process of testing the strength of passwords by trying different combinations until it finds the correct one. Hydra is highly flexible and customizable, making it an essential tool for security professionals and ethical hackers.

## Why Use Hydra?

Hydra provides several advantages for security testing and password cracking:

- **Efficiency**: Hydra can automate the password cracking process, significantly reducing the time and effort required to test password strength.
- **Protocol Support**: Hydra supports a wide range of network protocols, allowing you to test passwords for various services and applications.
- **Customization**: Hydra offers numerous options and parameters that can be customized based on specific cracking requirements.
- **Open Source**: Hydra is an open-source tool, which means it is continuously updated and improved by the security community.

## Installation

To install Hydra, follow these steps:

1. Open the terminal or command prompt on your machine.
2. Clone the Hydra repository from GitHub using the following command:
```
git clone https://github.com/vanhauser-thc/thc-hydra.git
```
3. Change the directory to the cloned Hydra repository
4. Compile and install Hydra using the following commands:
```
./configure
make
sudo make install
```

## Basic Usage
To use Hydra, open the terminal or command prompt and enter the following command:
```
hydra [options] <target> <protocol> [options]
```

- **`target`**: The target host or IP address.
- **`protocol`**: The protocol used by the target service (e.g., HTTP, FTP, SSH).

## Brute-Force Attack

A brute-force attack involves trying all possible combinations of characters to guess the password. To perform a brute-force attack using Hydra, use the following command:
```
hydra -l <username> -P <password_list> <target> <protocol>
```


- **`-l <username>`**: Specifies the username to test.
- **`-P <password_list>`**: Specifies the path to the file containing the list of passwords.
- **`<target>`**: The target host or IP address.
- **`<protocol>`**: The protocol used by the target service.

## Dictionary Attack

A dictionary attack involves trying a list of predefined words or passwords. To perform a dictionary attack using Hydra, use the following command:

```
hydra -l <username> -p <password> <target> <protocol> -t <threads> -vV
```


- **`-l <username>`**: Specifies the username to test.
- **`-p <password>`**: Specifies the password to test (use single quotes if the password contains special characters).
- **`<target>`**: The target host or IP address.
- **`<protocol>`**: The protocol used by the target service.
- **`-t <threads>`**: Specifies the number of threads to use for parallel testing.
- **`-vV`**: Enables verbose mode to display detailed output.

other options can be found using: `hydra -h`


## Practice 
You can practice using the following TryHackMe room: https://tryhackme.com/room/hydra

Write-up: https://youtu.be/8fs_7bm88GY

that's it <3

----

  