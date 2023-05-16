const navClose = document.querySelector(".header__closed");
const navButton = document.querySelector(".navigation__button");

navClose.classList.remove("header__nojs");

navButton.addEventListener("click", (function () {
  navClose.classList.contains("header__opened") ? (navClose.classList.remove("header__opened"),
  navClose.classList.add("header__closed")) : (navClose.classList.add("header__opened"),
  navClose.classList.remove("header__closed"))
}));
