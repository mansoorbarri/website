---
title: "Why We Need Manifest V3?"
description: "My take on why Chrome's Manifest V3 is good for us."
date: "2024-10-20"
url: "/why-we-need-manifest-v3/"
draft: false
categories:
  - Web
tags:
  - Chrome
---

As web technologies evolve, so must the platforms that run on them. Google Chrome’s shift from Manifest V2 to Manifest V3 for browser extensions marks a pivotal moment for developers and users alike. While it might seem like just another technical update, the introduction of Manifest V3 is a significant leap forward in terms of security, privacy, and performance. So, why is Manifest V3 so important? Let’s break it down.

## 1. Enhanced Security
One of the biggest reasons for the move to Manifest V3 is to improve security for users. With V2, extensions had a lot of power over web pages. They could inject scripts into pages, listen to network requests, and even change the behavior of the websites you visited. While this power was useful for developers, it was also a security risk.

Manifest V3 introduces a **more restrictive permissions model**, meaning extensions now have to be more transparent about the data they need and when they need it. For example, instead of blanket access to a website’s data, an extension can now request permission dynamically — only when it’s needed, reducing potential vulnerabilities.

## 2. Better Performance
Browser extensions have long been notorious for slowing down your browsing experience, particularly when multiple extensions are running. Manifest V3 tackles this by limiting the way extensions interact with web pages and how they run background tasks.

One of the most notable changes is the **removal of background pages** in favor of **service workers**. Background pages in V2 were always running in the background, even when they weren’t actively doing anything. This could eat up system resources and slow down your computer. Service workers in V3, however, are only active when they’re needed, drastically reducing the memory and CPU usage. The result? Faster browsing and lower resource consumption.

## 3. Privacy-Focused Approach
In a world where user privacy is more important than ever, Manifest V3 is a step toward making Chrome a safer place to browse. By limiting how much access extensions have to sensitive information and by enforcing stricter rules on data handling, Google is helping to ensure that extensions can't abuse the data they're given.

**Declarative Net Request** is a great example of this. Instead of letting extensions handle network requests directly, V3 uses a declarative approach, where the browser itself handles certain tasks like blocking or redirecting traffic based on predefined rules. This not only reduces the chances of malicious behavior but also provides better performance as Chrome’s built-in mechanisms handle these tasks more efficiently than individual extensions ever could.

## 4. Simplified Developer Experience
From a developer’s perspective, Manifest V3 introduces some much-needed improvements that streamline the development process. With **fewer moving parts**, like the aforementioned service workers, it’s easier to build extensions that are fast, efficient, and secure.

Moreover, the updated permissions model forces developers to be more intentional about the features they implement and the data they request. This results in cleaner, more focused extensions that enhance the user experience without overreaching.

## 5. The Future of Chrome Extensions
As the web continues to evolve, it’s crucial for extensions to keep up. Manifest V3 is part of a larger trend toward a more secure, privacy-conscious web, aligning Chrome extensions with modern best practices. Although some developers have raised concerns about how restrictive the changes might be, it’s clear that Google’s intention is to build a safer, faster, and more transparent browsing experience for everyone.

Ultimately, Manifest V3 is a significant update that benefits users and developers alike. It addresses many of the shortcomings of V2 by making extensions more secure, efficient, and privacy-friendly. As we look to the future, it’s clear that Manifest V3 is more than just an upgrade — it’s the foundation for the next generation of browser extensions.

## 6. Adblockers 
Since Google announced Manifest V3, there's been quite a bit of drama, especially around the claim that Google is trying to kill adblockers. While it's true that Manifest V3 will change how adblockers work, I don't think Google is doing this intentionally to harm them.

Here's a simplified explanation of how adblockers function: most extensions, including adblockers, have full access to the requests a web page makes, allowing them to block requests from known ad providers. Adblockers essentially monitor these requests and block anything flagged as an ad.

With Manifest V3, Google is changing this by requiring extension developers to define a set of rules in a JSON file ahead of time—this is called the declarative approach. Extensions will have to declare what they want to block or interact with in advance. This means adblockers can no longer operate dynamically or make real-time decisions.

For example, a key feature of the popular uBlock Origin is its ability to let users block specific HTML elements on a page manually. Under Manifest V3, this kind of flexibility will no longer be possible because adblockers won’t have the ability to inspect or alter content as freely as they could in Manifest V2.

While these changes will impact adblockers, it’s clear Google’s primary focus is on improving security and privacy for all users. However, the trade-off is that it limits the dynamic nature of adblockers and other similar extensions.

-MB 
