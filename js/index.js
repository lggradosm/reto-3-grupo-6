const $ = (id) => document.getElementById(id);
const burguer = $("burguer");
const header = $("header");
const closeModal = $("close");
const logo1 = $("logo1");
const logo2 = $("logo2");

const menu = $("menu");
const closeHandler = () => {
  header.classList.remove("visible");
  closeModal.classList.remove("visible");
  menu.classList.remove("visible");
};
const openHandler = () => {
  header.classList.add("visible");
  closeModal.classList.add("visible");
  menu.classList.add("visible");
};

const scrollActiveHandler = () => {
  header.classList.add("white");
  logo1.classList.add("hide");
  logo2.classList.add("visible");
};

const scrollDisableHandler = () => {
  header.classList.remove("white");
  logo1.classList.remove("hide");
  logo2.classList.remove("visible");
};

document.addEventListener("scroll", (e) => {
  window.scrollY >= 700 ? scrollActiveHandler() : scrollDisableHandler();
});

closeModal.addEventListener("click", () => {
  closeHandler();
});

burguer.addEventListener("click", () => {
  openHandler();
});
