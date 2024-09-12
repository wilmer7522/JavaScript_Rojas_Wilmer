let url1 = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`

let carta1Player1 = document.querySelector(".carta1Player1")

let carta1Computer = document.querySelector(".carta1Computer")
let select = document.getElementById("select")
let uno = document.getElementById("uno").value
let once = document.getElementById("once").value
let pedir = document.getElementById("pedir")
let sumaPlayer = 0;
let sumaComputer = 0;
fetch(url1)
    .then(res => res.json())
    .then(mazo => {

        const ulti = mazo.deck_id
        //Player1

        fetch(`https://deckofcardsapi.com/api/deck/${ulti}/draw/?count=2`)
            .then(res => res.json())
            .then(cartas => {
                let suma1 = 0;
                let unoVariable = 0;
                let onceVariable = 0;
                cartas.cards.forEach(card => {
                    carta1Player1.innerHTML += `<div class="cartas1Player1"><img src="${card.images.png}"/></div>`


                    if (card.value === "ACE") {
                        
                            card.value = 11
                        }
                    
                        console.log(parseInt(card.value));
                        
                    if (card.value === "KING" || card.value === "QUEEN" || card.value === "JACK") {
                        card.value = 10
                    }
                    else { carta1Player1.innerHTML += parseInt(`${card.value}`) }
                    if (suma1 === 21) {
                        alert("Has Ganado")};



                    sumaPlayer += parseInt(card.value)


                })
                pedir.addEventListener("click", () => {
                    fetch(`https://deckofcardsapi.com/api/deck/${ulti}/draw/?count=1`)
                        .then(res => res.json())
                        .then(pide => {

                            pide.cards.forEach(pide1 => {
                                carta1Player1.innerHTML += `<div class="cartas1Player1"><img src="${pide1.images.png}"/></div>`
                                console.log(sumaPlayer);
                
                                sumaPlayer += Number(pide1.value)
                
                                console.log(sumaPlayer);
                                if (sumaPlayer > 21) {
                                    alert("Perdiste");
                                }
                                else if (sumaPlayer === 21) {
                                        alert("Has Ganado")};
                            })

                        })
                })
                
                //Computer====================================

                fetch(`https://deckofcardsapi.com/api/deck/${ulti}/draw/?count=2`)
                    .then(res => res.json())
                    .then(cartas => {
                        let suma = 0;
                        cartas.cards.forEach(card2 => {
                            carta1Computer.innerHTML += `<div class="cartas1Computer"><img src="${card2.images.png}"/></div>`
                            if (card2.value === "ACE") {

                                card2.value = 11


                            }


                            if (card2.value === "KING" || card2.value === "QUEEN" || card2.value === "JACK") {
                                card2.value = 10
                            }

                            else { carta1Computer.innerHTML += parseInt(`${card2.value}`) }


                            suma += Number(card2.value)


                            if (suma > 21) {
                                alert("Perdio Computadora");
                            }
                            else if (suma === 21) {
                                alert("Gano computadora");
                            }
                            //carta1Computer.innerHTML += card2.value
                        })





                    })





            })

    })