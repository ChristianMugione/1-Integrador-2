console.log("hola");
const API = "https://prueba-backend-node-zvua-dev.fl0.io/api/noticias";

const loadData = async () => {
  const toReturn = await fetch(API);
  return toReturn;
};

const init = () => {
  loadData().then((data) => data.json());
};

init();
