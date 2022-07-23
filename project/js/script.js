console.log('holaaaaa')
// comentario 
var nombreCompleto = "Jhon"+"\teduard";
console.log(nombreCompleto);
var verbo="Programar";
var mensaje ="Estoy aprendiendo "+ " "+ verbo;
console.log(mensaje);

var cadena;
cadena="a b c";
console.log(cadena.length);

var cadenaCaracteres ="JavaScript";

console.log(cadenaCaracteres[3]);//caracter numero 3

// Inmutabilidad de cadenas

console.log(cadenaCaracteres[cadenaCaracteres.length-2]);


//ARRAYS

var miArreglo =["Eduard", 24];

var Estudiantes=["Jhon", "Camilo", "Laura" ];
var notas=[1,2,3];


var listaEstuiantes=[["Jhon",97, "cod1"],["camilo",1,"cod2"],["Laura", 1, "cod3"]];
console.log(listaEstuiantes);
console.log(listaEstuiantes[1]);
console.log(listaEstuiantes[1][2]); // Filas  columnas

Estudiantes[0]="Eduard"
console.log(Estudiantes[0]);

listaEstuiantes.push(["vale",2,"cod4"]) // Metodo .push = agrega elemento al final del array
console.log(listaEstuiantes[3])

listaEstuiantes.pop(listaEstuiantes); // Metodo .pop = remueve ultimo elemento del array
console.log(listaEstuiantes)

listaEstuiantes.shift(); // Metodo . shift = remueve al principio del array
console.log(listaEstuiantes)

listaEstuiantes.unshift(["vale",2,"cod4"]); //Metodo .unshift = agrega elemento al inicio del array
console.log(listaEstuiantes)



