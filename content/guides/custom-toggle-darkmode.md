---
title: "Custom Toggle with Darkmode.js"
date: 2023-05-12
tags: []
image: "/images/guides/custom-toggle-darkmode/main.webp"
type: "post"
showtableOfContents: true
description: ""
---

To have a custom toggle, change your `js` file to have this code: 
```js
// Replace the default button with your own button
const myButton = document.getElementById('my-darkmode-button');
const darkModeIcon = document.getElementById('dark-mode-icon');

myButton.addEventListener('click', () => {
    darkmode.toggle();
    toggleDarkModeIcon(darkModeIcon, darkmode.isActivated());
});
}
```
so your final code will be: 
```js
<script src="https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js"></script>
<script>
  function addDarkmodeWidget() {
    new Darkmode();
  }
    const myButton = document.getElementById('my-darkmode-button');
    const darkModeIcon = document.getElementById('dark-mode-icon');

    myButton.addEventListener('click', () => {
    darkmode.toggle();
    toggleDarkModeIcon(darkModeIcon, darkmode.isActivated());   
    }
  window.addEventListener('load', addDarkmodeWidget);
</script>
```

that's it <3

----

  