const menuBtn = document.querySelector("#menuBtn");
const toggleBtn = document.querySelector("#toggleBtn");
const moonIcon = document.querySelector("#moon");
const sunIcon = document.querySelector("#sun");
const nav = document.querySelector("nav");

function toggleTheme() {
    // TOGGLE THEME
    document.documentElement.classList.toggle("dark-theme");
    
    // TOGGLE ICON
    moonIcon.classList.toggle("hidden");
    sunIcon.classList.toggle("hidden");

    moonIcon.classList.toggle("visible");
    sunIcon.classList.toggle("visible");
}

function toggleMenu() {
  // TOGGLE MENU
  nav.classList.toggle("visible");
}

toggleBtn.addEventListener("click", toggleTheme);
menuBtn.addEventListener("click", toggleMenu);