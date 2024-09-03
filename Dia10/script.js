//let url = `https://api.disneyapi.dev/character/`

document.getElementById("boton").addEventListener("click", () => {
    let ver = document.getElementById("output")

    let buscar = document.getElementById("buscar").value

    console.log(buscar);
    

fetch(`https://api.disneyapi.dev/character/${buscar}`)
    .then(res => res.json())
    .then(Datos => {

        ver.innerHTML = `
        <td><p id = "nombre">${Datos.data.name}</p>
        <br><td><p id = "movie">Películas: ${Datos.data.films}</p>
        <br><td><p id = "fecha">Creado: ${Datos.data.createdAt}</p>
        <br><td><p id = "game">Videojuegos: ${Datos.data.videoGames}</p>
        <td><img id="imagen" src= "${Datos.data.imageUrl}"><br>
        <br> <td><p id = "short"> Short Films: ${Datos.data.shortFilms}
    `

        
    })
}) 


