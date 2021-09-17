"use strict";

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

// 지정한 시간에 설정하는 함수
// 버튼 누르면 이벤트 베너 넘어가는 코드
const visBtn1 = document.querySelector(".visual__btn-1");

visBtn1.addEventListener("click", () => {
  document.querySelector(".visual__container").style.transform =
    "translate(0vw)";
});

const visBtn2 = document.querySelector(".visual__btn-2");

visBtn2.addEventListener("click", () => {
  document.querySelector(".visual__container").style.transform =
    "translate(-100vw)";
});

// top-up
// const dm = document.documentElement;
// const topUp = document.querySelector(".top-up");

// const documentHeight = dm.scrollHeight;

// window.addEventListener("scroll", function () {
//   let scrollToTop = dm.scrollTop;

//   if (documentHeight != 0) {
//     const actionHeight = documentHeight / 4;
//     if (scrollToTop > actionHeight) {
//       topUp.classList.add("visible");
//     } else {
//       topUp.classList.remove("visible");
//     }
//   }
// });

// topUp.addEventListener("click", (event) => {
//   event.preventDefault();
//   scrollUp();
// });

// function scrollUp() {
//   let upper = setInterval(function () {
//     if (dm.scrollTop != 0) {
//       window.scrollBy(0, -55);
//     } else {
//       clearInterval(upper);
//     }
//   }, 10);
// }

// const home = document.querySelector(".logo__text");
// const homeHeight = home.getBoundingClientRect().height;

// const topUp = document.querySelector(".top-up");
// document.addEventListener("scroll", () => {
//   if (window.scrollY > homeHeight / 2) {
//     topUp.classList.add("visible");
//   } else {
//     topUp.classList.remove("visible");
//   }
// });

// topUp.addEventListener("click", () => {
//   scrollIntoview("#header");
// });

const topup = document.querySelector(".topup");
function topup() {
  window.scrollTo(0, 0);
}
