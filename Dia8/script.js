document.getElementById("boton").addEventListener("click", () => {
    let input = document.getElementById("input").value

    url = `https://swapi.py4e.com/api/people/${input}`

    
    const body = document.getElementById("tablaPeople")

    const column = document.createElement("tbody")


    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.mass);
            
            column.innerHTML = `
            <tr><th>Name</th><td>${data.name}</td><tr>
            <tr><th>Height</th><td>${data.height}</td></tr>
            <tr><th>Mass</th><td>${data.mass}</td></tr>
            <tr><th>Hair Color</th><td>${data.hair_color}</td></tr>
            <tr><th>Skin Color</th><td>${data.skin_color}</td></tr>
            <tr><th>Eye Color</th><td>${data.eye_color}</td></tr>
            <tr><th>Birth Year</th><td>${data.birth_year}</td></tr>
            <tr><th>Gender</th><td>${data.gender}</td></tr>
            <tr><th>HomeWorld</th><td>


            <ul class="list-group"><li class="list-group-item">${data.films}</li></ul></td><tr>
            `
            body.appendChild(column)
            
        })

})