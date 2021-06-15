// Set initial count;
let count = 0;
// Select value and buttons;
const value = document.getElementById("value");
const buttons = document.querySelectorAll(".button");

const colorValue = (count) => {
  let color = "var(--color-dark)";
  if (count > 0) {
    color = "green";
  } else if (count < 0) {
    color = "red";
  }
  return color;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    value.style.color = colorValue(count);
    value.textContent = count;
  });
});
