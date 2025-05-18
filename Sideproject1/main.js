const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const passWord = document.getElementById('password');
const passWord2 = document.getElementById('password2');
//show error message
const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
};
//show success outline
const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
};
//check email valid
const checkEmail = (input) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, "Email is required");
    }
}
//check string empty
const checkRequire = (inputArray) => {
    inputArray.forEach((input) => {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`);
        }
        else {
            showSuccess(input);
        }
    })
}
const getFieldName = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
const checkLength = (input, min, max) => {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} character`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} character`);
    }
}
const checkPasswordMatch = (input1, input2) => {
    if (input1.value !== input2.value) {
        showError(input2, "Password not match");
    } else {
        showSuccess(input2);
    }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkRequire([userName, email, passWord, passWord2]);
    checkEmail(email);
    checkLength(userName, 3, 15);
    checkLength(passWord, 6, 25);
    checkPasswordMatch(passWord, passWord2);
});