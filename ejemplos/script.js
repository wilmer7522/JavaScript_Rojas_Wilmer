document.getElementById("boton1").addEventListener("click",soyfuncion);
document.getElementById("boton2").addEventListener("click",soyJson);

function soyfuncion() {
    fetch('prueba.txt')//hace una solicitud al servidor de un archivo "texto.txt"
    .then(res => res.text())//se lee la respuesta como tecto plano, lo cual devolvera el archivo como una cadena llamado "data"
    .then (data => {// se dara manejo a data mediante imprimiendolo en consola
        console.log(data);
        document.getElementById("salida").innerHTML=data
        
    })
    .catch(err =>{
        console.log("error");
        document.getElementById("salida").innerHTML=err
        
    })
    
}

function soyJson() {
    fetch('texto.json')//hace una solicitud al servidor de un archivo "texto.txt"
    .then(res => res.json())//se lee la respuesta como tecto plano, lo cual devolvera el archivo como una cadena llamado "data"
    .then (data => {// se dara manejo a data mediante imprimiendolo en consola
        console.log(data);
        for (i in data){
            document.getElementById("salida").innerHTML += 
            `<h2>nombre: ${data[i]["name"]}
            <h1>Cargo: ${data[i]["cargo"]}`
        }
        


}
)
}