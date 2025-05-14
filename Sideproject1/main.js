const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const passWord = document.getElementById('password');
const passWord2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(userName.value);
});