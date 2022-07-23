//contact() - junta dos o mas cadenas y retorna una nueva
//startsWith() - si una cadena comienza con los caracteres de otra cedena,
    //devuelve true, sino devuelve fasle.
//endsWith() - si una cadena termina.......||
//includes() - si una cadena puede encontrarse dentro de otra cadena, true, else false
//indesx0f() - devuelve el indice del primer caracter de la cadena, else return -1
//lastIndex0f() - devuelve el ultimo indice....

//padStart() 

let cadena ="Cadena de Prueba";
let cadena2="cadena,de,prueba"

resultado =cadena.concat(" hola");
document.write(resultado);
resultado= cadena.startsWith(cadena2);
document.write("<br>"+resultado);

resultado =cadena.includes("de");
document.write("<br>"+resultado);

resultado=cadena.indexOf("de");// devuelve en que posicion esta la cadena, el ultimo de todos
document.write("<br>"+resultado);

resultado=cadena.lastIndexOf("na");//devuelve la posicion del primero que coincida
document.write("<br>"+resultado);

resultado=cadena.padStart(20,"1");//rellena la cadena hasta completar los caracteres
document.write("<br>"+resultado);

resultado=cadena2.split(",");//divide la cadena cuando encuentra una, y forma un array
document.write("<br>"+resultado[1]);

resultado=cadena.substring(0,8);
document.write("<br>"+resultado)

resultado=cadena.toLowerCase();//Todo a minuscula
document.write("<br>"+resultado)

resultado=cadena.toUpperCase();//todo a mayuscula
document.write("<br>"+resultado)


let nombres =["eduard","laura","vale"];
resultado = nombres.pop();//Saca el ultimo elemento del array
document.write("<br>"+resultado)

resultado = nombres.shift(); //Elimina el primero

resultado =nombres.push("valentina","Isa");//agrega el elemento a la cadena ultima posicion
document.write("<br> "+resultado + " "+nombres);

resultado=nombres.reverse();//invierte el orden del array
document.write("<br>"+ nombres)

resultado=nombres.unshift("Alba");//Agrega al inicio del array
document.write("<br>"+nombres);

let numeros = [7,6,5,4,3,2,1];
resultado=numeros.sort();//Ordena el array
document.write("<br>"+numeros);

resultado=numeros.splice(1,2," remplazo ");//apartir de posicion 1 elimine 2 elementos
document.write("<br>"+numeros);

let numeros1 = [5,4,3,2,1,0];
resultado=nombres.join("<br>Elemento: ");//agrega a la cadena separadores
document.write("<br>elemento "+resultado);


resultado = numeros1.slice(1,4);//me uestra desde el numero1 hasta el numero 4
document.write("<br>"+resultado);

document.write("<br>"+nombres)
resultado = nombres.filter(nombres=> nombres.length >4)
    document.write("<br>"+resultado);//es un bucle, en cada ciclo muestra
// el valor de la posicion respectiva del ciclo

