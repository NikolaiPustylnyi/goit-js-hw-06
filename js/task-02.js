const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const newEl = document.querySelector("#ingredients");

const ingridientList = ingredients.map(ingridient => {
const list = document.createElement("li")
list.textContent = ingridient;
list.classList.add("item");
return list;
});


newEl.append(...ingridientList);