// simple dark mode button
var themeToggle = document.querySelector(".theme-toggle");
var savedTheme = localStorage.getItem("sodapines-theme");

if (savedTheme) {
  document.documentElement.dataset.theme = savedTheme;
}

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    var currentTheme = document.documentElement.dataset.theme;
    var nextTheme = "dark";

    if (currentTheme === "dark") {
      nextTheme = "light";
    }

    if (nextTheme === "light") {
      delete document.documentElement.dataset.theme;
      localStorage.removeItem("sodapines-theme");
    } else {
      document.documentElement.dataset.theme = nextTheme;
      localStorage.setItem("sodapines-theme", nextTheme);
    }
  });
}
