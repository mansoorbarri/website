---
title: "How to add copy code button on Hugo sites"
date: 2023-10-27
tags: 
    - hugo
url: "/guides/copy-code/"
type: "post"
showtableOfContents: true
description: "Guide to adding a copy code button to make your Hugo website user-friendly"
---

The code is a tweak of the code given by [Tom Spencer](https://www.tomspencer.dev/blog/2018/08/03/deploying-a-hugo-powered-site-to-netlify-with-source-code-syntax-highlighting/)

## Javascript
Create a js file where you will store all your Javascript, I am storing mine at `/static/js/copy-code.js`

This will control all your HTML elements as well as the "brain" behind the button 

```javascript
(function() {
    'use strict';
  
    if(!document.queryCommandSupported('copy')) {
      return;
    }
  
    function flashCopyMessage(el, msg) {
      el.textContent = msg;
      setTimeout(function() {
        el.textContent = "Copy";
      }, 1000);
    }
  
    function selectText(node) {
      var selection = window.getSelection();
      var range = document.createRange();
      range.selectNodeContents(node);
      selection.removeAllRanges();
      selection.addRange(range);
      return selection;
    }
  
    function addCopyButton(containerEl) {
      var copyBtn = document.createElement("button");
      copyBtn.className = "highlight-copy-btn";
      copyBtn.textContent = "Copy";
  
      var codeEl = containerEl.firstElementChild;
      copyBtn.addEventListener('click', function() {
        try {
          var selection = selectText(codeEl);
          document.execCommand('copy');
          selection.removeAllRanges();
  
          flashCopyMessage(copyBtn, 'Copied!')
        } catch(e) {
          console && console.log(e);
          flashCopyMessage(copyBtn, 'Failed :\'(')
        }
      });
  
      containerEl.appendChild(copyBtn);
    }
  
    // Add copy button to code blocks
    var highlightBlocks = document.getElementsByClassName('highlight');
    Array.prototype.forEach.call(highlightBlocks, addCopyButton);
  })();
```

## CSS 
CSS is quite subjective but this can start as the starting point 

```css
.highlight {
  position: relative;
}
.highlight pre {
  padding-right: 75px;
}
.highlight-copy-btn {
  position: absolute;
  bottom: 7px;
  right: 7px;
  border: 0;
  border-radius: 4px;
  padding: 1px;
  font-size: 0.7em;
  line-height: 1.8;
  color: #fff;
  background-color: #777;
  min-width: 55px;
  text-align: center;
}
.highlight-copy-btn:hover {
  background-color: #666;
}
```

To actually show the button, you have to put the following code in `post.html` (displays the button in posts **ONLY**) or `baseof.html` (displays the button globally)

```go
{{ if (findRE "pre.*?" .Content 1) }}
<script src="/js/copy-code.js"></script>
{{ end  }}
```

that's it <3

----

  