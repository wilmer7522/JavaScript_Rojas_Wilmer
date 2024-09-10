let url1 = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`

let carta1Player1 = document.querySelector(".carta1Player1")

let carta1Computer = document.querySelector(".carta1Computer")

fetch(url1)
    .then(res => res.json())
    .then(mazo =>{

        console.log(mazo.deck_id);

        const ulti = mazo.deck_id


    fetch(`https://deckofcardsapi.com/api/deck/${ulti}/draw/?count=2`)
        .then(res => res.json())
        .then(cartas => {

            cartas.cards.forEach(card =>{
                carta1Player1.innerHTML += `<div class="cartas1Player1"><img src="${card.images.png}"/></div>`  
            })

        fetch(`https://deckofcardsapi.com/api/deck/${ulti}/draw/?count=2`)
            .then(res => res.json())
            .then(cartas => {

            cartas.cards.forEach(card2 =>{
                carta1Computer.innerHTML += `<div class="cartas1Computer"><img src="${card2.images.png}"/></div>`

            })

            

        
        })

        console.log(cartas);
        

            
        })
        
    })