function getUserInfos() {
    const userId = localStorage.getItem('archi_user')
    const GET_CARD_URL = `http://localhost:8080/user/${userId}`;
    let context = {
        method: 'GET'
    };

    fetch(GET_CARD_URL, context)
        .then(response => response.json())
        .then(response => callbackUser(response))
        .catch(error => err_callback(error));
}

function callbackUser(response) {
    let username = document.querySelector("#username")
    let balance = document.querySelector("#balance")
    username.innerHTML = response.name
    balance.innerHTML = response.solde
}

function err_callback(error) {
    console.log('eroor', error)
}

function logout(){
    localStorage.removeItem('archi_user')
    window.location = '/index.html'
}

getUserInfos()