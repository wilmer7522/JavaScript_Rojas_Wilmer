let url1 = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`

let carta1Player1 = document.querySelector(".carta1Player1")

let carta1Computer = document.querySelector(".carta1Computer")
let select = document.getElementById("select")
let uno = document.getElementById("uno").value
let once = document.getElementById("once").value
let pedir = document.getElementById("pedir")
let mensaje = document.getElementById("mensaje")
let quedarme = document.getElementById("quedarme")
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
                cartas.cards.forEach(card => {
                    carta1Player1.innerHTML += `<div class="cartas1Player1" style="display: block;"><img src="${card.images.png}"/></div>`


                    if (card.value === "ACE") {
                        
                            card.value = 11
                        }
                    
                        
                        
                    else if (card.value === "KING" || card.value === "QUEEN" || card.value === "JACK") {
                        card.value = 10
                    }
                    

                    else { carta1Player1.innerHTML += parseInt(`${card.value}`) }

                    if (suma1 === 21) {
                        alert("Has Ganado")};
                        
                    sumaPlayer += parseInt(card.value)
                    console.log(parseInt(sumaPlayer));
                })
                pedir.addEventListener("click", () => {
                    fetch(`https://deckofcardsapi.com/api/deck/${ulti}/draw/?count=1`)
                        .then(res => res.json())
                        .then(pide => {

                            pide.cards.forEach(pide1 => {
                                carta1Player1.innerHTML += `<div class="cartas1Player1" style="display: block;" ><img src="${pide1.images.png}"/></div>`
                                if (pide1.value === "ACE") {
                        
                                    pide1.value = 11
                                }
                            
                                
                                
                            else if (pide1.value === "KING" || pide1.value === "QUEEN" || pide1.value === "JACK") {
                                pide1.value = 10
                                
                            }
                            
        
                            else { carta1Player1.innerHTML += parseInt(`${pide1.value}`) }
                
                                sumaPlayer += Number(pide1.value)
                
                                console.log(sumaPlayer);
                                if (sumaPlayer > 21) {
                                    mensaje.innerHTML = `<div id="mensaje"><p>Perdiste</p></div>`
                                    pedir.style.display = "none"
                                    
                                }
                                else if (sumaPlayer === 21) {
                                        mensaje.innerHTML = `<div id="mensaje"><p>Gano</p></div>`
                                        pedir.style.display = "none"
                                        
                                    }
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
                                carta1Player1.innerHTML = `<div id="mensaje"><p>Perdiste</p></div>`
                            }
                            else if (suma === 21) {
                                carta1Player1.innerHTML = `<div id="mensaje"><p>Gano</p></div>`
                            }
                            
                            
                        })
                        quedarme.addEventListener("click", ()=>{
                            pedir.style.display = "none"

                            function aleatorio(inferior, superior) {
                                var numPosibilidades = superior - inferior;
                                var aleatorio = Math.random() * (numPosibilidades + 1);
                                aleatorio = Math.floor(aleatorio);
                                return inferior + aleatorio;
                            }

                            aleatorio()

                            fetch(`https://deckofcardsapi.com/api/deck/${ulti}/draw/?count=1`)
                        .then(res => res.json())
                        .then(pide => {

                            pide.cards.forEach(pide1 => {
                                carta1Computer.innerHTML += `<div class="cartas1Computer" style="display: block;" ><img src="${pide1.images.png}"/></div>`
                                if (pide1.value === "ACE") {
                        
                                    pide1.value = 11
                                }
                            
                                
                                
                            else if (pide1.value === "KING" || pide1.value === "QUEEN" || pide1.value === "JACK") {
                                pide1.value = 10
                                
                            }
                            
        
                            else { carta1Computer.innerHTML += parseInt(`${pide1.value}`) }
                
                                sumaPlayer += Number(pide1.value)
                
                                console.log(sumaPlayer);
                                if (sumaPlayer > 21) {
                                    mensaje.innerHTML = `<div id="mensaje"><p>Computadora Perdio</p></div>`
                                    pedir.style.display = "none"
                                    
                                }
                                else if (sumaPlayer === 21) {
                                        mensaje.innerHTML = `<div id="mensaje"><p>Computadora Gano</p></div>`
                                        pedir.style.display = "none"
                                        
                                    }
                            })

                        })

                    })

                })

            })

    })