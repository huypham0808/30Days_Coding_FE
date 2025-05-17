const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const passWord = document.getElementById('password');
const passWord2 = document.getElementById('password2');

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
const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}
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
const checkLengthPassword = (pw) => {
    if (pw.length > 6) {
        return true;
    }
    return false;
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkRequire([userName, email, passWord, passWord2]);
});