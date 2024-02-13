---
title: "fatal: could not read username for https://github.com: terminal prompts disabled"
description: "Git 'error: fatal: could not read username for https://github.com: terminal prompts disabled' ka tafseeli hal"
date: "2024-02-13"
url: "/ur/could-not-read-username/"
draft: false
categories:
  - Linux
  - Windows
tags:
  - GitHub
---

## Wajah 
Yeh error tab ataa hai jab Git apki repository authenticate na kar paye. Yeh usually ghalat username aur password ki wajah se hota hai 

## Hal 


1. **Git Configuration**:
   - Terminal ya CMD kholein.
   - Yeh commands run karein Git ki configuration check karne ke liye:
     ```bash
     git config --global --list
     ```
   - check karlein ke `user.name` aur `user.email` sahi likhi hue hai. Ager nahi sahi, inn commands se update karlein:
     ```bash
     git config --global user.name "Your Name"
     git config --global user.email "your@email.com"
     ```

2. **Naye configuration**:
   - Inn commands se ap naye Git configuration setup kar sakte hain :
     ```bash
     git credential-manager-core configure
     ```
   - Prompts ko follow karein.

3. **Clear Cached Credentials**:
   - Kabhi cache ki wajah se bhi yeh error aajata hai. Cache ko clear karne ke liye yeh command use karein:
     ```bash
     git credential-cache exit
     ```

4. **Re-clone the Repository**:
   - Ager abhi bhi error ho toh repository ko dobara clone karein:
     ```bash
     git clone https://github.com/yourusername/your-repo.git
     ```

5. **HTTPS vs. SSH**:
   - Kabhi kabhi https ki wajah se bhi yeh error sakta hai islie SSH use karna ziada behtar hota hai.
   - SSH set karne ke liye iss article ko dekhein: https://mansoorbarri.com/ur/ultimate-gh-guide/

6. **Test Your Configuration**:
   - Apni new configuration ko check karne ke liye yeh command user karein:
     ```bash
     git config --global --get-regexp credential
     ```

## Conclusion 
Inn steps se apka issue fix ho jana chahaye. Ager abhi bhi error aaraha hai toh comments mein likh ke bata dein. 

bas yeh dihaan rakhein ke `yourusername` aur `your-repo` pe ap apna Github ka username aur repository ka naam dalein ge. 

---
