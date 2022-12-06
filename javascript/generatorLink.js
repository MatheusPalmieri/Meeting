"use strict";

const form = document.getElementById("form");
const field = document.getElementById("nameMeeting");
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

const padTo2Digits = (number) => {
  return number.toString().padStart(2, "0");
};

const formatDate = (date) => {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join("/");
};

const setHistoric = ({ name, link }) => {
  const meetingLocal = localStorage.getItem("meetingStorage");
  const date = formatDate(new Date());

  if (meetingLocal === null) {
    // Definindo o objeto
    let meeting = [{ name: name, link: link, date: date }];
    // Salvando no localStorage
    localStorage.setItem("meetingStorage", JSON.stringify(meeting));
  } else {
    // Resgatando todas as reuniões salvas no localStorage
    let allMeetings = JSON.parse(localStorage.getItem("meetingStorage"));
    // Salvandos todas em um único array
    let meeting = [...allMeetings, { name: name, link: link, date: date }];
    // Salvando no localStorage
    localStorage.setItem("meetingStorage", JSON.stringify(meeting));
  }
};

// Validação de nome
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

// Style
const setError = () => {
  field.style.border = "2px solid #e63636";
};

const removeError = () => {
  field.style.border = "";
};

// Criação da Reunião
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

  // Resultado
  let link = `https://meet.jit.si/FGEmpreendimentos${randomKey}/${nameVerified}`;

  setHistoric({ name, link });

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
