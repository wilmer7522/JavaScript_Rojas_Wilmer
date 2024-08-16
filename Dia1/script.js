//Ejercicio 1

const año = 2024
function nacimiento(edad) {
    console.log("naciste en el año ",año-edad);
    

    
}

nacimiento(17)


//ejercicio 2

function temperatura(celcius) {
    farhenheit = (9*celcius/5)+32

    return farhenheit;
    
}
let celcius = 37;
console.log("La temperatura es", temperatura(celcius),"°");

//ejercicio 3

function descuentos(cliente) {
    if (cliente <=20){
        console.log("tiene el 30% de descuento");
        
    }
    else if (cliente >20 & cliente <=50){
        console.log("cliente tiene 10% de descuento");
        
    }
    else
    console.log("cliente no tiene descuento");
    
}

descuentos(50)



