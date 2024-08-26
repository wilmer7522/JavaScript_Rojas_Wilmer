fetch("datos.json")
    .then(Informacion => Informacion.json())
    .then(Datos => {

        const p0 = document.getElementById("p0");
        const p1 = document.getElementById("p1");
        const bloque3 = document.getElementById("tres");
        //const fecha = document.getElementById("inputDate")
        document.getElementById("botonOrdenes1").style.display = `none`;
        document.getElementById("botonOrdenes2").style.display = `none`;
        document.getElementById("botonOrdenes3").style.display = `none`;
        document.getElementById("delivered").style.display = `none`;
        document.getElementById("notDelivered").style.display = `none`;
        document.getElementById("inputDate").style.display = `none`;

        eliminarProducto.addEventListener("click", (e) => {
            produ = prompt("eliminar")
            deleteProduct(produ)
        })





        boton1.addEventListener("click", (e) => {
            searchProducts()
        });

        boton2.addEventListener("click", (e) => {
            document.getElementById("botonOrdenes1").style.display = `block`;
            document.getElementById("botonOrdenes2").style.display = `block`;
            document.getElementById("botonOrdenes3").style.display = `block`;

        });

        botonOrdenes1.addEventListener("click", (e) => {
            document.getElementById("delivered").style.display = `block`;
            document.getElementById("notDelivered").style.display = `block`;
            document.getElementById("botonOrdenes2").style.display = `none`;
            document.getElementById("botonOrdenes3").style.display = `none`;
        });

        delivered.addEventListener("click", (e) => {
            filterOrders()
        });

        notDelivered.addEventListener("click", (e) => {
            filterOrdersNot()
        });

        botonOrdenes2.addEventListener("click", (e) => {
            document.getElementById("botonOrdenes1").style.display = `none`;
            document.getElementById("botonOrdenes3").style.display = `none`;
            document.getElementById("inputDate").style.display = `block`;
            let fecha = prompt("fghjrg")
            filterOrdersDate(fecha)
        });
        botonOrdenes3.addEventListener("click", (e) => {
            document.getElementById("botonOrdenes1").style.display = `none`;
            document.getElementById("botonOrdenes2").style.display = `none`;
        })

        verProducto.addEventListener("click", (e) => {
            viewProducts()
        })

        ActualizarProducto.addEventListener("click", (e) => {
            addProduct(actualizarPro)
        })

        function date() {
            const mesActual = new Date();
            const meses = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
            console.log(`${mesActual.getDate()}-${meses[mesActual.getMonth()]}-${mesActual.getFullYear()}`);



        }
        //date()


        for (let i = 0; i < 10; i = i + 2){
            console.log(i);
            
        }

        console.log(`|---- SEVEN ELEVEN ----|`);




        //PRODUCTOS


        //Agregar Productos
        function addProduct(actualizarPro) {
            viewProducts()
            actualizarPro = prompt("ingresa el id a actualizar")
            for (let i of Datos.products){
                if (actualizarPro === i["id"]){
                bloque3.innerHTML += `<br>Id: ${i["id"]}  `
                bloque3.innerHTML += `<br>Name: ${i["name"]}`
                bloque3.innerHTML += `<br>Category: ${i["category"]}`
                bloque3.innerHTML += `<br>Price: ${i["price"]}`
                bloque3.innerHTML += `<br>Quantity: ${i["quantityInStock"]}`
                bloque3.innerHTML += `<br>Supplier Id: ${i["supplierId"]}<br>`

                }
                else {
                    bloque3.innerHTML = "id no encontrado"
                }

        }


        //Leer Productos
        function viewProducts() {
            for (let i of Datos.products){
                bloque3.innerHTML += `<br>Id: ${i["id"]}  `
                bloque3.innerHTML += `<br>Name: ${i["name"]}`
                bloque3.innerHTML += `<br>Category: ${i["category"]}`
                bloque3.innerHTML += `<br>Price: ${i["price"]}`
                bloque3.innerHTML += `<br>Quantity: ${i["quantityInStock"]}`
                bloque3.innerHTML += `<br>Supplier Id: ${i["supplierId"]}<br>`

            }

        }

        //Actualizar Productos
        function updateProduct(id, newDetails) {

        }

        //Eliminar Productos
        function deleteProduct(produ) {
            
            Datos.products = Datos.products.filter(a => a.id===produ)
            
            

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
        function searchProducts() {
            //bloque3.innerHTML = ""
            p0.textContent = "|----Products----|"

            for (let i of Datos.products) {
                bloque3.innerHTML += `<br>Id: ${i["id"]}  `
                bloque3.innerHTML += `<br>Name: ${i["name"]}`
                bloque3.innerHTML += `<br>Category: ${i["category"]}`
                bloque3.innerHTML += `<br>Price: ${i["price"]}`
                bloque3.innerHTML += `<br>Quantity: ${i["quantityInStock"]}`
                bloque3.innerHTML += `<br>Supplier Id: ${i["supplierId"]}<br>`


            }

        }




        //Filtrar Ordenes
        function filterOrders() {

            //bloqueStatus.innerHTML = ""
            p1.textContent = "|----Order----|"

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
            p1.textContent = "|----Date----|"
            let cont = 0
            for (let i of Datos.orders) {
                if (i["orderDate"] === fecha) {
                    bloque3.innerHTML += `<br><br>Order Id: ${i["orderId"]}  `
                    bloque3.innerHTML += `<br>Product Id: ${i["productId"]}`
                    bloque3.innerHTML += `<br>Quantity: ${i["quantity"]}`
                    bloque3.innerHTML += `<br>Order Date: ${i["orderDate"]}`
                    bloque3.innerHTML += `<br>Status: ${i["status"]}`;
                    cont = 1
                }

                


            }
            if (cont === 0){
                bloque3.innerHTML = ("no encontrado")
            }
        }



    })




