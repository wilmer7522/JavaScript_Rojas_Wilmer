document.getElementById("buscar").addEventListener("input", () => {
    buscarPersonaje();
});

document.getElementById("siguiente").addEventListener("click", () => {
    let buscar = document.getElementById("buscar");
    buscar.value = parseInt(buscar.value) + 1;
    buscarPersonaje();
});

document.getElementById("atras").addEventListener("click", () => {
    let buscar = document.getElementById("buscar");
    buscar.value = parseInt(buscar.value) - 1;
    buscarPersonaje();
});

function buscarPersonaje() {
    let ver = document.getElementById("output");
    let buscar = parseInt(document.getElementById("buscar").value);

    fetch(`https://api.disneyapi.dev/character/` + buscar)
        .then(res => res.json())
        .then(Datos => {
            ver.innerHTML = `
                <tr><p id="Id">${Datos.data._id}</p></tr>
                <tr><p id="nombre">${Datos.data.name}</p></tr>
                <br><tr><p id="movie">Películas: ${Datos.data.films}</p>
                <br><td><p id="fecha">Creado: ${Datos.data.createdAt}</p>
                <br><td><p id="game">Videojuegos: ${Datos.data.videoGames}</p>
                <td><img id="imagen" src="${Datos.data.imageUrl}"><br>
                <br><td><p id="short"> Short Films: ${Datos.data.shortFilms}
            `;
        })
        .catch(error => {
            ver.innerHTML = `<p>Error al obtener los datos.</p>`;
            console.error("Error:", error);
        });
}
