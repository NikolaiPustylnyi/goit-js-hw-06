const colorChangeBtn = document.querySelector(".change-color");
const body = document.querySelector("body");
const span = document.querySelector(".color");


colorChangeBtn.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
  body.style.backgroundColor = randomColor;
  span.textContent = randomColor; 
}
