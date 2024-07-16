const root = document.documentElement;

// ICONS
const moonIcon = document.querySelector("#moon");
const sunIcon = document.querySelector("#sun");

// CONTAINERS
const nav = document.querySelector("nav");
const settingsContainer = document.querySelector(".settings-container");

// BUTTONS
const menuBtn = document.querySelector("#menuBtn");
const darkBtn = document.querySelector("#darkBtn");
const settingsBtn = document.querySelector("#settingsBtn");
const contrastBtn = document.querySelector("#contrastBtn");

// HANDLERS
// DARK MODE
function toggleDark() {
  // TOGGLE THEMES
  root.classList.remove("high-contrast");
  root.classList.toggle("dark-theme");

  // TOGGLE ICONS
  moonIcon.classList.toggle("hidden");
  sunIcon.classList.toggle("hidden");
}

function toggleMenu() {
  nav.classList.toggle("hidden");
}

function toggleSettings() {
  settingsContainer.classList.toggle("hidden");
}

function toggleContrast() {
  root.classList.remove("dark-theme");
  root.classList.toggle("high-contrast");
}

function changeFont() {}

// LISTENERS
darkBtn.addEventListener("click", toggleDark);
menuBtn.addEventListener("click", toggleMenu);
settingsBtn.addEventListener("click", toggleSettings);
contrastBtn.addEventListener("click", toggleContrast);
