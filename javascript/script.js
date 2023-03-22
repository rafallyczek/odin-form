//Constants
const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const passw = document.getElementById("passw");
const passw_confirm = document.getElementById("passw_confirm");
const form = document.querySelector(".register-form");

//Listeners
form.addEventListener("submit", (e) => {

    const errors = document.querySelectorAll(".invalid");
    if(errors.length>0){
        e.preventDefault();
    }

});

form.addEventListener("focusout", (e) => {

    switch(e.target.id){
        case "first_name":
            validateName(e.target);
            break;
        case "last_name":
            validateName(e.target);
            break;
        case "email":
            validateEmail(e.target);
            break;
        case "phone":
            validatePhone(e.target);
            break;
        case "passw":
            validatePassword(e.target);
            break;
        case "passw_confirm":
            validatePasswordConfirm(e.target);
            break;
    }

});

form.addEventListener("input", (e) => {



});

//Validators
function validateName(input){

    if(!isRequired(input)){
        setInvalid(input,"This field is required");
        return;
    }

    setValid(input);

}

function validateEmail(input){

    if(!isRequired(input)){
        setInvalid(input,"This field is required");
        return;
    }else if(!isEmail(input)){
        setInvalid(input,"Valid email is required");
        return;
    }

    setValid(input);

}

function validatePhone(input){

    if(!isPhone(input)){
        setInvalid(input,"Enter valid phone number");
        return;
    }

    setValid(input);

}

function validatePassword(input){

    if(!isRequired(input)){
        setInvalid(input,"This field is required");
        return;
    }else if(!isLongEnough(input)){
        setInvalid(input,"Password must be at least 6 characters long");
        return;
    }

    setValid(input);

}

function validatePasswordConfirm(input){

    if(!isRequired(input)){
        setInvalid(input,"This field is required");
        return;
    }else if(!isPasswordMatching(input)){
        setInvalid(input,"Enter matching passwords");
        return;
    }

    setValid(input);

}

// Utility functions
function isRequired(input){

    if(input.validity.valueMissing){
        return false;
    }else{   
        return true;
    }

}

function isEmail(input){

    if(input.validity.typeMismatch){
        return false;
    }else{
        return true;
    }

}

function isPhone(input){

    if(input.validity.patternMismatch){
        return false;
    }else{
        return true;
    }

}

function isLongEnough(input){

    if(input.validity.tooShort){
        return false;
    }else{
        return true;
    }

}

function isPasswordMatching(input){

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