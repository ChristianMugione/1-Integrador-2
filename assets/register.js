const form = document.getElementById("register-form");
const nameInput = document.getElementById("name");
const lastInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const userInput = document.getElementById("user");
const passInput = document.getElementById("password");

// Funciones auxiliares
const isEmpty = (input) => {
  return !input.value.trim().length;
};

const printError = (input, msg) => {
  input.classList.add("red-border");
  const small = input.parentElement.querySelector("small");
  small.style.display = "block";
  small.textContent = msg;
};

const isValidLength = (input, minChars, maxChars) => {
  let isOk = true;
  if (input.value < minChars) {
    isOk = false;
  }
  if (input.value > maxChars) {
    isOk = false;
  }
  return isOk;
};

const isEmailOk = (input) => {
  const re = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,4})+$/;
  return re.test(input.value.trim());
};

const checkText = (input) => {
  let isOk = true;
  const minChars = 3;
  const maxChars = 25;
  //chequeamos que no venga vacío
  if (isEmpty(input)) {
    //recatate
    printError(input, "Campo vacío");
    return;
  }
  if (!isValidLength(input, minChars, maxChars)) {
    printError(input, "Cantidad de caracteres incorrecta");
    return;
  }
  return isOk;
};

const checkMail = (input) => {
  let isOk = true;
  console.log("mail", input.value);
  if (isEmpty(input)) {
    printError(input, "Campo vacío");
    return;
  }
  if (!isEmailOk(input)) {
    printError(input, "Email inválido");
    return;
  }
  return isOk;
};

const isPassValid = (input) => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return re.test(input.value.trim());
};

const checkPass = (input) => {
  let isOk = false;
  if (isEmpty(input)) {
    printError(input, "La contraseña es obligatoria");
    return;
  }
  if (!isPassValid(input)) {
    printError(input, "Mínimo 8 caracteres, 1 mayúscula y 1 minúscula");
    return;
  }
  //si pasa por ambas validaciones llamamos a la función de éxito y cambiamos el estado de valid a true
  isOk = true;
  return isOk;
};

const submitted = (e) => {
  //evitar el comportamiento por defecto
  e.preventDefault();
  console.log(e.target);
  //chekear todos los inputs
  let isNameOk = checkText(nameInput);
  let isLastOk = checkText(lastInput);
  let isEmailOk = checkMail(emailInput);
  let isUserOk = checkText(userInput);
  let isPassOk = checkPass(passInput);

  let isFormValid = isNameOk && isLastOk && isEmailOk && isUserOk && isPassOk;
  console.log(isNameOk, isLastOk, isEmailOk, isUserOk, isPassOk);
  if (isFormValid) {
    alert("Registro exitoso");
    window.location.href = "login.html";
  }
};

const init = () => {
  form.addEventListener("submit", submitted);
  //validacion de campos
  /*nameInput.addEventListener("input", () => {
    checkText(nameInput);
  });
  lastInput.addEventListener("input", () => {
    checkText(lastInput);
  });*/
};

init();
