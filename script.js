let body = document.querySelector('body');
let themeBtn = document.querySelector('#themeChangeBtn');
let themeName = document.querySelector('#themeName');
let moonIcon = document.querySelector('#moonIcon');

themeBtn.addEventListener('click', () =>) {
    body.classList.toggle('dark');

    if (themeName.textContent === 'DARK' || moonIcon.src === "./assets/moon.svg") {
        themeName.textContent = 'light';
        moonIcon.src = "./assets/sun.svg";
    } else {
        themeName.textContent = 'DARK';
        moonIcon.src = "./assets/moon.svg";
    }
};

const searchInput = document.getElementById(".searchArea");
const searchButton = document.getElementById(".searchBtn");

searchButton.addEventListener("click", () => {
    let userName = searchInput.value.split(" ").join("");
    let userNotFound = document.getElementById("userNotFound");
    fetch("https://api.github.com/users/" + userName).then((response) => {
        if (response.ok) {
            userNotFound.style.display = "none";
            return response.json();
        }
    })
}