document.getElementById("entrada").addEventListener('input', () => {

    var search = null
    
    var input = document.getElementById("entrada").value

    let muestra = document.getElementById("muestra")


    //let poke = `https://pokeapi.co/api/v2/pokemon/`

    function pokeApi(id) {


        fetch(`https://pokeapi.co/api/v2/pokemon/`+ id)
            .then(res => res.json())
            .then(pokemon => {

                
                muestra.innerHTML = `
            <p id="a">${pokemon.id} -</p>  <p>${pokemon.name}</p>`

                let foto = document.getElementById("dibujoDiv");

                foto.innerHTML = ` 

            <audio autoplay src="${pokemon.cries.latest}"></audio>
            <img id="dibujo" src="${pokemon.sprites.other.showdown.front_default}">`

                search = pokemon.id

                document.getElementById("previus").addEventListener("click", () => {       
                    pokeApi(search-1)


                })

                document.getElementById("next").addEventListener("click", () => {
                    pokeApi(search+1)
                })
            })
    }
    pokeApi(input)
})
