fetch("datos.json")
    .then(Informacion => Informacion.json())
    .then(Datos => {

        const p0 = document.getElementById("p0");
        const p1 = document.getElementById("p1");
        const bloque3 = document.getElementById("tres");
        const cuatro = document.getElementById("cuatro")
        document.getElementById("botonEstado").style.display = `none`;
        document.getElementById("fechaOrden").style.display = `none`;
        document.getElementById("botonProducto").style.display = `none`;
        document.getElementById("delivered").style.display = `none`;
        document.getElementById("notDelivered").style.display = `none`;



        /*eliminarProducto.addEventListener("click", (e) => {
            produ = prompt("eliminar")
            deleteProduct(produ)
        })*/


        boton1.addEventListener("click", (e) => {
            document.getElementById("verProducto").style.display = `block`;
            document.getElementById("btnActualizarProducto").style.display = `block`;
        });

        boton2.addEventListener("click", (e) => {
            document.getElementById("botonEstado").style.display = `block`;
            document.getElementById("fechaOrden").style.display = `block`;
            document.getElementById("botonProducto").style.display = `block`;

        });

        botonEstado.addEventListener("click", (e) => {
            document.getElementById("delivered").style.display = `block`;
            document.getElementById("notDelivered").style.display = `block`;
            document.getElementById("fechaOrden").style.display = `none`;
            document.getElementById("botonProducto").style.display = `none`;
        });

        delivered.addEventListener("click", (e) => {
            filterOrders()
        });

        notDelivered.addEventListener("click", (e) => {
            filterOrdersNot()
        });

        fechaOrden.addEventListener("click", (e) => {
            document.getElementById("botonEstado").style.display = `none`;
            document.getElementById("botonProducto").style.display = `none`;
            document.getElementById("inputDate").style.display = "block";
            document.getElementById("botonBuscarFecha").style.display = `block`;


        });
        //Filtrar Fecha
        botonBuscarFecha.addEventListener("click", (e) => {
            let fecha = document.getElementById("inputDate").value
            filterOrdersDate(fecha)
        });

        botonBuscarProducto.addEventListener("click", (e) => {
            let buscarProducto = document.getElementById("inputBuscarProducto").value
            searchProducts(buscarProducto)
        })

        botonProducto.addEventListener("click", (e) => {

            //document.getElementById("botonEstado").style.display = `none`;
            //document.getElementById("fechaOrden").style.display = `none`;
            document.getElementById("botonBuscarProducto").style.display = `block`;
            document.getElementById("inputBuscarProducto").style.display = `block`;

        })

        verProducto.addEventListener("click", (e) => {

            viewProducts()
        })



        function date() {
            const mesActual = new Date();
            const meses = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
            console.log(`${mesActual.getDate()}-${meses[mesActual.getMonth()]}-${mesActual.getFullYear()}`);



        }
        //date()






        //PRODUCTOS


        //Agregar Productos
        function addProduct() {
            viewProducts()

            /*for (let i of Datos.products){
                if ( === i["id"]){
                    bloque3.innerHTML += `<br>Id: ${i["id"]}  `
                    bloque3.innerHTML += `<br>Name: ${i["name"]}`
                    bloque3.innerHTML += `<br>Category: ${i["category"]}`
                    bloque3.innerHTML += `<br>Price: ${i["price"]}`
                    bloque3.innerHTML += `<br>Quantity: ${i["quantityInStock"]}`
                    bloque3.innerHTML += `<br>Supplier Id: ${i["supplierId"]}<br>`
                    bloque3.innerHTML += `<br>¿Qué deseas actualizar? <br>`
                    bloque3.innerHTML += `<button id="actualizarNombre">Nombre</button>`

                }
                else {
                    bloque3.innerHTML += `Producto no encontrado`
                }
                }*/





        }


        //Leer Productos
        function viewProducts() {
            bloque3.innerHTML = ""
            for (let i of Datos.products) {
                bloque3.innerHTML += `<br>Id: ${i["id"]}  `
                bloque3.innerHTML += `<br>Name: ${i["name"]}`
                bloque3.innerHTML += `<br>Category: ${i["category"]}`
                bloque3.innerHTML += `<br>Price: ${i["price"]}`
                bloque3.innerHTML += `<br>Quantity: ${i["quantityInStock"]}`
                bloque3.innerHTML += `<br>Supplier Id: ${i["supplierId"]}<br>`

            }

        }

        //Actualizar Productos


        btnActualizarProducto.addEventListener("click", (e) => {
            document.getElementById("actualizarProducto").style.display = `block`
            document.getElementById("botonActualizarProducto").style.display = `block`
        });


        botonActualizarProducto.addEventListener("click", (e) => {
            let id = parseInt(document.getElementById("actualizarProducto").value);
            updateProduct(id)
            
            /*let nombre = document.getElementById("nombre").value
            let categoria = document.getElementById("categoria").value
            let precio = document.getElementById("precio").value
            let cantidad = document.getElementById("cantidad").value
            let proveedor = document.getElementById("proveedor").value*/
        })




        function updateProduct(id) {
            let encon = false;
            for (let i of Datos.products){
                if (i["id"] === id){

                    bloque3.innerHTML += `<br>Id: ${i["id"]}  `
                    bloque3.innerHTML += `<br>Name: ${i["name"]}`
                    bloque3.innerHTML += `<br>Category: ${i["category"]}`
                    bloque3.innerHTML += `<br>Price: ${i["price"]}`
                    bloque3.innerHTML += `<br>Quantity: ${i["quantityInStock"]}`
                    bloque3.innerHTML += `<br>Supplier Id: ${i["supplierId"]}<br>`
                    cuatro.innerHTML = "<br><br><h2>Elija el campo a modificar"
                    encon = true;
                } 

                    
            }
            if (encon===false){
                bloque3.innerHTML = ("No encontrado");
        }
        Datos.products.find(i => i.id ===  id).name = "nuevo"


    }
                
        

        

        //Eliminar Productos
        function deleteProduct(produ) {
            produ = prompt("ingrese id a eliminar")
            Datos.products = Datos.products.filter(a => a.id !== produ)



        }

        //PROVEEDORES

        //Agregar Proveedores
        function addSupplier(supplier) {

        }

        //Leer proveedores
        function viewSuppliers() {

        }

        //Actualizar Proveedores
        function updateSupplier(id, newDetails) {

        }

        //Eliminar proveedores
        function deleteSupplier(id) {

        }

        //ORDENES

        //Agregar Ordenes
        function addOrder(order) {

        }

        //Leer Ordenes
        function viewOrders() {

        }

        //Actualizar Ordenes
        function updateOrder(orderId, newDetails) {

        }

        //Eliminar Ordenes
        function deleteOrder(orderId) {

        }

        //STOCK

        //Verificar Stock
        function checkStockLevels() {

        }

        //Agregar Stock
        function restockProduct(id, quantity) {

        }

        //REPORTES

        //Reporte de Ventas Generales
        function generateSalesReport(startDate, endDate) {

        }

        //Generar Reportes de Inventario
        function generateInventoryReport() {

        }

        //BUSCAR y FILTRAR
        //Buscar Productos
        function searchProducts(buscarProducto) {

            p0.textContent = "|----Products----|"
            bloque3.innerHTML = ""

            for (let i of Datos.products) {
                console.log(i);
                
                if (i["name"] === "Laptop") {
                    bloque3.innerHTML += `<br>Id: ${i["id"]}  `
                    bloque3.innerHTML += `<br>Name: ${i["name"]}`
                    bloque3.innerHTML += `<br>Category: ${i["category"]}`
                    bloque3.innerHTML += `<br>Price: ${i["price"]}`
                    bloque3.innerHTML += `<br>Quantity: ${i["quantityInStock"]}`
                    bloque3.innerHTML += `<br>Supplier Id: ${i["supplierId"]}<br>`
                } else {
                    bloque3.innerHTML = "<br>Producto no encontrado"
                }



            }

        }




        //Filtrar Ordenes
        function filterOrders() {
            p1.textContent = "|----Order----|"
            bloque3.innerHTML = ""

            for (let i of Datos.orders) {
                if (i["status"] === "Delivered") {
                    bloque3.innerHTML += `<br><br>Order Id: ${i["orderId"]}  `
                    bloque3.innerHTML += `<br>Product Id: ${i["productId"]}`
                    bloque3.innerHTML += `<br>Quantity: ${i["quantity"]}`
                    bloque3.innerHTML += `<br>Order Date: ${i["orderDate"]}`
                    bloque3.innerHTML += `<br>Status: ${i["status"]}`
                }




            }

        }
        function filterOrdersNot() {
            p1.textContent = "|----Order----|"
            bloque3.innerHTML = ""

            for (let i of Datos.orders) {
                if (i["status"] === "Not Delivered") {
                    bloque3.innerHTML += `<br><br>Order Id: ${i["orderId"]}  `
                    bloque3.innerHTML += `<br>Product Id: ${i["productId"]}`
                    bloque3.innerHTML += `<br>Quantity: ${i["quantity"]}`
                    bloque3.innerHTML += `<br>Order Date: ${i["orderDate"]}`
                    bloque3.innerHTML += `<br>Status: ${i["status"]}`
                }




            }
        }


        // Datos.orders.filter(i=>i.orderDate=== fecha){}

        function filterOrdersDate(fecha) {
            let encontrado = false;
            bloque3.innerHTML = ""
            
            for (let i of Datos.orders) {
                if (i["orderDate"] === fecha) {
                    bloque3.innerHTML += `<br><br>Order Id: ${i["orderId"]}  `
                    bloque3.innerHTML += `<br>Product Id: ${i["productId"]}`
                    bloque3.innerHTML += `<br>Quantity: ${i["quantity"]}`
                    bloque3.innerHTML += `<br>Order Date: ${i["orderDate"]}`
                    bloque3.innerHTML += `<br>Status: ${i["status"]}`;
                    encontrado = true;
                }  
                    

            }
            if (encontrado===false){
                bloque3.innerHTML = ("Fecha no encontrada");
        }
    }



    })




