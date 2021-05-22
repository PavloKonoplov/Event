const auth = document.getElementById('loginModal');
const emailValue = document.getElementById('InputEmail');
const passValue = document.getElementById('InputPass');

const url_authenticate = 'http://localhost:5000/users/authenticate';

auth.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(url_authenticate, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: emailValue.value,
            password: passValue.value
        })
    })
        .then(res => res.json())
        .then(data => {
            const dataArr = [];
            dataArr.push(data);
            resolve(window.location.href = "http://localhost:3000/profile.html");
        })
})
