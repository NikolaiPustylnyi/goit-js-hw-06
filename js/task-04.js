let counterValue = 0;
const displayValue = document.querySelector("#value");

const decrementButton = document.querySelector("[data-action='decrement']");
const incrementButton = document.querySelector("[data-action='increment']");


decrementButton.addEventListener('click', () => {
counterValue -= 1;
displayValue.textContent = counterValue;

return displayValue;
})

incrementButton.addEventListener('click', () => {
counterValue += 1;
displayValue.textContent = counterValue;

return displayValue;
})


