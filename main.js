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
  // loop: true,
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

new Swiper(".mealkit__swiper", {
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

window.addEventListener("scroll", () => {
  // 1. 클래스명을 가지고 와야함
  const header = document.querySelector(".header");
  const fixedNav = document.querySelector(".header__nav");

  // 2. 어느정도 스크롤이 됬을 때 탑에 붙힘
  const scrollY = window.scrollY;
  const headerHeight = header.getBoundingClientRect().height;

  if (scrollY > headerHeight) {
    fixedNav.classList.add("is-fixed");
  } else {
    fixedNav.classList.remove("is-fixed");
  }

  // 3. 다시 맨위로 올라갔을때 원래 위치에 돌아옴
});

const topButton = document.querySelector(".topup");

// 일정 스크롤시 버튼이 보이게하거나 숨기기
window.addEventListener("scroll", () => {
  if (scrollY > 500) {
    topButton.classList.add("on");
  } else {
    topButton.classList.remove("on");
  }
});

// top 버튼을 클릭 한다.
topButton.addEventListener("click", (e) => {
  e.preventDefault();
  // 최상단으로 이동한다.
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// AOS
AOS.init();
