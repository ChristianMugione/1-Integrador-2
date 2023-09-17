const form = document.getElementById("login-form");
const userInput = document.getElementById("user");
const passInput = document.getElementById("password");

const isEmpty = (input) => {
  return !input.value.trim().length;
};

const printError = (input, msg) => {
  input.classList.add("red-border");
  const small = input.parentElement.querySelector("small");
  small.style.display = "block";
  small.textContent = msg;
};

const checkText = (input) => {
  let isOk = true;

  if (isEmpty(input)) {
    printError(input, "Campo vacío");
    return;
  }

  return isOk;
};

const checkPass = (input) => {
  let isOk = false;
  if (isEmpty(input)) {
    printError(input, "La contraseña es obligatoria");
    return;
  }

  isOk = true;
  return isOk;
};

const submitted = (e) => {
  e.preventDefault();
  console.log("111");
  console.log(e.target);
  let isUserOk = checkText(userInput);
  let isPassOk = checkPass(passInput);

  if (isUserOk && isPassOk) {
    window.location.href = "index.html";
  }
};

const init = () => {
  form.addEventListener("submit", submitted);
};

document.addEventListener("DOMContentLoaded", init);
