// 'use strict';

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

var meetingStorage = [
  {
    name: "FG",
    link: "https://meet.jit.si/FGEmpreendimentos5122022O7V3FMWSPQ/FG",
  },
];

// Functions

const setHistoric = ({ name, link }) => {
  const meetingLocal = localStorage.getItem('meetingStorage')
  
  if(meetingLocal === null) {
    let meeting = [{ name: name, link: link }]
    localStorage.setItem('meetingStorage', JSON.stringify(meeting))
  } else {
    let meeting = [{ name: name, link: link }]

    console.log("caso tenha")
    console.log(meetingLocal)
  }
  console.log("Local: ", meetingLocal);



  // meetingStorage = [...meetingStorage, { name: name, link: link }];
  // console.log("Local After: ", meetingStorage);
};

// JSON.stringify(myBlogs)

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

  // console.log(name)
  // console.log(date)
  // console.log(link)

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
