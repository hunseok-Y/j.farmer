"use strict";
import Swiper from "https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js";

const searchEl = document.querySelector(".header__search");
const searchInputEl = searchEl.querySelector(".input");

searchEl.addEventListener("click", () => {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", () => {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", () => {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

// swiper js 코드
const swiper = new Swiper(".visual__inner", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
  speed: 1500,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const mdpick = new Swiper(".mealkit__swiper", {
  slidesPerView: 4,
  spaceBetween: 40,
  speed: 1500,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
