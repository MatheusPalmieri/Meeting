const nav = document.querySelectorAll("input[name='tab']");

const show = (tab) => {
  const contentGenerator = document.getElementById("generator");
  const contentRecent = document.getElementById("recent");
  const labelCreate = document.querySelector("label[for='tabCreate']");
  const labelRecent = document.querySelector("label[for='tabRecent']");

  if (tab === "tabCreate") {
    contentRecent.style.display = "none";
    labelRecent.style.borderColor = "#fff";
    contentGenerator.style.display = "block";
    labelCreate.style.borderColor = "#0982f3";
  } else if (tab === "tabRecent") {
    contentGenerator.style.display = "none";
    labelCreate.style.borderColor = "#fff";
    contentRecent.style.display = "block";
    labelRecent.style.borderColor = "#0982f3";
  }
};

nav.forEach((tab) => {
  tab.addEventListener("click", () => {
    show(tab.id);
  });
});
