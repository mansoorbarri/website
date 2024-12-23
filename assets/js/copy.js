document.addEventListener("DOMContentLoaded", () => {
  const copyButtons = document.querySelectorAll(".copy-btn");

  copyButtons.forEach(button => {
    button.addEventListener("click", () => {
      const codeBlock = button.nextElementSibling.querySelector("code");
      const codeText = codeBlock.textContent;

      navigator.clipboard.writeText(codeText).then(() => {
        button.textContent = "Copied!";
        setTimeout(() => {
          button.textContent = "Copy";
        }, 2000);
      }).catch(err => {
        console.error("Failed to copy text: ", err);
      });
    });
  });
});
