const form = document.querySelector(".login-form");
const inputEmail = document.querySelector("input[type ='email']");
const inputPassword = document.querySelector("input[type ='password']");



function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const user = {}

    formData.forEach((value, name) => {
        if(value !== ""){
        user[name] = value;
        return user;
        } alert("Please enter email and password"); 
        return;
        });
        form.reset();
    console.log(user);
}


form.addEventListener("submit", onFormSubmit);