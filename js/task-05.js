const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener('input', (event) => {
if(event.target.value !== ""){
 span.textContent = event.currentTarget.value;
return;
} span.textContent = "Anonymous";
  
});


