document.addEventListener('DOMContentLoaded', ready, false);

const THEME_PREF_STORAGE_KEY = "theme-preference";
const THEME_TO_ICON_CLASS = {
  dark: "feather-moon",
  light: "feather-sun",
};
const THEME_TO_ICON_TEXT_CLASS = {
  dark: "Dark mode",
  light: "Light mode",
};
let toggleIcon = "";
let darkThemeCss = "";

const HEADING_TO_TOC_CLASS = {
  H1: "level-1",
  H2: "level-2",
  H3: "level-3",
  H4: "level-4",
};

function ready() {
  feather.replace({ "stroke-width": 1, width: 20, height: 20 });
  setThemeByUserPref();

  // ...

  document.getElementById("hamburger-menu-toggle").addEventListener("click", () => {
    const hamburgerMenu = document.getElementsByClassName("nav-hamburger-list")[0];
    if (hamburgerMenu.classList.contains("visibility-hidden")) {
      hamburgerMenu.classList.remove("visibility-hidden");
    } else {
      hamburgerMenu.classList.add("visibility-hidden");
    }
  });
}

// ...

function setThemeByUserPref() {
  darkThemeCss = document.getElementById("dark-theme");
  const savedTheme =
    localStorage.getItem(THEME_PREF_STORAGE_KEY) ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const darkThemeToggles = document.querySelectorAll(".dark-theme-toggle");
  setTheme(savedTheme, darkThemeToggles);
  darkThemeToggles.forEach((el) =>
    el.addEventListener("click", (event) => {
      toggleIcon = event.currentTarget.querySelector("a svg.feather");
      if (toggleIcon.classList[1] === THEME_TO_ICON_CLASS.dark) {
        setTheme("light", [event.currentTarget]);
        setCommentTheme("github-light");
      } else if (toggleIcon.classList[1] === THEME_TO_ICON_CLASS.light) {
        setTheme("dark", [event.currentTarget]);
        setCommentTheme("github-dark");
      }
    })
  );
}

function setTheme(themeToSet, targets) {
  localStorage.setItem(THEME_PREF_STORAGE_KEY, themeToSet);
  darkThemeCss.disabled = themeToSet === "light";
  targets.forEach((target) => {
    target.querySelector("a").innerHTML = feather.icons[THEME_TO_ICON_CLASS[themeToSet].split("-")[1]].toSvg();
    target.querySelector("#dark-theme-toggle-screen-reader-target").textContent = [THEME_TO_ICON_TEXT_CLASS[themeToSet]];
  });
}

function setCommentTheme(theme) {
    const commentContainer = document.getElementById("comment-section");
    if (commentContainer) {
      commentContainer.innerHTML = ""; // Clear the existing comment section
      const utterancesScript = document.createElement("script");
      utterancesScript.src = "https://utteranc.es/client.js";
      utterancesScript.setAttribute("repo", "mansoorbarri/website");
      utterancesScript.setAttribute("issue-term", "title");
      utterancesScript.setAttribute("theme", theme);
      utterancesScript.crossOrigin = "anonymous";
      utterancesScript.async = true;
      commentContainer.appendChild(utterancesScript);
    }
  }
