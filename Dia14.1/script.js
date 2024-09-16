document.addEventListener("DOMContentLoaded", ()=> {

    
    class cabecera extends HTMLElement{
        constructor(){
            super();
            this.innerHTML = `
            
            <header>
                <h1>Live User Filter</h1>
                <p>Search by name</p>
                <input type="text" id="busqueda" placeholder="Search">
            </header>
            `
        }
    }
    customElements.define("mi-todo",cabecera)

    document.getElementById("busqueda").focus();
let busqueda = document.getElementById("busqueda").value
let todo = document.getElementById("usuario1")

class buscar extends HTMLElement{
    constructor(){
        super();
        fetch(url)
        .then(res => res.json())
        .then(data => {
            data.forEach(persona => {



        this.innerHTML +=
        `
        <mi-user>
            <div class="bordeImagen">
                <img src="${persona.avatar}" class="imagen">
            </div>
            <div class="datos">
                <p class="nombre">${persona.name_full}</p>
                <p class="descripcion">${persona.description}</p>
            </div>
        </mi-user>`
    });
    document.getElementById("busqueda").addEventListener("input", e => {
        if (e.target.matches("#busqueda")) {
            document.querySelectorAll(".usuario1").forEach(usuario => {
                let nombre = usuario.querySelector(".nombre").textContent.toLocaleLowerCase();
                let busqueda  = e.target.value.toLocaleLowerCase();
                nombre.includes(busqueda)
           // usuario.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
            ?usuario.classList.remove("filtro")
            :usuario.classList.add("filtro");
                
    
            }); 
        };
    });

});


    }
}
customElements.define("mi-usuario1",buscar)


let url = `https://66df33d9de4426916ee3e13d.mockapi.io/LiveUser`


    


                


            });
            
            
        

    

    
        
















