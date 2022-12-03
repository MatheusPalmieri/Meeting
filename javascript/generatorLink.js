// 'use strict';

const form = document.getElementById("form");
const field = document.getElementById("nameMeeting");

console.log("===================");
// console.log(nameMeeting);
console.log("===================");

const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const removeCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "¨",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  ".",
  ":",
  '"',
  "'",
  "=",
  "/",
  " ",
];

// Functions

// Name Validated
const verifyNameMeeting = (nameMeeting) => {
  if (!regex.test(nameMeeting)) {
    for (let i = 0; i < removeCharacters.length; i++) {
      nameMeeting = nameMeeting.split(removeCharacters[i]).join("");
    }
  }

  if (nameMeeting.length > 1) {
    return nameMeeting;
  } else {
    return false;
  }
};

// Gerador de Caracteres aleátarios
const getRandomKey = (size) => {
  let randomKey = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < size; i++) {
    randomKey += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  return randomKey;
};

// Gerador de Data
const getDate = () => {
  let date = new Date();
  let day = date.getDate().toString();
  let month = (date.getMonth() + 1).toString();
  let year = date.getFullYear().toString();

  return day + month + year;
};

// Style
const setError = () => {
  field.style.border = "2px solid #e63636";
};

const removeError = () => {
  field.style.border = "";
};

// Create Meeting
const createLink = (event) => {
  event.preventDefault();

  const generator = document.getElementById("generator");
  const card = document.getElementById("card");
  const generatedLink = document.getElementById("generatedLink");

  const linkResult = document.getElementById("linkResult");

  const name = document.getElementById("nameMeeting").value;
  const nameVerified = verifyNameMeeting(name);

  // Validação de nome da Reunião
  if (nameVerified === false) return setError();

  // Remove Erro
  removeError();

  // Gerar Key aleatória
  let randomKey = getRandomKey(10);

  // Gerar data
  let date = getDate();

  // Resultado
  let link = `https://meet.jit.si/FGEmpreendimentos${
    date + randomKey
  }/${nameVerified}`;

  // Definir link nos Botões
  linkResult.value = link;
  openLinkMeeting.href = link;

  // Style

  // Card inicial
  generator.style.display = "none";
  // Altura do card
  card.style.height = "auto";
  // Card com resultado
  generatedLink.style.display = "flex";
};

// Start Application
form.addEventListener("submit", createLink);
