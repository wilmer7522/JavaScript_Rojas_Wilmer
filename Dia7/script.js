

document.getElementById("botonBuscar").addEventListener('click', ()  => {
    let buscarId = document.getElementById("buscarId").value;
    
    let Url = ""
    Url = `https://superheroapi.com/api.php/55c7e797ed9fe799a27af7c20e0c3dd7/`+String(buscarId);

fetch(Url)
.then(res => res.json())
.then(Data => {
    console.log(Data);
    
    const tabla = document.querySelector('#tablaProductos tbody');
    
    function verHeroes(){
        tabla.innerHTML = ""
        
    
            const row = document.createElement('tr')
            row.innerHTML = `<td>${Data.id}
            <td>${Data.name}
            <td>${Data.powerstats.intelligence}
            <td>${Data.powerstats.strength}
            <td>${Data.powerstats.strength}
            <td>${Data.powerstats.speed}
            <td>${Data.powerstats.durability}
            <td>${Data.powerstats.combat}

            <td>${Data.biography.aliases.map(i => i).join("<br>")}
            <td>${Data.biography["place-of-birth"]}
            <td>${Data.biography["first-appearance"]}
            <td>${Data.biography.publisher}
            <td>${Data.appearance.gender}
            <td>${Data.appearance.race}
            <td>${Data.appearance.height.map(i => i).join("<br>")}
            <td>${Data.appearance.weight.map(i => i).join("<br>")}
            <td>${Data.appearance["eye-color"]}
            <td>${Data.appearance["hair-color"]}
            <td>${Data.work.occupation}
            <td><img src="${Data.image["url"]}" width="150">`


            tabla.appendChild(row);
    }
    verHeroes();
    
}

)
.catch(error => {
    console.error("Error", error);
    
});

})





