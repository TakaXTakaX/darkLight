const themeSwitch = document.getElementById("theme-switch");
const body = document.body;

themeSwitch.addEventListener("click", () => {
  body.classList.toggle("darkmode");

  // Change icon dynamically
  const icon = themeSwitch.querySelector("svg");
  if (body.classList.contains("darkmode")) {
    icon.innerHTML = `<path d="M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm5.657 3.757a1 1 0 000 1.414l.707.707a1 1 0 101.414-1.414l-.707-.707a1 1 0 00-1.414 0zM12 5a7 7 0 110 14 7 7 0 010-14zm6.364 4.95a1 1 0 010 1.414l-1.414 1.414a1 1 0 101.414 1.414l1.414-1.414a1 1 0 00-1.414-1.414zm-12.728 0a1 1 0 00-1.414 1.414l1.414 1.414a1 1 0 101.414-1.414L5.636 9.95a1 1 0 00-1.414 0zM12 17a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4.95-1.636a1 1 0 011.414 1.414l-1.414 1.414a1 1 0 11-1.414-1.414l1.414-1.414z"/>`; // Moon icon
  } else {
    icon.innerHTML = `<circle cx="12" cy="12" r="5"/><path d="M12 2v2M12 20v2M4.222 4.222l1.414 1.414M18.364 18.364l1.414 1.414M2 12h2M20 12h2M4.222 19.778l1.414-1.414M18.364 5.636l1.414-1.414"/>`; // Sun icon
  }
});
