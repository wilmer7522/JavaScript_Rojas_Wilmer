let url1 = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`

let carta1Player1 = document.querySelector(".carta1Player1")

let carta1Computer = document.querySelector(".carta1Computer")

fetch(url1)
    .then(res => res.json())
    .then(mazo => {

        console.log(mazo.deck_id);

        const ulti = mazo.deck_id


        fetch(`https://deckofcardsapi.com/api/deck/${ulti}/draw/?count=2`)
            .then(res => res.json())
            .then(cartas => {

                cartas.cards.forEach(card => {
                    carta1Player1.innerHTML += `<div class="cartas1Player1"><img src="${card.images.png}"/></div>`
                    if (card.value === "ACE") {
                        carta1Player1.innerHTML += 11
                    }
                    if (card.value === "KING" || card.value === "QUEEN" || card.value === "JACK") {
                        carta1Player1.innerHTML += 10
                    }
                    if (card.value === "10") {
                        carta1Player1.innerHTML += 10
                    }
                    if (card.value === "9") {
                        carta1Player1.innerHTML += 9
                    }
                    if (card.value === "8") {
                        carta1Player1.innerHTML += 8
                    }
                    if (card.value === "7") {
                        carta1Player1.innerHTML += 7
                    }
                    if (card.value === "6") {
                        carta1Player1.innerHTML += 6
                    }
                    if (card.value === "5") {
                        carta1Player1.innerHTML += 5
                    }
                    if (card.value === "4") {
                        carta1Player1.innerHTML += 4
                    }
                    if (card.value === "3") {
                        carta1Player1.innerHTML += 3
                    }
                    if (card.value === "2") {
                        carta1Player1.innerHTML += 2
                    }

                
               // carta1Player1.innerHTML += card.value

            })
        console.log(cartas.cards[0].value);
        console.log(cartas.cards[1].value);

        fetch(`https://deckofcardsapi.com/api/deck/${ulti}/draw/?count=2`)
            .then(res => res.json())
            .then(cartas => {
                let suma = 0;
                cartas.cards.forEach(card2 => {
                    carta1Computer.innerHTML += `<div class="cartas1Computer"><img src="${card2.images.png}"/></div>`
                    if (card2.value === "ACE") {
                        carta1Computer.innerHTML += 11
                    }
                    if (card2.value === "KING" || card2.value === "QUEEN" || card2.value === "JACK") {
                        carta1Computer.innerHTML += 10
                    }

                    else {carta1Computer.innerHTML += parseInt(`${card2.value}`)}
                    /*if (card2.value === "10") {
                        carta1Computer.innerHTML += 10
                    }
                   /* if (card2.value === "9") {
                        carta1Computer.innerHTML += 9
                    }
                    if (card2.value === "8") {
                        carta1Computer.innerHTML += 8
                    }
                    if (card2.value === "7") {
                        carta1Computer.innerHTML += 7
                    }
                    if (card2.value === "6") {
                        carta1Computer.innerHTML += 6
                    }
                    if (card2.value === "5") {
                        carta1Computer.innerHTML += 5
                    }
                    if (card2.value === "4") {
                        carta1Computer.innerHTML += 4
                    }
                    if (card2.value === "3") {
                        carta1Computer.innerHTML += 3
                    }

                    if (card2.value === "2") {
                        carta1Computer.innerHTML += 2
                        
                    }*/
                    

                    suma += Number(card2.value)
                    
                    console.log(suma);
                    if (suma > 21) {
                        alert("Perdiste");}
                        else if  (suma === 21) {
                            alert("Ganaste");}
                    //carta1Computer.innerHTML += card2.value
                })


                console.log(parseInt(cartas.cards[0].value));
                console.log(parseInt(cartas.cards[1].value));


            })





    })
        
    })