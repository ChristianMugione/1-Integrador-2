const dataNotis = [
  {
    image_url: "https://www.clarin.com/img/2023/08/26/gbPDPDcrO_720x0__1.jpg",
    title: "El impresionante despegue nocturno de una nave de SpaceX",
    content:
      "La cápsula Dragon de la NASA y de SpaceX, la compañía del multimillonario Elon Musk, despegó este sábado con cuatro astronautas a bordo, en la séptima misión regular de rotación de tripulantes de la Estación Espacial Internacional (ISS por sus iniciales en inglés).",
    category: "mundo",
  },
  {
    image_url:
      "https://www.clarin.com/img/2023/08/23/GNR-Dv6wC_1256x620__1.jpg",
    title:
      "PAIS: Los saqueos en el Conurbano reavivaron las internas del oficialismo y el clima de fin de ciclo",
    content:
      "Las escenas de saqueos, caos y descontrol en distintos puntos del país que desde el sábado empezaron a viralizarse expusieron otra vez las feroces internas y la fragilidad del Gobierno que se agudizó tras la histórica derrota del peronismo en las PASO. La falta de reacción que se evidenció tanto en la Casa Rosada como en la Gobernación bonaerense durante la jornada del martes reavivó las tensiones y los pases de factura en el marco de una coalición que ya había quedado golpeada luego del fatídico domingo de las elecciones.",
    category: "pais",
  },
  {
    image_url:
      "https://www.clarin.com/img/2023/08/03/zx0xSYDqS_1256x620__1.jpg",
    title:
      "MUNDO: El Fondo Monetario aprobó el desembolso de 7.500 millones de dólares",
    content:
      "El Directorio del Fondo Monetario Internacional aprobó este martes el desembolso de US$ 7.500 millones de la quinta y sexta revisión del programa, confirmaron fuentes de Economía. El board se reunió este miércoles a la mañana para dar la luz verde a la quinta y sexta revisión del programa y liberar esa cifra que en Economía describen como el segundo desembolso más grande de la historia del FMI.",
    category: "mundo",
  },
  {
    image_url:
      "https://www.clarin.com/img/2023/08/23/oaOItqq8P_1256x620__1.jpg",
    title:
      "ECONOMIA Un diputado de Javier Milei denunció a Gabriela Cerruti por acusar al candidato presidencial de estar detrás de los saqueos",
    content:
      "Un diputado de Javier Milei denunció penalmente a la vocera presidencial Gabriela Cerruti por acusar al candidato presidencial de La Libertad Avanza y a su fuerza política de estar detrás de los saqueos en diferentes partes del país. El legislador provincial Nahuel Sotelo, junto al candidato a vicegobernador bonaerense Francisco Oneto, que acompaña en la fórmula a Carolina Píparo, fueron a la Justicia luego de que la funcionaria nacional publicara un video en el que apunta contra Milei por los desmanes.",
    category: "economia",
  },
  {
    image_url:
      "https://www.clarin.com/img/2023/08/22/PoQcC6tu__1256x620__1.jpg",
    title:
      "DEPORTES: una ley que (casi) nadie quiere, pero se frenan los cambios mientras el mercado se derrumba",
    content:
      "A la ley de Alquileres hoy tan vilipendiada, la votaron todos y todas. Casi sin excepción. En Diputados, a las 17.02 del 20 de noviembre de 2019, el tablero marcó 191 votos a favor, 0 en contra y, eso sí, 24 abstenciones de diputados que hoy parecen decir: “Yo les avisé...” La reforma que se impuso tiene dos aspectos que son el corazón de la ley: se llevaron los contratos de alquiler con fines de vivienda a tres años (históricamente había sido dos años), y se impuso un plazo de actualización de los montos una vez al año, en base a un índice que combina evolución de salarios e inflación.",
    category: "deportes",
  },
  {
    image_url:
      "https://www.clarin.com/img/2023/08/22/PoQcC6tu__1256x620__1.jpg",
    title:
      "ESPECTACULOS: una ley que (casi) nadie quiere, pero se frenan los cambios mientras el mercado se derrumba",
    content:
      "A la ley de Alquileres hoy tan vilipendiada, la votaron todos y todas. Casi sin excepción. En Diputados, a las 17.02 del 20 de noviembre de 2019, el tablero marcó 191 votos a favor, 0 en contra y, eso sí, 24 abstenciones de diputados que hoy parecen decir: “Yo les avisé...” La reforma que se impuso tiene dos aspectos que son el corazón de la ley: se llevaron los contratos de alquiler con fines de vivienda a tres años (históricamente había sido dos años), y se impuso un plazo de actualización de los montos una vez al año, en base a un índice que combina evolución de salarios e inflación.",
    category: "espectaculos",
  },
  {
    image_url:
      "https://www.clarin.com/img/2023/08/25/O5CnCpwND_1256x620__1.jpg",
    title:
      'Fue panelista de "Intrusos", pero dejó todo para irse a Miami: cómo es hoy la vida de Nazarena Nóbile y a qué se dedica',
    content:
      "Hace casi una década, a Nazarena Nóbile se la podía ver todas las tardes destilando simpatía y carisma en Intrusos (América, a las 12.30), donde se lucía como una de sus panelistas. ",
    category: "espectaculos",
  },
  {
    image_url: "https://www.clarin.com/img/2023/08/22/obPnsgsW5_720x0__1.jpg",
    title:
      'Javier Milei abrió su corazón y reveló públicamente lo que siente por Fátima Florez: "Imposible no amarla"',
    content:
      'Días después de que se confirmara la relación entre Javier Milei y Fátima Flórez, el candidato presidencial de La Libertad Avanza reconoció por primera vez en público "amar" a la imitadora, actriz y cantante.',
    category: "espectaculos",
  },
  /*{
    image_url: "",
    title: "",
    content: "",
    category: "",
  },
  {
    image_url: "",
    title: "",
    content: "",
    category: "",
  },
  {
    image_url: "",
    title: "",
    content: "",
    category: "",
  },
  {
    image_url: "",
    title: "",
    content: "",
    category: "",
  },
  {
    image_url: "",
    title: "",
    content: "",
    category: "",
  },
  {
    image_url: "",
    title: "",
    content: "",
    category: "",
  },
  {
    image_url: "",
    title: "",
    content: "",
    category: "",
  },
  {
    image_url: "",
    title: "",
    content: "",
    category: "",
  },
  {
    image_url: "",
    title: "",
    content: "",
    category: "",
  },*/
];

// const notiFetch = async (noti) => {
//   await fetch("http://localhost:3000/api/add", {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify({
//       title: noti.title,
//       content: noti.content,
//       images: [noti.image_url],
//       categories: [noti.category],
//       tags: ["default"],
//     }),
//   });
// };

// dataNotis.forEach((noti) => notiFetch(noti));
