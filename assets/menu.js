const toggleMenu = document.getElementById("toggle-menu");
const navBar = document.querySelector(".navbar");
const blurer = document.querySelector(".blurer");
const category = document.querySelectorAll(".category");

const toggleMenuDisplayed = () => {
  console.log("toggleMenuDisplayed");
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
  if (favSection.classList.contains("open-favs")) {
    favSection.classList.remove("open-favs");
  }
};

toggleMenu.addEventListener("click", toggleMenuDisplayed);
blurer.addEventListener("click", closeIfDisplayed);
