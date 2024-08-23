fetch("datos.json")
    .then(Informacion => Informacion.json())
    .then(Datos => {
        console.log(Datos);
        

        function date() {
            const mesActual = new Date();
            const meses = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
            console.log(`${mesActual.getDate()}-${meses[mesActual.getMonth()]}-${mesActual.getFullYear()}`);
            
            
            
        }
        date()
        
                                                                    //PRODUCTOS
        
        
        //Agregar Productos
        function addProduct(product){
            
        }
        
        
        //Leer Productos
        function viewProducts(){
        
        }
        
        //Actualizar Productos
        function updateProduct(id, newDetails){
        
        }
        
        //Eliminar Productos
        function deleteProduct(id){
        
        }
        
                                                                //PROVEEDORES
        
        //Agregar Proveedores
        function addSupplier(supplier){
        
        }
        
        //Leer proveedores
        function viewSuppliers(){
        
        }
        
        //Actualizar Proveedores
        function updateSupplier(id, newDetails){
        
        }
        
        //Eliminar proveedores
        function deleteSupplier(id){
        
        }
        
                                                            //ORDENES
        
        //Agregar Ordenes
        function addOrder(order){
        
        }
        
        //Leer Ordenes
        function viewOrders(){
        
        }
        
        //Actualizar Ordenes
        function updateOrder(orderId, newDetails){
        
        }
        
        //Eliminar Ordenes
        function deleteOrder(orderId){
        
        }
        
                                                        //STOCK
        
        //Verificar Stock
        function checkStockLevels(){
        
        }
        
        //Agregar Stock
        function restockProduct(id, quantity){
        
        }
        
                                                                //REPORTES
        
        //Reporte de Ventas Generales
        function generateSalesReport(startDate, endDate){
        
        }
        
        //Generar Reportes de Inventario
        function generateInventoryReport(){
        
        }
        
                                                                            //BUSCAR y FILTRAR
        //Buscar Productos
        function searchProducts(query){
            for (i of Datos){
                
                console.log(i);
                

            }
        }
        searchProducts(query)
        
        //Filtrar Ordenes
        function filterOrders(criteria){
        
        }

    })




