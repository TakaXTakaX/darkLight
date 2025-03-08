const themeSwitch = document.getElementById("theme-switch");
const body = document.body;
const logo = document.querySelector(".logo"); 

function updateLogo() {
  if (body.classList.contains("darkmode")) {
    logo.src = "Final-06.svg"; 
  } else {
    logo.src = "Final-03.svg"; 
  }
}


document.addEventListener("DOMContentLoaded", () => {
  updateLogo();
});


themeSwitch.addEventListener("click", () => {
  body.classList.toggle("darkmode");
  updateLogo();
});
