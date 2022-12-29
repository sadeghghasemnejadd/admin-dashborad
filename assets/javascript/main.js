const menu = document.querySelector(".menu");
const collapseMenuBtn = document.querySelector(".menu__arrow");
const collapseIcon = document.querySelector(".menu__collapse");
const iconTexts = document.querySelectorAll(".icon__text");
let isOpen = false;
collapseMenuBtn.addEventListener("click", () => {
  if (isOpen) {
    menu.style.width = "6rem";
    iconTexts.forEach((i) => (i.style.display = "none"));
    collapseIcon.style.transform = "rotate(0deg)";
    isOpen = false;
  } else {
    menu.style.width = "15rem";
    iconTexts.forEach((i) => (i.style.display = "block"));
    collapseIcon.style.transform = "rotate(180deg)";
    isOpen = true;
  }
});
