---
title: "pdfthing - A Product of Frustration"
description: "pdfthing is a simple, fast, and reliable PDF utility built to tackle the frustrations of existing tools. It compresses files 10% faster with no quality loss and works entirely locally."
date: "2024-12-06"
url: "/pdfthing-product-of-frustration/"
draft: false
categories: 
  - product
tags:
  - pdfthing
---

## Act 1: The Problem

It all started with a simple need: managing PDF files. Contracts, invoices, personal documents—you name it. For me, keeping high-quality, >600 DPI scans of everything important seemed like a great idea. They were safely stored off my laptop, so space wasn’t a concern. But then came the trouble: sharing or uploading these files.

A lot of websites cap upload sizes at 1MB. Meanwhile, my PDFs often ranged from 2MB to a whopping 30MB.

For a long time, I relied on [this compression tool](https://pdfcompressor.com/). But using it was a hassle:

- Go to the website.
- Click “upload files.”
- Search for the PDF (it shows *all* files, not just PDFs).
- Wait for the compression to finish (could take over a minute for large files).
- Click “download.”
- Extract the compressed file.

I had to repeat this process for every single document, every single time. It was slow, tedious, and frustrating. I tried other tools too—some were paid, some had file size limits, and others were painfully slow. None of them worked the way I wanted. That’s when I decided to build my own solution.

{{< video src="/img/guides/2024/pdfthing-product-of-frustration/pdfcompress.mp4" caption="pdfcompress demo" >}} 

## Act 2: The Idea

The idea for **pdfthing** hit me after watching [Theo's](https://x.com/theo) video on [QuickPic](https://www.youtube.com/watch?v=G2_D2bYFjY4). He talked about solving problems with simple, practical solutions, and I thought, “Why not fix my PDF problem?”

The concept was straightforward:  
Create a tool that focuses on **doing one thing really well—compressing PDFs**. Here’s what I set out to achieve:

- **Speed**: It had to be fast, like really FASTTT.  
- **Client-Side Only**: All processing should happen locally, in the browser. No uploads, no servers—keeping it private and secure.  
- **Simplicity**: No fancy menus or complicated steps. Just a clean, simple interface that works.  

With that vision in mind, **pdfthing** was born.

## Act 3: The Execution

I built **pdfthing** using **Next.js** and **TailwindCSS**. Next.js offered the speed and flexibility I needed, while Tailwind made styling quick and clean. It was the perfect stack for this project, and it let me focus on functionality.

Here’s why **pdfthing** stands out:

- **Faster Compression**: Tests showed it compresses files **10% faster** compared to existing tools.  
- **No Quality Loss**: The compressed files look just as good as the originals.  
- **Local-Only**: All processing happens in your browser. Your files never leave your device, ensuring privacy and security.  

### The Catch  
Currently, the compression tool works entirely client-side. That’s because hosting on **Vercel** doesn’t allow running command-line tools like `ghostscript`. While the tool can run with **Docker**, I’m not deploying it just yet—that’s still under development. For now, you get a fast, local-only tool that’s simple and effective.

{{< video src="/img/guides/2024/pdfthing-product-of-frustration/pdfthing.mp4" caption="pdfthing demo" >}} 

{{< rawhtml >}}
<div style="text-align: center; font-style: italic">the video is at normal speed</div>
{{< /rawhtml >}}

## What’s Next?

I’m already thinking about what’s next for **pdfthing**:  
- Adding features like PDF splitting, merging, and rotating.  
- Supporting larger files with server-side Docker deployment (coming soon!).  
- Making the interface even more intuitive and user-friendly.  

## Why Use pdfthing?

Because it’s built for **you**—someone who wants PDF tools that are simple, fast, and reliable. No ads, no bloat, no unnecessary clicks. Just a tool that works.

Check it out at [**pdfthing.mansoorbarri.com**](https://pdfthing.mansoorbarri.com) and let me know what you think!
