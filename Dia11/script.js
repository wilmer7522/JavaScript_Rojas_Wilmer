let url = 'https://randomuser.me/api/'

let imagen = document.querySelector(".imagenPerfil")


fetch(url)
    .then(res => res.json())
    .then(Data => {

        console.log(Data.results[0].name.title);

        imagen.src = Data.results[0].picture.large

        /*<div class="perfil"><img src="${Data}" class="imagen"></div>
        <p>Hi, My Name is</p>

        <span>${Data.results[0].name.title}</span>*/
        
        

        
    })