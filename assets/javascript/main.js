const menu = document.querySelector(".menu");
const collapseMenuBtn = document.querySelector(".menu__arrow");
const collapseIcon = document.querySelector(".menu__collapse");
const iconTexts = document.querySelectorAll(".icon__text");
const chratContainer = document.querySelector(
  ".main__statistics--graph-container"
);
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
console.log(chratContainer);
new Chart(chratContainer, {
  type: "line",
  data: {
    labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
    datasets: [
      {
        data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
        label: "فروش این هفته",
        borderColor: "#3e95cd",
        fill: true,
      },
      {
        data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
        label: "خرید این هفته",
        borderColor: "#c45850",
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "میزان فروش و خرید",
    },
  },
});
