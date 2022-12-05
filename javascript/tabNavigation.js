const nav = document.querySelectorAll("input[name='tab']");
const contentGenerator = document.getElementById("generator");
const contentRecent = document.getElementById("recent");

const show = (tab) => {
  if (tab === "tabCreate") {
    contentRecent.style.display = "none";
    contentGenerator.style.display = "block";
  } else if (tab === "tabRecent") {
    contentGenerator.style.display = "none";
    contentRecent.style.display = "block";
  }
};

nav.forEach((tab) => {
  tab.addEventListener("click", () => {
    show(tab.id);
  });
});
