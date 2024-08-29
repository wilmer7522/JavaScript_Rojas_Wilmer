fetch("datos.json")
    .then(Informacion => Informacion.json())
    .then(Datos => {

        const p0 = document.getElementById("p0");
        const p1 = document.getElementById("p1");
        const bloque3 = document.getElementById("tres");
        const cuatro = document.getElementById("cuatro")
        const thId = document.getElementById("thId")
        const thNombre = document.getElementById("thNombre")
        const thCategoria = document.getElementById("thCategoria")
        const thPrecio = document.getElementById("thPrecio")
        const thCantidad = document.getElementById("thCantidad")
        const thProveedor = document.getElementById("thProveedor")
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
            document.getElementById("addProducto").style.display = `block`;
            document.getElementById("btnActualizarProducto").style.display = `block`;
            document.getElementById("eliminarProducto").style.display = `block`;
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

        addProducto.addEventListener("click", (e) => {
            document.getElementById("inputId").style.display =  "block";
            document.getElementById("inputNombre").style.display =  "block";
            document.getElementById("inputCategoria").style.display =  "block";
            document.getElementById("inputPrecio").style.display =  "block";
            document.getElementById("inputCantidad").style.display =  "block";
            document.getElementById("inputProveedor").style.display =  "block";
            document.getElementById("agregar").style.display =  "block";
            for (i of Datos.products){
                bloque3.innerHTML += `<br><h2>${i.id} ${i.name}</h2> 
                ${i.category}
                ${i.price}
                ${i.quantityInStock}
                ${i.supplierId}`
                }


            
        })

        agregar.addEventListener("click", (e) => {
            
            let newId = parseInt(document.getElementById("inputId").value);
            let newNombre = document.getElementById("inputNombre").value
            let newCategoria = document.getElementById("inputCategoria").value
            let newPrecio = document.getElementById("inputPrecio").value
            let newCantidad = document.getElementById("inputCantidad").value
            let newProveedor = document.getElementById("inputProveedor").value
            addProduct(newId,newNombre,newCategoria,newPrecio,newCantidad,newProveedor)
            document.getElementById("inputId").style.display =  "none";
            document.getElementById("inputNombre").style.display =  "none";
            document.getElementById("inputCategoria").style.display =  "none";
            document.getElementById("inputPrecio").style.display =  "none";
            document.getElementById("inputCantidad").style.display =  "none";
            document.getElementById("inputProveedor").style.display =  "none";
            document.getElementById("agregar").style.display =  "none";
            
        })




        function addProduct(newId,newNombre,newCategoria,newPrecio,newCantidad,newProveedor) {
            

            Datos.products.push({
                "id": newId,
                "name": newNombre,
                "category": newCategoria,
                "price": newPrecio,
                "quantityInStock": newCantidad,
                "supplierId": newProveedor
            })
            bloque3.innerHTML = "Producto Agregado"


            

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
        
        const tabla = document.querySelector('#tablaProductos tbody');

        //Leer Productos
        function viewProducts() {
            tabla.innerHTML = ""
            Datos.products.forEach(i => {
                const row = document.createElement('tr');
                row.innerHTML += `<td>${i.id}
                <td>${i.name}
                <td>${i.category}
                <td>${i.price}
                <td>${i.quantityInStock}
                <td>${i.supplierId}`;

                tabla.appendChild(row);
            });
            /*for (let i of Datos.products) {
                thId.innerHTML += `<br> ${i["id"]}<br>  `
                thNombre.innerHTML += `<br> ${i["name"]}<br>`
                thCategoria.innerHTML += `<br> ${i["category"]}<br>`
                thPrecio.innerHTML += `<br> ${i["price"]}<br>`
                thCantidad.innerHTML += `<br>${i["quantityInStock"]}<br>`
                thProveedor.innerHTML += `<br>${i["supplierId"]}<br>`


            }*/
            
            



        }

        //Actualizar Productos


        btnActualizarProducto.addEventListener("click", (e) => {
            document.getElementById("actualizarProducto").style.display = `block`
            document.getElementById("botonActualizarProducto").style.display = `block`
        });


        botonActualizarProducto.addEventListener("click", (e) => {
            let id = parseInt(document.getElementById("actualizarProducto").value);
            updateProduct(id)
            document.getElementById("actualizarProducto").style.display = `none`
            document.getElementById("botonActualizarProducto").style.display = `none`
            document.getElementById("actualizarProductoNew").style.display = `block`
            document.getElementById("botonActualizarProductoNew").style.display = `block`
            cuatro.innerHTML = "<br><center><h2>Modificar Precio"
           // document.getElementById("opcionActualizar").style.display = `block`
           // document.getElementById("bOpcionA").style.display = `block`


            //document.getElementById("actualizarProductoNew").style.display = `block`
            //document.getElementById("botonActualizarProductoNew").style.display = `block`

            /*let nombre = document.getElementById("nombre").value
            let categoria = document.getElementById("categoria").value
            let precio = document.getElementById("precio").value
            let cantidad = document.getElementById("cantidad").value
            let proveedor = document.getElementById("proveedor").value*/
        })

        /*bOpcionA.addEventListener("click", (e) => {
            document.getElementById("actualizarProductoNew").style.display = `block`
            document.getElementById("botonActualizarProductoNew").style.display = `block`
            document.getElementById("opcionActualizar").style.display = `none`
            document.getElementById("bOpcionA").style.display = `none`
        })*/

        






        function updateProduct(id) {
            let encon = false;
            bloque3.innerHTML = ""
            for (let i of Datos.products){
                if (i["id"] === id){

                    bloque3.innerHTML += `<br>Id: ${i["id"]}  `
                    bloque3.innerHTML += `<br>Name: ${i["name"]}`
                    bloque3.innerHTML += `<br>Category: ${i["category"]}`
                    bloque3.innerHTML += `<br>Price: ${i["price"]}`
                    bloque3.innerHTML += `<br>Quantity: ${i["quantityInStock"]}`
                    bloque3.innerHTML += `<br>Supplier Id: ${i["supplierId"]}<br>`
                    
                    encon = true;
                    
                    
                    botonActualizarProductoNew.addEventListener("click", (e) => {
                        cuatro.innerHTML = "<br><center><h2>Precio Modificado"
                        let nuevo = parseInt(document.getElementById("actualizarProductoNew").value);
                        i.price = nuevo
                        updateProduct(id)
                    })                           
                        
                    

                    
                    
                } 
                


                    
            }
            if (encon===false){
                bloque3.innerHTML = ("No encontrado");

        }
        //Datos.products.find(i => i.id ===  id).name = "mouse"
        //console.log(Datos.products);
        


    }
                
        

        

        //Eliminar Productos
        eliminarProducto.addEventListener("click", (e) => {
            
            document.getElementById("inputEliminarProducto").style.display = "block"
            document.getElementById("botonEliminarProducto").style.display = "block"
            
        })

        inputEliminarProducto.addEventListener("click", (e) => {
            //let produ = parseInt(document.getElementById("inputEliminarProducto").value);
            console.log(produ);
            
            deleteProduct(produ)
            console.log(produ);
            
        })

        function deleteProduct() {
            Datos.products = Datos.products.filter(a => a.id == 1)

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
        botonBuscarProducto.addEventListener("click", (e) => {
            let buscarProducto = document.getElementById("inputBuscarProducto").value;
            searchProducts(buscarProducto)
            
        });



        function searchProducts(buscarProducto) {
            let encontrado = false;
            bloque3.innerHTML = ""

            for (let i of Datos.products) {
                console.log(`hola: ${i} ${buscarProducto}`);
                
                if (i["name"] === buscarProducto) {
                    bloque3.innerHTML += `<br>Id: ${i["id"]}  `
                    bloque3.innerHTML += `<br>Name: ${i["name"]}`
                    bloque3.innerHTML += `<br>Category: ${i["category"]}`
                    bloque3.innerHTML += `<br>Price: ${i["price"]}`
                    bloque3.innerHTML += `<br>Quantity: ${i["quantityInStock"]}`
                    bloque3.innerHTML += `<br>Supplier Id: ${i["supplierId"]}<br>`
                    encontrado = true;
                }



            }
            if (!encontrado) {
                bloque3.innerHTML = "No se encontraron resultados"
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

         //Filtrar Fecha
         botonBuscarFecha.addEventListener("click", (e) => {
            let fecha = document.getElementById("inputDate").value
            filterOrdersDate(fecha)
        });

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




