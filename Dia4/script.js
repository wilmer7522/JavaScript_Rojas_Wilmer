let Data =  `{
    "informacion_personal": {
    "nombre": "Juan Pérez",
    "edad": 30,
    "direccion": {
    "calle": "Calle Principal",
    "numero": 123,
    "ciudad": "Ciudad Ejemplo"
    },
    "contacto": {
    "correo": "juan.perez@example.com",
    "telefono": "+123456789"
    }
    },
    "historial_educativo": [
    {
    "nivel": "Secundaria",
    "institucion": "Instituto Secundario",
    "anio_inicio": 2000,
    "anio_fin": 2005
    },
    {
    "nivel": "Universidad",
    "institucion": "Universidad Ejemplar",
    "titulo": "Licenciatura en Ciencias",
    "anio_inicio": 2006,
    "anio_fin": 2010
    }
    ],
    "experiencia_laboral": [
    {
    "puesto": "Desarrollador de Software",
    "empresa": "Tech Solutions",
    "periodo": "2010-2015",
    "responsabilidades": [
    "Desarrollo de aplicaciones web",
    "Mantenimiento de bases de datos"
    ]
    },
    {
    "puesto": "Gerente de Proyectos",
    "empresa": "Proyectos Avanzados",
    "periodo": "2016-actualidad",
    "responsabilidades": [
    "Planificación y supervisión de proyectos",
    "Coordinación de equipos"
    ]
    }
    ]
    }`;


function menu(){
    let seleccion = Number(prompt("(1).Ver \n(2).Modificar  \n(3).Eliminar  \n(4).Agregar \n(5).Salir"))

    switch(seleccion){
        case 1:
            ver(Data);
            break;
        case 2:
            modificar(Data);
            break;
        case 3:
            console.log(eliminar(Data));
            break;
            case 4:
            console.log("Actualizar");
            break;
        case 5:
            bool=false;
            console.clear()
            break;
        default:
        console.log("Opción no válida");
        bool=false;
        break;

        

        }
        return bool;
        }
        menu();
    
                                
var bool=true;
while(bool===true){
    menu();
}



//Ver informacion
    function ver(Data) {

        let jsonD =JSON.parse(Data);
        let  nombre = jsonD.informacion_personal.nombre;
        let  edad = jsonD.informacion_personal.edad;
        let  calle = jsonD.informacion_personal.direccion.calle;
        let  numero = jsonD.informacion_personal.direccion.numero;
        let  ciudad = jsonD.informacion_personal.direccion.ciudad;
        let  contacto = jsonD.informacion_personal.contacto.correo;
        let telefono =  jsonD.informacion_personal.contacto.telefono;

        let nivel = jsonD.historial_educativo[0].nivel;
        let institucion = jsonD.historial_educativo[0].institucion;
        let anio_inicio = jsonD.historial_educativo[0].anio_inicio;
        let anio_fin = jsonD.historial_educativo[0].anio_fin;

        let nivel2 = jsonD.historial_educativo[1].nivel;
        let institucion2 = jsonD.historial_educativo[1].institucion;
        let anio_inicio2 = jsonD.historial_educativo[1].anio_inicio;
        let anio_fin2 = jsonD.historial_educativo[1].anio_fin;

       

        
        
        let puesto2 = jsonD.experiencia_laboral[1].puesto;
        let empresa2 = jsonD.experiencia_laboral[1].empresa;
        let periodo2 = jsonD.experiencia_laboral[1].periodo;
        let responsabilidades2 = jsonD.experiencia_laboral[1].responsabilidades;



        console.log(`|--------Información Personal--------|`);
        console.log(`Nombre: ${nombre}`);
        console.log(`Edad: ${edad}`);
        console.log(`Calle: ${calle}`);
        console.log(`Numero: ${numero}`);
        console.log(`Ciudad: ${ciudad}`);
        console.log(`|---------------Contacto-----------------|`);
        console.log(`Correo: ${contacto}`);
        console.log(`Telefono: ${telefono}`);
        console.log(`|------------------Historial Educativo------------------|`);
        console.log(`Nivel: ${nivel}`);
        console.log(`Institución: ${institucion}`);
        console.log(`Año Inicio: ${anio_inicio}`);
        console.log(`Año Fin: ${anio_fin}`);
        console.log(`Nivel: ${nivel2}`);
        console.log(`Institución: ${institucion2}`);
        console.log(`Año Inicio: ${anio_inicio2}`);
        console.log(`Año Fin: ${anio_fin2}`);
        console.log(`|------------------Experiencia Laboral------------------|`);
        for (const i of jsonD["experiencia_laboral"]){
            console.log(`Puesto: ${i.puesto}`);
            console.log(`Empresa: ${i.empresa}`);
            console.log(`Periodo: ${i.periodo}`);
            for (const a of i["responsabilidades"]){

                console.log(`Responsabilidades: ${a}`);
            
            }
            
            
            
            
        }
        
        



    
    
    }
//Modificar Informacion
    function calle(Data){
        let callemodif  = prompt(`Ingrese la nueva direccion`);
    let jsonD =JSON.parse(Data);
    jsonD.informacion_personal.direccion.calle = callemodif;
    
    console.log(`Direccion Modificada:  ${JSON.stringify(jsonD, null, 2)}`);
    return JSON.stringify(jsonD, null, 2);
    }


    function telefono(Data){
        let telefmodif  = prompt(`Ingrese el nuevo numero de telefono`);
    
    let jsonD =JSON.parse(Data);
    jsonD.informacion_personal.contacto.telefono = telefmodif;
    
    console.log(`Direccion Modificada:  ${JSON.stringify(jsonD, null, 2)}`);
    return JSON.stringify(jsonD, null, 2);
    }




    function modificar(Data) {

        let modif = JSON.parse(Data);
        let opcion = Number(prompt(`(1).Direccion \n(2).Telefono  \n(3).Correo \n(4).Menu Principal`))
        switch (opcion) {
            case 1:
                
                //calle(Data)
                console.log(calle(Data));
                
                break;
            case 2:
                    //telefono(Data)
                console.log(telefono(Data));

                break;
            case 3:
                let correo  = prompt(`Ingrese el nuevo correo`);
                modif.correo = correo;
                console.log(`Correo Modificado:  ${modif.correo}`);
                break;
            case 4:
                menu();
                break;
            default:
                console.log(`Opcion Invalida`);
                break;

                
        }
    }

    //Eliminar Informacion
    function eliminar(Data) {
        let  jsonD = JSON.parse(Data);
        //let opcion = Number(prompt(`(1).Direccion \n(2).Telefono  \n`));
        delete jsonD.informacion_personal.direccion.calle;
        console.log(JSON.stringify(jsonD, null, 2));
        return  JSON.stringify(jsonD, null, 2);
    }

    
    