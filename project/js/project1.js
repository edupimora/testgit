/*
Tenemos un objeto que representa partede unacoleccion
de albumes musicales.
cada albun tiene  un numero de identificacion unico (id)
no todos los albumes tienen la informacion completa

*/

var coleccion={
    7893:{titulo:"Bee gees", artista:"bee",canciones:["stayin, alive"]},
    5439:{titulo:"ABBA gold"}
}

/*
Define una funcion actualizar que tome losd siguientes parametros:
discos
id
propiedad
valor

tu meta es completar la funcion implementando las siguientes reglas 
para modificar el objeto pasado a la funcion:

-si "valor" es una cadena vacia, elimina la propiedad de album correspondiente.

-si "propiedad " es igual a la cadena de caracteres "canciones" y "valor no e suna cadena vacia, 
agrega "valor" al final del arreglo de canciones del album correspondiente

-si " valor" no es una cadena vacia y "propieda"  no es igual a "canciones", asigna el valor del parametro
"valor" a la propiedad.si la propiedad no existe debes crearla y asignar este valor.
*/

function actualizacion(discos,id,propiedad,valor){

if (valor ===""){
    delete discos[id][propiedad]
}else if (propiedad === "canciones"){
    discos[id][propiedad]=discos[id][propiedad]||[];
    discos[id][propiedad].push(valor);

}else {
    discos[id][propiedad]=valor;
}

} 
 console.log(coleccion[7893].titulo);
 actualizacion(coleccion,7893,"titulo","");
 console.log(coleccion[7893].titulo);

 console.log(coleccion[5439].artista);
 actualizacion(coleccion,5439,"artista","ABBA");
 console.log(coleccion[5439].artista);


 