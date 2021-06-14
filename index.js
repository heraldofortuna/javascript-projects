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
  console.log(randomNumber);

  container.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
