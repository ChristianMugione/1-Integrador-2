const toggleMenu = document.getElementById("toggle-menu");
const navBar = document.querySelector(".navbar");
const blurer = document.querySelector(".blurer");
const category = document.querySelectorAll(".category");

const toggleMenuDisplayed = () => {
  if (navBar.classList.contains("hidden")) {
    navBar.classList.remove("hidden");
    blurer.classList.remove("hidden");
  } else {
    navBar.classList.add("hidden");
    blurer.classList.add("hidden");
  }
};

const closeIfDisplayed = () => {
  if (!navBar.classList.contains("hidden")) {
    toggleMenuDisplayed();
  }
};

toggleMenu.addEventListener("click", toggleMenuDisplayed);
window.addEventListener("scroll", closeIfDisplayed);
blurer.addEventListener("click", closeIfDisplayed);
