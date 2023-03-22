const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const passw = document.getElementById("passw");
const passw_confirm = document.getElementById("passw_confirm");
const form = document.querySelector(".register-form");

first_name.addEventListener("blur", (e) => {

    if(!validateRequired(e.target)){
        setInvalid(e.target,"This field is required");
        return;
    }

    setValid(e.target);

});

last_name.addEventListener("blur", (e) => {

    if(!validateRequired(e.target)){
        setInvalid(e.target,"This field is required");
        return;
    }

    setValid(e.target);

});

email.addEventListener("blur", (e) => {

    if(!validateRequired(e.target)){
        setInvalid(e.target,"This field is required");
        return;
    }else if(!validateEmail(e.target)){
        setInvalid(e.target,"Valid email is required");
        return;
    }

    setValid(e.target);

});

phone.addEventListener("blur", (e) => {

    if(!validatePhone(e.target)){
        setInvalid(e.target,"Enter valid phone number");
        return;
    }

    setValid(e.target);

});

passw.addEventListener("blur", (e) => {

    if(!validateRequired(e.target)){
        setInvalid(e.target,"This field is required");
        return;
    }else if(!validateLength(e.target)){
        setInvalid(e.target,"Password must be at least 6 characters long");
        return;
    }

    setValid(e.target);

});

passw_confirm.addEventListener("blur", (e) => {

    if(!validateRequired(e.target)){
        setInvalid(e.target,"This field is required");
        return;
    }else if(!validatePasswordMatch(e.target)){
        setInvalid(passw_confirm,"Enter matching passwords");
        return;
    }

    setValid(e.target);

});

form.addEventListener("submit", (e) => {

    const errors = document.querySelectorAll(".invalid");
    if(errors.length>0){
        e.preventDefault();
    }

});

function validateRequired(input){

    if(input.validity.valueMissing){
        return false;
    }else{   
        return true;
    }

}

function validateEmail(input){

    if(input.validity.typeMismatch){
        return false;
    }else{
        return true;
    }

}

function validatePhone(input){

    if(input.validity.patternMismatch){
        return false;
    }else{
        return true;
    }

}

function validateLength(input){

    if(input.validity.tooShort){
        return false;
    }else{
        return true;
    }

}

function validatePasswordMatch(input){

    if(input.value != passw.value){
        return false;
    }else{
        return true;
    }

}

function setInvalid(input,message){

    if(input.classList.contains("valid")){
        input.classList.remove("valid");
    }

    input.classList.add("invalid");
    input.nextElementSibling.textContent = message;
    input.nextElementSibling.style.visibility = "visible";

}

function setValid(input){

    if(input.classList.contains("invalid")){
        input.classList.remove("invalid");
    }

    input.classList.add("valid");
    input.nextElementSibling.style.visibility = "hidden";

}