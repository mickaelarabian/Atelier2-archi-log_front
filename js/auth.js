function register() {
    const data = JSON.stringify({
        "name": document.getElementsByName("name")[0].value,
        "surname": document.getElementsByName("surname")[0].value,
        "pwd": document.getElementsByName("password")[0].value,
        "repassword": document.getElementsByName("repassword")[0].value
    });

    const context = {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    };

    const POST_ASI_URL = 'http://localhost:8080/register'

    fetch(POST_ASI_URL, context)
        // .then(response => response.text())
        .then(response => response.json()
        .then(data => callbackUserRegister({ status: response.status, response: data })))
        // .then(result => callbackUserRegister(result))
        .catch(error => console.log('error', error));

}


function login() {

    const data = JSON.stringify({
        "surname": document.getElementsByName("surname")[0].value,
        "pwd": document.getElementsByName("password")[0].value
    });

    const context = {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    };

    fetch("http://localhost:8080/login", context)
        .then(response => response.json()
            // .then(data => ({ status: response.status, response: data.response }))
            .then(data => callbackUserLogin({ status: response.status, response: data })))
        .catch(error => console.log('error', error));

}

function callbackUserLogin(response) {
    console.log('login', response)
    if (response.status === 200) {
        localStorage.setItem('archi_user', response.response)
        window.location = '/dashboard.html'
    } else {
        console.log('aie', response.response.message)
        let error = document.querySelector('#error');
        error.innerHTML = response.response.message;
    }
}

function callbackUserRegister(response) {
    if (response.status === 200) {
        window.location = '/'
    } else {
        console.log('aie', response.response.message)
        let error = document.querySelector('#error');
        error.innerHTML = response.response.message;
    }
}