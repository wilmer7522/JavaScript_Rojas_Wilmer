function superD(x,y){
    let suma = "";
    let sumat = 0
for (let i = 0; i < y; i++){
    suma +=x
}
console.log(suma);


for (i of suma){
    console.log(i);
    sumat+= Number(i)

}
console.log("Resultado",sumat);


sumat = String(sumat)


let suma2 = 0
for (a of sumat){
    console.log(a);
    suma2+= Number(a)
    
}
console.log("Resultado",suma2);


suma2 = String(suma2)
let suma3 = 0;
for (b of suma2){
    console.log(b);
    suma3+= Number(b);
    
}

console.log("super Digito", suma3);


}
var numero1 = prompt("ingrese el mumero");
var numero2 = prompt("ingrese la cantidad de repeticiones del numero")
superD(numero1,numero2)












