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
let url = `https://66df33d9de4426916ee3e13d.mockapi.io/LiveUser`



class buscar extends HTMLElement{
    constructor(){
        super();
        fetch(url)
        .then(res => res.json())
        .then(data => {
            data.forEach(persona => {



        this.innerHTML +=
        `
        <mi-user class="usuario1">
            <div class="bordeImagen">
                <img src="${persona.avatar}" class="imagen">
            </div>
            <mis-datos>
                <p class="nombre">${persona.name_full}</p>
                <p class="descripcion">${persona.description}</p>
            </mis-datos>
        </mi-user>`

            });
        });
    }
}


customElements.define("mi-usuario1",buscar)


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

class crear extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `<mi-todo></mi-todo>
        <mi-usuario1></mi-usuario1>`
    }
}
customElements.define("mi-muestra",crear)
            
            
        

    

    
        
















