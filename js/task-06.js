const input = document.querySelector("#validation-input");
const dataLength = parseInt(input.getAttribute("data-length"));
console.log(dataLength)
input.addEventListener("blur", (event) => {

    if (event.currentTarget.value.length === dataLength) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid"); 
    }
    else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
    }
    });