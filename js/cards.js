let cardsState = []
let cardId = 0

function getMyCards() {
    const userId = localStorage.getItem('archi_user')
    const GET_CARD_URL = `http://localhost:8080/cards/${userId}/sell`;
    let context = {
        method: 'GET'
    };

    fetch(GET_CARD_URL, context)
        .then(response => response.json())
        .then(response => callbackCards(response))
        .catch(error => err_callback(error));
}

function getFreeCards() {
    const GET_CARD_URL = `http://localhost:8080/cards/buy`;
    let context = {
        method: 'GET'
    };

    fetch(GET_CARD_URL, context)
        .then(response => response.json())
        .then(response => callbackCards(response))
        .catch(error => err_callback(error));
}

function selectCard(id) {
    let selected = document.querySelector("#selected-card");
    selected.classList.add('opened-card');
    cardId = id
    let card = {}
    let index = cardsState.findIndex(item => item.id === parseInt(id))
    if (index > -1) {
        card = cardsState[index]
        let name = document.querySelector("#name");
        let description = document.querySelector("#description");
        let family = document.querySelector("#family");
        let hp = document.querySelector("#hp");
        let energy = document.querySelector("#energy");
        let defense = document.querySelector("#defense");
        let attack = document.querySelector("#attack");
        let price = document.querySelector("#price");
        name.innerHTML = card.name
        description.innerHTML = card.description
        family.innerHTML = card.family
        hp.innerHTML = card.hp
        energy.innerHTML = card.energy
        defense.innerHTML = card.defense
        attack.innerHTML = card.attack
        price.innerHTML = `${card.price}$`
    }
}

function callbackCards(response) {
    cardsState = response
    let template = document.querySelector("#row");

    for (const card of response) {
        let clone = document.importNode(template.content, true);

        newContent = clone.firstElementChild.innerHTML
            .replace(/{{name}}/g, card.name)
            .replace(/{{description}}/g, card.description)
            .replace(/{{family}}/g, card.family)
            .replace(/{{hp}}/g, card.hp)
            .replace(/{{energy}}/g, card.energy)
            .replace(/{{defense}}/g, card.defense)
            .replace(/{{attack}}/g, card.attack)
            .replace(/{{price}}/g, card.price)
            .replace(/{{id}}/g, card.id);
        clone.firstElementChild.innerHTML = newContent;

        let cardContainer = document.querySelector("#tableContent");
        cardContainer.appendChild(clone);
    }

}

function err_callback(error) {
    console.log('eroor', error)
}
