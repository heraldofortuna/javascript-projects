// Scroll effect for header section:

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.borderBottom =
      "1px solid var(--color-dark)";
  } else {
    document.getElementById("header").style.borderBottom = "unset";
  }
}

// Color Flipper:

const colors = [
  "green",
  "red",
  "black",
  "yellow",
  "purple",
  "blue",
  "rgba(133, 122, 200)",
  "#f15025",
];
const container = document.getElementById("container");
const button = document.getElementById("button");
const color = document.querySelector(".color");

button.addEventListener("click", function () {
  // Get random number between 0 - 3:
  const randomNumber = getRandomNumber();
  container.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

// Counter

// Set initial count;
let count = 0;
// Select value and buttons;
const value = document.getElementById("value");
const buttons = document.querySelectorAll(".button");
