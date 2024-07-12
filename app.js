const toggleBtn = document.querySelector("#toggleBtn");
const moonIcon = document.querySelector("#moon");
const sunIcon = document.querySelector("#sun");

function toggleTheme() {
    // TOGGLE THEME
    document.documentElement.classList.toggle("dark-theme");
    
    // TOGGLE ICON
    moonIcon.classList.toggle("hidden");
    sunIcon.classList.toggle("hidden");

    moonIcon.classList.toggle("visible");
    sunIcon.classList.toggle("visible");
}

toggleBtn.addEventListener("click", toggleTheme);