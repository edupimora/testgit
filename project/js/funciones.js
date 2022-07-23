var variableGlobal=5 // la podemos usar en cualquier funcion o lugar

function showMessgge(){

    var variableLocal ="local" // solo la podemos usa en la funcion

    console.log("Aca llamo una funcion con variable"+ " "+ variableLocal);

}

showMessgge();

function calculadora(a,b){
 
return(a+b)
}
console.log(calculadora(3,6));

function proximoFila(arr, elem){

    arr.push(elem);
    return(arr.shift())
}
var arreglo= [1,2,3,4,5,6]
console.log("Antes "+ JSON.stringify(arreglo))
var prueba = proximoFila(arreglo, 7)
console.log(prueba)
console.log("Despues "+ JSON.stringify(arreglo))


console.log(9==9)// true
console.log(9=="9") // true

console.log(9==="9")// False

console.log(9 != 9)// False

var x = 5;

if (x>6){
console.log("la condicion es verdadera");

} else{
    console.log("La condicion es falsa");
}


function clasificacion(valor){

    if (valor<5){
        consolole.log("Menor que 5");

    } else if(valor <10){
        console.log("menor que 10");
    } else {
        console.log("Mayor o iigual a 10")
    }

}
clasificacion(9);


function clasificar(valor){
    var respuesta;
    switch(valor)
    {
        case 1:
            respuesta ="alpha";
            break;
        case 2:
            respuesta="beta";
            break;
        case 3:
            respuesta ="gamma";
            break;

    }
    return respuesta;
}

console.log(clasificar(2));

function raiz(num){
    if  (num < 0){
        return undefined;
    }

    return Math.sqrt(num);

}