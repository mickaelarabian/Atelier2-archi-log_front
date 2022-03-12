function buyCard() {
  const userId = localStorage.getItem('archi_user')
  const data = JSON.stringify({
      "userId": userId,
      "cardId": parseInt(cardId),
  });

  const context = {   
      method: 'POST',
      body: data,
      headers: {
          'Content-type': 'application/json; charset=UTF-8'
      }
  };

  const POST_ASI_URL = 'http://localhost:8080/buy'

  fetch(POST_ASI_URL, context)
      .then(response => response.text())
      .then(result => successRefresh())
      .catch(error => console.log('error', error));
}

function sellCard() {
  const userId = localStorage.getItem('archi_user')
  const data = JSON.stringify({
      "userId": userId,
      "cardId": parseInt(cardId),
  });

  const context = {
      method: 'POST',
      body: data,
      headers: {
          'Content-type': 'application/json; charset=UTF-8'
      }
  };

  const POST_ASI_URL = 'http://localhost:8080/sell'

  fetch(POST_ASI_URL, context)
      .then(response => response.text())
      .then(result => successRefresh())
      .catch(error => console.log('error', error));
}

function successRefresh(){
  let selected = document.querySelector("#selected-card");
  selected.classList.remove('opened-card');
  location.reload();
}
