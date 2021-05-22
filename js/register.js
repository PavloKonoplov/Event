const register = document.getElementById('registerModal');

const usernameValue = document.getElementById('InputUsernameReg');
const emailValue = document.getElementById('InputEmailReg');
const passValue = document.getElementById('InputPassReg');

const url_register = 'http://localhost:5000/users/register';

auth.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(url_register, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: usernameValue.value,
            email: emailValue.value,
            password: passValue.value
        })
    })
        .then(res => res.json())
        .then(data => {
            const dataArr = [];
            dataArr.push(data);
        })
})


