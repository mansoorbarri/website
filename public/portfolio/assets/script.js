// JavaScript (assets/js/darkmode.js)
var themeLink = document.getElementById("theme-link");
var darkModeFile = "assets/css/dark.css";
var lightModeFile = "assets/css/style.css";
var darkModeIcon = document.getElementById("dark-mode-icon");

// Function to toggle between dark mode and light mode
function toggleMode() {
    var currentTheme = themeLink.getAttribute("href");
    if (currentTheme === lightModeFile) {
        themeLink.setAttribute("href", darkModeFile);
        darkModeIcon.classList.add("active");
    } else {
        themeLink.setAttribute("href", lightModeFile);
        darkModeIcon.classList.remove("active");
    }
}

// Add event listener to the icon element for toggling mode
darkModeIcon.addEventListener("click", function() {
    toggleMode();
});

// Call the toggleMode() function to set the initial mode to light mode
toggleMode();
