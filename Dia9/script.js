document.getElementById("entrada").addEventListener('input', () =>{
    
    let input = document.getElementById("entrada").value

let muestra = document.getElementById("muestra")
    fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
        .then(res => res.json())
        .then(pokemon => {
            console.log(pokemon.name);

            muestra.innerHTML =`
            ${pokemon.id}
            ${pokemon.name}
            <img src="${pokemon.sprite.other.showdown.front_default}>`


            
        })
})