"use strict";

const btnOpen = document.querySelector("#open");
const btnClose = document.querySelector("#close");
const container = document.querySelector(".container");
const nav = document.querySelector(".nav__list");

btnOpen.addEventListener("click", function () {
  container.classList.add("show-nav");
  nav.classList.add("show-nav");
});

btnClose.addEventListener("click", function () {
  container.classList.remove("show-nav");
  nav.classList.remove("show-nav");
});
