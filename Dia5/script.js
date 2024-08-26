fetch("datos.json")
    .then(Informacion => Informacion.json())
    .then(Datos => {

        const p0 = document.getElementById("p0");
        const bloque3 =  document.getElementById("tres");

        

        boton1.addEventListener("click", (e) => {
            
            searchProducts()
        })


        function date() {
            const mesActual = new Date();
            const meses = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
            console.log(`${mesActual.getDate()}-${meses[mesActual.getMonth()]}-${mesActual.getFullYear()}`);



        }
        //date()

        console.log(`|---- SEVEN ELEVEN ----|`);




        //PRODUCTOS


        //Agregar Productos
        function addProduct(product) {

        }


        //Leer Productos
        function viewProducts() {

        }

        //Actualizar Productos
        function updateProduct(id, newDetails) {

        }

        //Eliminar Productos
        function deleteProduct(id) {

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
            cont = 1
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
        
        //searchProducts()


        //Filtrar Ordenes
        function filterOrders(criteria) {
            for (let i in Datos.orders) {
                console.log(`Status: ${Datos.orders[i].status}`);

            }

        }
        //filterOrders()


    })




