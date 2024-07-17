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
const fontUpBtn = document.querySelector("#fontUpBtn");
const fontDownBtn = document.querySelector("#fontDownBtn");

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

// THEME CHANGING
function toggleSettings() {
  settingsContainer.classList.toggle("hidden");
}

function toggleContrast() {
  root.classList.remove("dark-theme");
  root.classList.toggle("high-contrast");
}

// FONT RESIZING
function fontUp() {
  let fontSize = Number.parseInt(getComputedStyle(root).fontSize);
  const width = window.innerWidth;

  if (width >= 430) {
    fontSize = fontSize >= 18 ? fontSize : fontSize + 2;
  } else {
    fontSize = fontSize >= 10 ? fontSize : fontSize + 2;
  }

  root.style.fontSize = `${fontSize}px`;
}

function fontDown() {
  let fontSize = Number.parseInt(getComputedStyle(root).fontSize);
  const width = window.innerWidth;

  if (width >= 430) {
    fontSize = fontSize <= 14 ? fontSize : fontSize - 2;
  } else {
    fontSize = fontSize <= 6 ? fontSize : fontSize - 2;
  }

  root.style.fontSize = `${fontSize}px`;
}

// LISTENERS
darkBtn.addEventListener("click", toggleDark);
menuBtn.addEventListener("click", toggleMenu);
settingsBtn.addEventListener("click", toggleSettings);
contrastBtn.addEventListener("click", toggleContrast);
fontDownBtn.addEventListener("click", fontDown);
fontUpBtn.addEventListener("click", fontUp);
