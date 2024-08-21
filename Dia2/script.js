



let info = `[
    {
        "inscripciones": [
            {
                "id": 1,
                "nombre": "alexander",
                "apellido": "rojas",
                "identificacion": 123654789,
                "direccion": "Poli Deportivo",
                "acudiente": "no tiene",
                "telefono_celular": 963963,
                "telefono_fijo": 369369,
                "estado": [
                    {
                        "ingreso": "Inscrito",
                        "evaluacion": "Inscrito"
                    }
                ],
                "Promedio": 85.0,
                "rutaEntrenamiento": "ruta Java",
                "horario": "10:00 - 14:00",
                "riesgo": "Bajo",
                "trainer": "Jholver Pardo",
                "fecha_inicio": "20",
                "fecha_finalizacion": "30",
                "areaEntrenamiento": "Artemis",
                "promedioGeneral": 0.0
            },
            {
                "id": 2,
                "nombre": "Wilmer",
                "apellido": "rojas",
                "identificacion": 123654789,
                "direccion": "Delicias",
                "acudiente": "no tiene",
                "telefono_celular": 963963,
                "telefono_fijo": 369369,
                "estado": [
                    {
                        "ingreso": "Inscrito",
                        "evaluacion": "Inscrito"
                    }
                ],
                "Promedio": 75.0,
                "rutaEntrenamiento": "ruta NodeJS",
                "horario": "6:00 - 10:00",
                "riesgo": "Bajo",
                "trainer": "Miguel Angel Castillo",
                "fecha_inicio": "10-05",
                "fecha_finalizacion": "2004",
                "areaEntrenamiento": "Sputnik",
                "promedioGeneral": 0.0
            }
        ]
    
    }
]`;

const nuevaRutas = `[
    {
        "rutasNuevas": [
            {
                "idRuta": 1,
                "nombre": "postal",
                "modulos": {
                    "Fundamentos de programacion": "Introduccion a la algoritmia, PSeInt y Python",
                    "Programacion Web": "HTML, CSS y Bootstrap",
                    "Programacion formal": "JavaScript",
                    "Bases de datos": {
                        "SGDB principal": "Mysql",
                        "SGDB alternativo": "MongoDb"
                    },
                    "Backend": "Spring Boot"
                }
            },
            {
                "idRuta": 2,
                "nombre": "telefono",
                "modulos": {
                    "Fundamentos de programacion": "Introduccion a la algoritmia, PSeInt y Python",
                    "Programacion Web": "HTML, CSS y Bootstrap",
                    "Programacion formal": "Java",
                    "Bases de datos": {
                        "SGDB principal": "Mysql",
                        "SGDB alternativo": "Postgresql"
                    },
                    "Backend": "NetCore"
                }
            },
            {
                "idRuta": 3,
                "nombre": "roca",
                "modulos": {
                    "Fundamentos de programacion": "Introduccion a la algoritmia, PSeInt y Python",
                    "Programacion Web": "HTML, CSS y Bootstrap",
                    "Programacion formal": "C#",
                    "Bases de datos": {
                        "SGDB principal": "Mysql",
                        "SGDB alternativo": "MongoDb"
                    },
                    "Backend": "NodeJS"
                }
            }
        ]}]`;

        function prueba(info){
            //console.log(typeof info);
            let jsonData = JSON.parse(info)
            //console.log(typeof jsonData);
            //const camp = jsonData.filter(
            //   (estudiante) => estudiante.inscripciones );

            let inscripciones = jsonData[0].inscripciones;
            console.log(inscripciones, null, 2);
            

           /* inscripciones.push({"id": 3,
            "nombre": "felipe",
            "apellido": "Murcia",
            "identificacion": 123654789,
            "direccion": "Delicias",
            "acudiente": "no tiene",
            "telefono_celular": 963963,
            "telefono_fijo": 369369,
            "estado": [
                {
                    "ingreso": "Inscrito",
                    "evaluacion": "Inscrito"
                }
            ],
            "Promedio": 75.0,
            "rutaEntrenamiento": "ruta NodeJS",
            "horario": "6:00 - 10:00",
            "riesgo": "Bajo",
            "trainer": "Miguel Angel Castillo",
            "fecha_inicio": "10-05",
            "fecha_finalizacion": "2004",
            "areaEntrenamiento": "Sputnik",
            "promedioGeneral": 0.0});

            /*info = JSON.stringify(jsonData)
            console.log(info);
            /*console.log(jsonData);
            console.log(camp);*/


            return JSON.stringify(jsonData, null, 2);

        }

        info = prueba(info);
        console.log(info);
        

        function guardar(info){
            let jsonData = JSON.parse(info);
            let inscripciones = jsonData[0].inscripciones;
            var nombre = prompt("ingrese nombre");
            var apellido = prompt("Ingrese Apellido");
            var identificacion = prompt("Ingrese Identificación");

            let inscripciones = JSON.push(nombre, apellido, identificacion)
        }

        function verCamper(info) {
            for (const camper of info){
                for (const i of camper["inscripciones"]){
                    console.log(i["id"], i["nombre"], i["estado"][0]["ingreso"], i["estado"][0]["evaluacion"]);
                    
                } 
                
                
            }
        }

        function procesar_inscripcion(info) {
            var ultimo_id = 0
            for (const inscripcion of info){
                for (const i of inscripcion["inscripciones"]){
                    if (i["id"] in inscripcion && inscripcion["id"] > ultimo_id){
                        ultimo_id = inscripcion["id"]
                    }
                }
            }

            campers = ultimo_id + 1;
            var nombre = prompt("ingrese Nombre");
            var apellido = prompt("Ingrese Apellido");
            var identificacion = prompt("Ingrese Identificación");

            console.log(campers);
            console.log(nombre);
            console.log(apellido);
            console.log(identificacion);
        }
        
        
        
        
        



var seleccion = Number(prompt("ingrese su Eleccion"))
    switch (seleccion) {
        case 1:
            verCamper(info);
            break;

        case 2:
            procesar_inscripcion(info);
            

            break;

        case 3:
            prueba(info);
            break;

        case 4:
            guardar(info)
            break;
    
        default:
            break;
    };




/*function procesar_inscripcion(info){
    var ultimo_id = 0;

    for (var inscripcion = 0; inscripcion < 3; inscripcion++) info[0]["inscripciones"];{

    
        if ("id") inscripcion & inscripcion["id"] > ultimo_id{
            ultimo_id = inscripcion["id"]
        }
            

    campers = ultimo_id + 1
    
    var nombre = prompt("Ingrese los nombres del camper: ")
    apellido = input("Ingrese los apellidos del camper: ")
    identificacion = int(input("Ingrese el número de identificación del camper: "))
    direccion = input("Ingrese la dirección del camper: ")
    acudiente = input("Ingrese el nombre del acudiente: ")
    telefonoCelular = int(input("Ingrese el número de celular del camper: "))
    telefonoFijo = int(input("Ingrese un teléfono fijo del camper: "))
    valor = int(input("Ingrese el estado del camper\n1. En proceso de ingreso\n2. Inscrito\n"))
    if valor == 1:
        ingreso = "En proceso de inscripcion"
    else if valor == 2:
        ingreso = "Inscrito"
    else:
        print("")
        print("opción invalida intente de nuevo")
    };
            
        
    #Guarda los datos ingresados anteriormente
    camper[0]["inscripciones"].append(  
        {
        
            "id": campers,                    
            "nombre": nombre,
            "apellido": apellido,
            "identificacion": identificacion,
            "direccion": direccion,
            "acudiente": acudiente,
            "telefono_celular": telefonoCelular,
            "telefono_fijo": telefonoFijo,
            "estado": [
                {
                    "ingreso": ingreso
                    
                }],
                
                "Promedio": 0,
                "rutaEntrenamiento": "",
                "horario": "",
                "riesgo": "",
                "trainer": "",
                "promedioGeneral": 0
                
        }                  
        
    )
    guardarArchivo(camper)
    print("Guardado con éxito.")
}*/





