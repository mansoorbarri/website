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
        localStorage.setItem("theme", "dark"); // Store selected theme in localStorage
    } else {
        themeLink.setAttribute("href", lightModeFile);
        darkModeIcon.classList.remove("active");
        localStorage.setItem("theme", "light"); // Store selected theme in localStorage
    }
}

// Add event listener to the icon element for toggling mode
darkModeIcon.addEventListener("click", function() {
    toggleMode();
});

// Retrieve stored theme from localStorage and set initial mode accordingly
var storedTheme = localStorage.getItem("theme");
if (storedTheme === "dark") {
    themeLink.setAttribute("href", darkModeFile);
    darkModeIcon.classList.add("active");
} else {
    themeLink.setAttribute("href", lightModeFile);
    darkModeIcon.classList.remove("active");
}
