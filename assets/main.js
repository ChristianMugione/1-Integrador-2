//Fecha y hora actual
const timeNow = new Date();

const printDate = () => {
  const dateNow = document.querySelector(".date-now");
  dateNow.textContent =
    timeNow.getDate() +
    "/" +
    (parseInt(timeNow.getMonth()) + 1).toString().padStart(2, "0") +
    " - " +
    timeNow.getHours() +
    ":" +
    timeNow.getMinutes().toString().padStart(2, "0");
};

const favSection = document.getElementById("fav-section");

//Declaración de variables
let newsObj = [];

const readLocalStorage = () => {
  newsStringified = localStorage.getItem("noticias");
  //newsObj = JSON.parse(newsStringified);
  return JSON.parse(newsStringified);
};

async function readApi() {
  const API_URL = "http://localhost:3000/api/noticias";

  return fetch("http://localhost:3000/api/noticias")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Aquí convertimos el cuerpo a JSON
    })
    .then((data) => {
      console.log("aaa", data); // Aquí puedes trabajar con los datos JSON
      return data;
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

async function readNews() {
  newsDate = localStorage.getItem("noticiasFecha");
  const noCheckTimeNews = false; //En TRUE evita chequear si son antiguas las notis guardadas en LS
  let response;
  //Compruebo si hay algo en LS
  if (newsDate) {
    //Compruebo si lo que se encuentra en LS tiene más de un día
    //(la API que leía originalmente tiene un limite de lecturas diarias)
    if (Date.now() - newsDate > 24 * 60 * 60 * 1000 || noCheckTimeNews) {
      //Vuelvo a leer la API porque las noticias del LS tienen más de una hora
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

const templateArticle = (imageUrl, title, content) => {
  if (imageUrl) {
    return `
    <article class="article">
    <img src="${imageUrl}" alt="${limitString(title, 20)}">
    <div class="text">
    <h2 class="article-title">${title.toUpperCase()}</h2>
    <p class="article-content">${limitString(content, 200)}</p>        
    </div>
    </article>`;
  } else {
    return "";
  }
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
        templateArticle(element.image_url, element.title, element.content);
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
  console.log(newsObj);
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
  toggleMenuDisplayed();
  closeHeroIfIsOpen();
  let newsFiltered = newsObj.filter(
    (obj) => obj.category === e.target.dataset.id
  );
  printNews(newsFiltered);
};

const favMenuIsOpen = () => {
  return !favSection.classList.contains("hidden");
};

const toggleFavSection = () => {
  if (favMenuIsOpen) {
    //close menu
    favSection.classList.add("hidden");
  } else {
    //open menu
    favSection.classList.remove("hidden");
  }
};

async function init() {
  printDate();

  try {
    const newsObj = await readApi();
    printHero(newsObj);
    printNews(newsObj);
  } catch (error) {
    console.error("Error:", error);
  }

  const categoriesBtns = document.querySelector(".navbar");
  categoriesBtns.addEventListener("click", categoryFilter);
  const favBtn = document.getElementById("favorite");
  favBtn.addEventListener("click", toggleFavSection);
}

init();

//inicio prueba
/*fetch("https://prueba-backend-node-zvua-dev.fl0.io/api/noticias") //
  .then((data) => data.json()) //
  .then((datajson) => console.log(datajson[1].nombre));
*/
//fin prueba

/*
- noticias favoritas (con localstorage).

- una página de login y de registro, desde las cuales se deberá poder volver a la página principal.
(no piden funcionalidad pero se la puedo agregar mediante el sessionstorage o como sea que se llame)

👉 API de Noticias

👉 Github y Vercel.

👉 https://checklist-integrador-js.vercel.app/


*/
