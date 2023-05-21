---
title: "How to Use Darkmode.js with Hugo In 4 Easy Steps"
date: 2023-05-10
tags: [Hugo]
image: "/images/guides/darkmode-on-hugo/main.webp"
type: "post"
showtableOfContents: true
description: "Learn how to integrate Darkmode.js with Hugo and provide a seamless dark mode experience on your website. Enhance user experience with a simple toggle button"
---

Darkmode.js is a JavaScript library that enables a dark mode feature on your website. Integrating Darkmode.js with Hugo allows you to provide a seamless dark mode experience to your Hugo-powered website visitors. Let's go through the steps to set it up:

## Step 1: Initialize Darkmode.js
In the same layout file, add a ```<script>``` tag to initialize Darkmode.js.
```html
<script src="https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js"></script>
<script>
  function addDarkmodeWidget() {
    new Darkmode().showWidget();
  }
  window.addEventListener('load', addDarkmodeWidget);
</script>
```

## Step 2: Customize Darkmode.js (Optional)
Darkmode.js provides customization options to tailor the dark mode behavior to your needs. You can configure options such as the widget's appearance, default mode, time-based mode switching, and more. Refer to the Darkmode.js documentation for detailed customization instructions.

## Step 3: Test and Deploy
Start your Hugo development server and test the dark mode toggle button functionality. Open your website in a web browser and click the toggle button to switch between light and dark modes.

Once you are satisfied with the implementation and testing, build your Hugo project for deployment.

```bash
hugo --minify
```
Deploy the built Hugo website to your hosting provider or platform of choice.

## Step 4 - Optional: Custom Toggle
You can learn how to have a custom dark mode toggle with Darkmode.js [here](/guides/custom-toggle-darkmode/).

Remember to keep the Darkmode.js library up to date by periodically checking for updates from the [official website](https://darkmodejs.learn.uno/). Additionally, consider adding an appropriate accessibility feature to make your website accessible to users with visual impairments.

that's it <3

----

  