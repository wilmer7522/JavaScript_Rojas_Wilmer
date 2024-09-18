let url = `https://www.datos.gov.co/resource/x8g3-nn2c.json`



let buscar = document.getElementById("buscar")


class busqueda extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <header>
            <h1>Sistema de Multas</h1>
            <p>Buscar por Placa</p>
            <input type="text" placeholder="buscar"/>
        </header>
        `
    }
}
customElements.define("mi-barra", busqueda)





fetch(url)
    .then(res => res.json())
    .then(data => {

        class crear extends HTMLElement {
            constructor() {
                super();

                data.forEach(lote => {

                    this.innerHTML +=
                        `
                    <div  class="container text-center">
                        <div class="row">
                            <div class="col placa">
                                <p>${lote.placa}</p>
                            </div>
                            <div class="col vigencia">
                                <p>${lote.vigencia}</p>
                            </div>
                            <div class="col fecha_multa">
                                <p>${lote.fecha_multa}</p>
                            </div>
                            <div class="col valor_multa">
                                <p>${lote.valor_multa}</p>
                            </div>
                            <div class="col ciudad">
                                <p>${lote.ciudad}</p>
                            </div>
                            <div class="col pagado">
                                <p>${lote.pagado_si_no}</p>
                            </div>
                        </div>
                    
                    </div>
                    `



                });

            }

        }
        customElements.define('mis-datos', crear)

    })