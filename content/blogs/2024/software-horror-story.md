---
title: "The One Database to Rule Them All: A POS Software Horror Story"
description: "a story about a citywide software ecosystem that's built on interesting architectural choices."
date: "2024-12-29"
url: "/software-horror-story/"
draft: false
categories: 
  - software development
tags:
  - developing developer
---

Ever had one of those moments where you're just casually helping someone with a "simple" tech problem, and suddenly you stumble into something that makes you question everything? Yeah, this is one of those stories.

## The Innocent Beginning
It started like any other day. A relative (who's also a friend) reached out about some printing issues with their pharmacy's POS system. You know, the usual "printer's acting up" situation we all love to hate.

Classic IT stuff, right? Wrong.

### The Plot Thickens
While debugging the printing issue, I noticed something weird: the system was compiling PDFs before printing them. Every. Single. Time.

Wait, what?

The files were right there. Why compile something that already exists? It's like photocopying a photocopy – utterly pointless and inefficient.

## The Big Revelation
As I dug deeper and questioned my friend about the software's origins, what I discovered made my jaw drop. The software, dubbed "Abuzar Software," wasn't just any ordinary pharmacy management system.
Here's the kicker: It was a one-size-fits-all solution being reused across THE ENTIRE CITY.

They just changed a few variables like:
- Pharmacy name
- Logo
- Basic contact details

And boom! "New" software. Mind = blown. 🤯

## The Cherry on Top
But wait, it gets better (or worse, depending on how you look at it). Not only were they recycling the same software everywhere, but they were also:

- Keeping everyone's data in a single database
- Charging monthly fees to keep businesses locked in
- Maintaining complete control over everyone's data

## The Solution That Wasn't
The obvious solution? Run. Run far away from this software and never look back. Either get something purpose-built or have something custom developed.

But here's the catch: my friend had just invested in this system and wasn't in a financial position to switch. Plus, their data was essentially being held hostage – they couldn't just extract it and move elsewhere.

I offered to develop a custom solution with some colleagues, but the recent revelation had made them wary of trusting any new software development projects.

## The Lesson
Sometimes the simplest tech problems are just the tip of the iceberg. What started as a printer issue revealed a citywide software ecosystem built on... well, let's call it "interesting" architectural choices.

And somewhere out there, a single database continues to hold the digital destiny of an entire city's pharmacies. 

*just to be clear, this is not a joke. please don't ever buy this software or do something like this.* 

*also, by entire city, I mean **mostly** entire.*
