const allGames = fetch('https://games-store-api.herokuapp.com/games/')
    .then(response => response.json())
    .then(result => console.log(result.games));
    
function setElements(allgames) {
    const main = document.querySelector('main');

    for (let i = 0; i < 3; i++) {
        const newCard = document.createElement('game-card');

        newCard.setAttribute('card-title', allgames[i].name);    
        newCard.setAttribute('card-price', allgames[i].price);    
        newCard.setAttribute('card-company', allgames[i].company);    
        newCard.setAttribute('card-category', allgames[i].category);    
        
        main.appendChild(newCard);
    }
}