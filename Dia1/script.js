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


//Funcion Parametro sin retorno

var num1 = 2
var num2 = 8

function suma(num1,num2){
    console.log(num1+num2);
    
}

suma(num1,num2)

//Funcion Parametro con retorno


function resta(x,y) {
    total = x-y
    
    return total

}

let num10 = 10
let num20 = 5

console.log(resta(num10,num20));


//Funcion Sin Parametro Con Retorno

function multi() {
    totalM = 6*2
    return totalM
}

console.log(multi());


//Funcion sin Parametro sin Retorno

const saludo = "hola profe"
function string() {
    console.log(saludo);
    
}

string()







