---
title: "I Built a Website and It Got Hacked."
description: "My website was a disaster. It got hacked during a live event. Read about my mistakes and the security lessons I learned."
date: "2025-09-11"
url: "/npm-got-hacked/"
draft: false
categories: 
  - web development
  - security
tags:
  - development
---

Building stuff for the web is awesome. You get to bring an idea to life, write some code, and see it work. It's a great feeling. But sometimes, it all goes wrong. And in my case, it went really wrong, at the worst possible time.

I want to tell you about **vstrips**, a web app I built, and how it went from working perfectly to a complete dumpster fire in a matter of minutes.

## What's vstrips?

Think of it as a virtual Air Traffic Control (ATC) system for the GeoFS flight simulator events community. It’s for online events where virtual pilots need to file a flight plan and controllers need a way to manage them.

I built vstrips from scratch because we needed something modern and reliable. It's got a user-friendly form for pilots, a dynamic real-time board for controllers to manage flight strips, and a bunch of other cool features. Under the hood, it's a slick tech stack using **Next.js 14**, **PostgreSQL**, **Prisma**, and **TypeScript**—all the good stuff.

Basically, it was a tool to make these events run smoothly.

---

## The Chaos Begins

The plan was simple: run a 4-hour event on Sunday, two hours in the evening and two hours at night.

The first two hours were going great. Pilots were filing their flights, controllers were managing the board, and everything was working as it should. About 30 minutes in, things started to get weird.

The controllers began seeing strange flight strips popping up with random slurs and nonsense. We thought it was just some mischievous pilots messing around. The controllers would just delete them, and we'd keep going.

Then, about 10 minutes later, the real panic set in. All the flight strips—the good ones, the weird ones, every single one—started getting deleted, one by one. I told everyone to stop filing new flights, but even the strips the controllers were creating themselves were getting deleted instantly. It was pure chaos. We had to stop using the site completely.

I immediately took the website offline to figure out what was happening.

## How it Happened: A Beginner's Blunder

The fix was both simple and facepalm-worthy. I discovered that I forgot to add **authentication** to my **APIs**.

Think of an **API** (Application Programming Interface) as a tunnel between your website and its database. It’s what allows your site to read and write data. I had basically left the front door to my database wide open. Anyone who knew what they were doing could walk right in and mess with anything they wanted—which they did.

I quickly added a basic security measure: a password check on the API. If a user didn’t have the right "controller" cookie with the password, they couldn't access or change anything. I thought I had fixed it.

I sent the "fixed" site to the event host, a guy I'll call Featherway, and went about my day. After a while, I got a text from him saying he couldn’t access anything on the site, even with the password. I was baffled because it worked for me *(duh)*. I figured the new password check was the issue, and, sitting in a car outside a shopping mall, I pulled out my phone and started deleting the code that secured the API.

After about 10 minutes, I told him to check again. It worked. I warned him that the API was now "insecure" and that they should back up the data. Everything seemed fine... for a while.

## Round Two: The Hacker Knew Our Names

I got home and checked the site immediately. The chaos was back. The same spamming, deleting, and weird behavior. The person behind it was now putting my government name, Featherway's real name, and his nickname (that only close friends knew) into the flight strips. This person knew us.

I took the site offline again and dug into the logs. I couldn't find a name, but I found some clues: they were using a Mac, they knew how to code, and they were friends with Featherway. We narrowed it down to one person who was online and offline at the exact same times as my sites' hack.

As of now, we still haven't caught them, but the clues leads me to this one person only.

## What I Learned from This

I spent the whole night and the next morning re-building the system with proper **authentication**, **authorization**, and **validation**. The system is now under review by the event hosts, and I've made some major changes:

* **Never hurry, especially with security.** I was rushing to get the site back online, which made me create a temporary, insecure fix that blew up in my face.
* **Don't let AI write code you don't fully understand.** I had used AI to generate some parts of the code, and I trusted it too much without reading through it.
* **Always test properly.** I thought a quick check was enough. It wasn't. I should have done thorough testing before pushing a live fix.
* **The API is the front door, not the back.** It doesn't matter how secure your UI is. If your API isn't locked down, someone with a little know-how can just walk around your front door and access everything.

It was a tough lesson to learn, but it made me a better developer. I wasted a lot of people's time, and I apologize for that. But hopefully, this story can help someone else avoid making the same mistakes.

Security isn't a feature; it's a foundational requirement.
