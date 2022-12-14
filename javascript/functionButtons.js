const buttonCopy = document.getElementById("copyLinkMeeting");
const linkMeeting = document.getElementById("linkResult");
const newLinkMeeting = document.getElementById("newLinkMeeting");

buttonCopy.addEventListener("click", () => {
  // Seleciona campo com link
  linkMeeting.select();

  // Executa comando para copiar
  document.execCommand("Copy");

  // Muda texto do botão
  buttonCopy.textContent = "Link Copiado";
});

// Regarrega página para criação e novo link
newLinkMeeting.addEventListener("click", () => location.reload());
