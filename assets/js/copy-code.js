(function() {
  'use strict';

  if (!document.queryCommandSupported('copy') && !navigator.clipboard) {
    return;
  }

  function flashCopyMessage(el, msg) {
    el.textContent = msg;
    setTimeout(function() {
      el.textContent = "📋";
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
    copyBtn.textContent = "📋";

    var codeEl = containerEl.firstElementChild;
    copyBtn.addEventListener('click', function() {
      try {
        var selection = selectText(codeEl);
        
        // Use the Clipboard API instead of execCommand
        if (navigator.clipboard) {
          navigator.clipboard.writeText(codeEl.textContent).then(function() {
            flashCopyMessage(copyBtn, '✔');
          }).catch(function(e) {
            console && console.log(e);
            flashCopyMessage(copyBtn, 'Failed :(');
          });
        } else {
          document.execCommand('copy'); // Fallback for older browsers
          flashCopyMessage(copyBtn, '✔');
        }

        selection.removeAllRanges();
      } catch (e) {
        console && console.log(e);
        flashCopyMessage(copyBtn, 'Failed :(');
      }
    });

    // Insert the button as the first child of the container
    containerEl.insertBefore(copyBtn, containerEl.firstChild);
  }

  // Add copy button to code blocks
  var highlightBlocks = document.getElementsByClassName('highlight');
  Array.prototype.forEach.call(highlightBlocks, addCopyButton);
})();
