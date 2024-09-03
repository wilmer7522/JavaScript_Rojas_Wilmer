document.getElementById("entrada").addEventListener('input', () => {

    let input = document.getElementById("entrada").value

    let muestra = document.getElementById("muestra")

    //let poke = `https://pokeapi.co/api/v2/pokemon/`

    function pokeApi() {


        fetch(`https://pokeapi.co/api/v2/pokemon/`+ input)
            .then(res => res.json())
            .then(pokemon => {

                
                muestra.innerHTML = `
            <p id="a">${pokemon.id} -</p>  <p>${pokemon.name}</p>`


                let foto = document.getElementById("dibujoDiv");

                foto.innerHTML = ` 

            <audio autoplay src="${pokemon.cries.latest}">
        </audio>
            <img id="dibujo" src="${pokemon.sprites.other.showdown.front_default}">`



                document.getElementById("previus").addEventListener("click", () => {
                    prev = pokemon.id - 1
                    input = String(prev)
                    pokeApi()


                })

                document.getElementById("next").addEventListener("click", () => {
                    prev = pokemon.id + 1
                    input = String(prev)
                    pokeApi()

                })


            })


    }

    pokeApi()
})