document.getElementById("boton").addEventListener("click", () => {
    let input = document.getElementById("input").value

    url = `https://swapi.py4e.com/api/people/${input}`

    const cuerpo = document.getElementById("cuerpo")
    

    fetch(url)
        .then(res => res.json())
        .then(data => {

            console.log(data.name)
            cuerpo.innerHTML = `

                    <tr><th>Name</th><td>${data.name}</td><tr>
                    <tr><th>Height</th><td>${data.height}</td></tr>
                    <tr><th>Mass</th><td>${data.mass}</td></tr>
                    <tr><th>Hair Color</th><td>${data.hair_color}</td></tr>
                    <tr><th>Skin Color</th><td>${data.skin_color}</td></tr>
                    <tr><th>Eye Color</th><td>${data.eye_color}</td></tr>
                    <tr><th>Birth Year</th><td>${data.birth_year}</td></tr>
                    <tr><th>Gender</th><td>${data.gender}</td></tr>
                    
                    <tr><th>HomeWorld</th><td><div id="Home">
                    </div></td><tr>

                    <tr><th>Films</th><td><div id="peli"></div></td></tr>

                    <tr><th>Species</th><td><div id="spe"></div></td></tr>
                    <tr><th>Vehicles</th><td><div id="vehi"></div></td></tr>
                    `
            fetch(data.homeworld)
            .then(res => res.json())
            .then(home =>{
                
                let EscribirMundo = document.getElementById("Home");

                EscribirMundo.innerHTML = `
                    <ul class="list-group">
                        <li class="list-group-item">Name: ${home.name}</li>
                        <li class="list-group-item">Rotation Period: ${home.rotation_period}</li>
                        <li class="list-group-item">Orbital Period: ${home.orbital_period}</li>
                        <li class="list-group-item">Diameter: ${home.diameter}</li>
                        <li class="list-group-item">Climate: ${home.climate}</li>
                        <li class="list-group-item">Gravity: ${home.gravity}</li>
                        <li class="list-group-item">Terrain: ${home.terrain}</li>
                        <li class="list-group-item">Surface Water: ${home.surface_water}</li>
                        <li class="list-group-item">Population: ${home.population}</li>
                        <li class="list-group-item">Residents: ${home.residents}</li>
                        <li class="list-group-item">Films: ${home.films}</li>
                        <li class="list-group-item">Created: ${home.created}</li>
                        <li class="list-group-item">Edited: ${home.edited}</li>
                        <li class="list-group-item">Url: ${home.url}</li>
                    </ul>
                `
                
            })

            data.films.forEach(Peliculotas => {
                
                fetch(Peliculotas)
                .then(res => res.json())
                .then(film =>{

                    const peli = document.getElementById("peli")
                    peli.innerHTML += `                             
                                <tr><th><td>
                                <ul class="list-group">
                                <li class="list-group-item">Title: ${film.title}</li>
                                <li class="list-group-item">Episodie Id: ${film.episode_id}</li>
                                <li class="list-group-item">Opening Crawl: ${film.opening_crawl}</li>
                                <li class="list-group-item">Director: ${film.director}</li>
                                <li class="list-group-item">Producer: ${film.producer}</li>
                                <li class="list-group-item">Release Date: ${film.release_date}</li>
                                <li class="list-group-item">Characters: ${film.characters}</li>
                                </ul></td></th><tr>`
                })
            });

            const especies = data.species
            fetch(especies)
            .then(res => res.json())
            .then(especie => {
                

                const spe = document.getElementById("spe")

                spe.innerHTML += `                                
                <tr><th><td>
                <ul class="list-group">
                <li class="list-group-item">Name: ${especie.name}</li>
                <li class="list-group-item">Clasification: ${especie.classification}</li>
                <li class="list-group-item">Designation: ${especie.designation}</li>
                <li class="list-group-item">Average Heght: ${especie.average_height}</li>
                <li class="list-group-item">Skin  Colors: ${especie.skin_colors}</li>
                <li class="list-group-item"> Hair Colors: ${especie.hair_colors}</li>
                <li class="list-group-item"> Eye Colors: ${especie.eye_colors}</li>
                <li class="list-group-item"> Average Lifespan: ${especie.average_lifespan}</li>
                <li class="list-group-item">  Homeworld: ${especie.homeworld}</li>
                <li class="list-group-item">  Language: ${especie.language}</li>
                <li class="list-group-item"> People: ${especie.people}</li>
                <li class="list-group-item">Films: ${especie.films}</li>
                <li class="list-group-item">Created: ${especie.created}</li>
                <li class="list-group-item">Edited: ${especie.edited}</li>
                <li class="list-group-item">Url: ${especie.url}</li>
                </ul></td></th><tr>`
                

        })


        const vehiculos = data.vehicles
        vehiculos.forEach(carros => {
            fetch(carros)
            .then(res => res.json())
            .then(vehiculo => {
                

                const vehi = document.getElementById("vehi")



                vehi.innerHTML  += `
                <tr><th><td>
                <ul class="list-group">
                <li class="list-group-item">Name: ${vehiculo.name}</li>
                <li class="list-group-item">Model: ${vehiculo.model}</li>
                <li class="list-group-item">Vehicle Class: ${vehiculo.vehicle_class}</li>
                <li class="list-group-item">Manufacturer: ${vehiculo.manufacturer}</li>
                <li class="list-group-item">Cost in Credits: ${vehiculo.cost_in_credits}</li>
                <li class="list-group-item">Length: ${vehiculo.length}</li>
                <li class="list-group-item">Max Atmosphering Speed: ${vehiculo.max_atmosphering_speed}</li>
                <li class="list-group-item">Crew: ${vehiculo.crew}</li>
                <li class="list-group-item">Passengers: ${vehiculo.passengers}</li>
                <li class="list-group-item">Cargo Capacity: ${vehiculo.cargo_capacity}</li>
                <li class="list-group-item">Consumables: ${vehiculo.consumables}</li>
                <li class="list-group-item">Vehicles Class: ${vehiculo.vehicles_class}</li>
                <li class="list-group-item">Pilots: ${vehiculo.pilots}</li>
                <li class="list-group-item">Films: ${vehiculo.films}</li>
                <li class="list-group-item">Created: ${vehiculo.created}</li>
                <li class="list-group-item">Edited: ${vehiculo.edited}</li>
                <li class="list-group-item">Url: ${vehiculo.url}</li>
                </ul></td></th></tr>
                
                `


            })
        })

            
            

        })
        
})