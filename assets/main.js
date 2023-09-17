//Declaración de variables
const timeNow = new Date();
let newsObj = [];
//number la voy a usar para diferenciar los id de las noticias para que tengan id unico
let number = 1;
let arrayNews = [];
let favNews = [];

const printDate = () => {
  const month = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  const dateNow = document.querySelector(".date-now");
  dateNow.textContent =
    timeNow.getDate() +
    " " +
    month[timeNow.getMonth()] +
    ", " +
    timeNow.getFullYear();
  " | " +
    timeNow.getHours() +
    ":" +
    timeNow.getMinutes().toString().padStart(2, "0");
};

const categoriesBtns = document.querySelector(".navbar");
const favSection = document.getElementById("fav-section");
const favBtn = document.getElementById("favorite");

const readLocalStorage = () => {
  newsStringified = localStorage.getItem("noticias");
  //newsObj = JSON.parse(newsStringified);
  return JSON.parse(newsStringified);
};

const saveLocalStorage = (newsToSave) => {
  localStorage.setItem("noticias", newsToSave);
  //guardar objeto notis
  //guardar fecha actual
  localStorage.setItem("noticiasFecha", Date.now());
};

async function readApi() {
  const API_URL = "https://digital360-backend-dev.fl0.io/api/noticias";

  return fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al leer la API");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

async function readNews() {
  newsDate = localStorage.getItem("noticiasFecha");
  const noCheckTimeNews = true; //'true' fuerza a leer la API aunque las noticias guardadas en LS sean nuevas
  let response;
  //Compruebo si hay algo en LS
  if (newsDate) {
    //Compruebo si lo que se encuentra en LS tiene cierto tiempo
    //(la API que leía originalmente tiene un limite de lecturas diarias)
    if (Date.now() - newsDate > 60 * 1000 || noCheckTimeNews) {
      //Vuelvo a leer la API porque las noticias del LS tienen más de una hora
      console.log("Utilizo las notis de la API");
      response = await readApi();
    } else {
      console.log("Utilizo las notis del LS");
      //Uso lo que está en LS
      response = readLocalStorage();
    }
  } else {
    console.log("Leo API porque LS vacío");
    response = await readApi();
  }
  saveLocalStorage(JSON.stringify(response));
  return response;
}

const limitString = (stringToLimit, stringLength) => {
  let stringLimited;
  if (stringToLimit) {
    if (stringToLimit.length > stringLength) {
      stringLimited = stringToLimit.slice(
        0,
        stringToLimit.length - (stringToLimit.length - stringLength)
      );
    } else {
      stringLimited = stringToLimit;
    }
  }
  return stringLimited;
};

const templateArticle = (imageUrl, title, content, category) => {
  number++;
  dataId = number + Date.now();
  if (!imageUrl) {
    imageUrl = "./assets/img/imagen-no-disponible.png";
  }
  thisNews = {
    id: dataId,
    imageUrl: imageUrl,
    title: title,
    content: content,
    category: category,
  };
  arrayNews.push(thisNews);
  return `
    <article class="article">
      <img src="${imageUrl}" alt="${limitString(title, 10)}">
      <div class="text">
        <h2 class="article-title">${title.toUpperCase()}</h2>
        <p class="article-content">${limitString(content, 180)}...</p>        
        <i class="bi bi-plus-circle add-news" data-id="${dataId}"></i>
      </div>
    </article>`;
};

const templateHero = (title) => {
  const HTMLtoHero = document.createElement("h2");
  HTMLtoHero.classList.add("portada-title");
  HTMLtoHero.textContent = title.toUpperCase();
  return HTMLtoHero;
};

const newsHTML = (newsObj) => {
  let outputHTML = "";
  if (newsObj) {
    newsObj.forEach((element) => {
      outputHTML =
        outputHTML +
        templateArticle(
          element.image_url,
          element.title,
          element.content,
          element.category
        );
    });
  }
  return outputHTML;
};

const printHero = (newsObj) => {
  const heroSection = document.getElementById("portada");
  heroSection.style.backgroundImage = `url("${newsObj[0].image_url}")`;
  heroSection.appendChild(templateHero(newsObj[0].title));
};

function printNews(newsObj) {
  //console.log(newsObj);
  const newsSection = document.getElementById("news-section");
  newsSection.innerHTML = newsHTML(newsObj);
}

const closeHeroIfIsOpen = () => {
  const heroSection = document.getElementById("portada");
  if (!heroSection.classList.contains("hidden")) {
    heroSection.classList.add("hidden");
  }
};

const categoryFilter = (e) => {
  if (e.target.dataset.id) {
    toggleMenuDisplayed();
    closeHeroIfIsOpen();
    let newsFiltered = newsObj.filter(
      (obj) => obj.category === e.target.dataset.id
    );
    printNews(newsFiltered);
    console.log("Se filtraron las noticias");
    const cat = document.querySelectorAll(".category");
    cat.forEach((cat) => {
      console.log(cat.children[0].dataset.id);
      if (cat.children[0].dataset.id === e.target.dataset.id) {
        cat.classList.add("active");
      } else {
        cat.classList.remove("active");
      }
    });
  } else {
    console.log("No se filtraron las noticias");
  }
};

const favMenuIsOpen = () => {
  return !favSection.classList.contains("open-favs");
};

const closeNavBar = () => {
  if (!categoriesBtns.classList.contains("hidden")) {
    toggleMenuDisplayed();
  }
};

const toggleFavSection = () => {
  if (favMenuIsOpen()) {
    closeNavBar();
    favSection.classList.add("open-favs");
  } else {
    favSection.classList.remove("open-favs");
  }
};

const loadFavsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("noticiasFav")) || [];
};

const saveFavsToLocalStorage = (favs) => {
  localStorage.setItem("noticiasFav", JSON.stringify(favs));
};

const favCount = () => {
  const newsFav = localStorage.getItem("noticiasFav");
  if (newsFav) {
    return JSON.parse(localStorage.getItem("noticiasFav")).length;
  } else {
    return 0;
  }
};

const printFavNumber = () => {
  const number = favCount();
  favBtn.innerHTML = "";
  favBtn.innerHTML = `<span class="fav-number">${number}</span>`;
};

const addNewsToFavs = (e) => {
  const idOfSelectedNews = Number(e.target.dataset.id);
  //comprobar que esa ID no esté guardada de antes
  if (!favNews.some((news) => news.id === idOfSelectedNews)) {
    const newsFinded = arrayNews.find((news) => news.id == idOfSelectedNews);
    favNews.push(newsFinded);
    createFavSection(favNews);
    saveFavsToLocalStorage(favNews);
    printFavNumber();
  }
};

const removeNewsFromFavs = (e) => {
  const newFavNews = favNews.filter((news) => news.id != e.target.dataset.id);
  favNews = [...newFavNews];
  createFavSection(favNews);
  saveFavsToLocalStorage(favNews);
  printFavNumber();
};

const favClearFnc = () => {
  favNews = [];
  console.log(favNews);
  createFavSection(favNews);
  saveFavsToLocalStorage(favNews);
  printFavNumber();
};

function createFavSection(favNews) {
  let favClearBtn = "";
  if (favNews.length > 1) {
    favClearBtn = `<p class="fav-clear">Limpiar Favoritos</p>`;
  }
  const favSectionHTML =
    `
  <h2 class="section-fav-title">Sus Noticias Guardadas</h2>
  <i class="bi bi-x-circle fav-close-button"></i>
  ` +
    favNews
      .map((news) => {
        return `
      <article class="fav-article">
        <img src="${news.imageUrl}" alt="${limitString(news.title, 30)}" />
        <div class="text">
          <h2 class="article-title">${news.title.toUpperCase()}</h2>
          <p class="article-content">${limitString(news.content, 300)}</p>
          <i class="bi bi-dash-circle del-news" data-id="${news.id}"></i>
        </div>
      </article>
      `;
      })
      .join("") +
    favClearBtn;
  favSection.innerHTML = "";
  favSection.innerHTML = favSectionHTML;
  const favCloseButton = document.querySelector(".fav-close-button");
  favCloseButton.addEventListener("click", toggleFavSection);
  const rmvNews = document.querySelectorAll(".del-news");
  rmvNews.forEach((btn) => {
    btn.addEventListener("click", removeNewsFromFavs);
  });
  if (favNews.length > 1) {
    const favClear = document.querySelector(".fav-clear");
    favClear.addEventListener("click", favClearFnc);
  }
}

async function init() {
  printDate();
  printFavNumber();

  try {
    newsObj = await readNews();
    printHero(newsObj);
    printNews(newsObj);
    const addNews = document.querySelectorAll(".add-news");
    addNews.forEach((btn) => {
      btn.addEventListener("click", addNewsToFavs);
    });
  } catch (error) {
    console.error("Error:", error);
  }

  categoriesBtns.addEventListener("click", categoryFilter);
  favBtn.addEventListener("click", toggleFavSection);

  document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
      favSection.classList.remove("open-favs");

      toggleMenuDisplayed();
    }
  });

  window.addEventListener("scroll", closeIfDisplayed);

  favNews = loadFavsFromLocalStorage();

  createFavSection(favNews);
}

document.addEventListener("DOMContentLoaded", init);

//openweathermap.org
/*
Github y Vercel.

https://checklist-integrador-js.vercel.app/


*/
