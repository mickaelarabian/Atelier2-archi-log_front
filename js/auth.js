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
        .then(response => response.text())
        .then(result => callbackUserRegister(result))
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
        .then(response => response.text())
        .then(result => callbackUserLogin(result))
        .catch(error => console.log('error', error));

}

function callbackUserLogin(response) {
    console.log('login',response)
    if(response !== -1){
        localStorage.setItem('archi_user', response)
        window.location = '/dashboard.html'
    }
}

function callbackUserRegister(response) {
    window.location = '/login.html'
}