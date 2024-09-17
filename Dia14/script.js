class crearBoton extends HTMLElement{
    constructor(){
        super();
        this.textContent = '!Has click aqui'
        this.addEventListener('click', ()=> alert('Hiciste click'))
    }
}

customElements.define('mi-boton',crearBoton);


//===========================================

//Creacion de un elemento personalizable (ShadowDom)


class crearBotonShadow extends HTMLElement{
    constructor(){
        super();
        let miShadow = this.attachShadow({mode:'open'});
        miShadow.innerHTML =`
        <mi-boton></mi-boton>
        <button>Soy un boton lindo</button>`
    }
}

customElements.define('boton-shadow', crearBotonShadow)
