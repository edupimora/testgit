var contactos=[
{
    "nombre":"Nora",
    "apellido":"Nav",
    "numero":"123456",
    "gustos":["Pizza","arroz"]
},
{
    "nombre":"Harry",
    "apellido":"Potter",
    "numero":"67890",
    "gustos":["Pan","sopa"]
},
{
    "nombre":"sherlock",
    "apellido":"holmes",
    "numero":"2468",
    "gustos":["carne","maiz"]
}

]

function buscarElemnto(nombre, propiedad){
    
    for(var i=0;i<contactos.length;i++){

            if(contactos[i].nombre===nombre){

                return contactos[i][propiedad]||"La propiedad no existe";            

        }
    }

    return "El contacto no esta en la lista.";


}

// console.log(buscarElemnto("Nora","gustos"));


function factorAleatorio(){
    return Math.random();
}

// console.log(factorAleatorio());
// console.log(Math.floor(Math.random()*10))

function generarAleatorio(infe, superior){

return Math.floor(Math.random()*(superior-infe+1))+infe;
}

console.log(generarAleatorio(10,15));

console.log(parseInt("5.2"));// convierte strings a numeros enteros
console.log(parseInt(110101,2));
console.log(parseInt("10AE",16));

function minimo(x,y){
    return x == y ? x
    : x<y ? x : y;// pregunta si la condicion se cumple retorna x, sino, pregnta de nuevo 
}
console.log(minimo(4,8));


var campista ="Jhon";// con var se puede declarar la misma variable varias veces
let campistas ="Eduard";// solo se puede declarar la variable una vez, see debe solo modificar su contenido



var mostrarColor=true;

if(mostrarColor){
    let color ="verde";
    console.log("Mi color es: "+color);
}

//console.log(color);   //Aca muestra error por que la variable solo se puede usar en el bloque donde
                    //fue declarada, el bloque if.

const miconstante =35; // no se podra modificar esta variable

// CREAR UN OBJETO INMUTABLE

let colores ={

    "azul":"#1b50e0",
    "verde":"#10e04b",
    "negro":"#000000"
};
Object.freeze(colores);

////////////////////////////

//FUNCIONES FLECHA

const fecha=function(){
    return new Date();
};

const fecha2 = () => new Date();


const sumar = (x) => x+3; // function(x){ return x+3; };

console.log(sumar(4));


const concatenar=(arr1,arre2) => arr1.concat(arre2);

console.log(concatenar([1,2],[3,4]));

////////////////////////////// OPERADOR REST(...) = no es necesario especificar el numero de argumentos

function miFuntion(...args){

console.log(args);

}

miFuntion(1,2,3,[4,5,6],7);


const Sumar =(...s) =>{
//const s =[x,y,z];
return s.reduce((a,b)=>a+b,0);
};

////////////////////////// OPERADOR SPREAD . descompone el arreglo en sus componentes principales

const numeros=[1,2,3];

const sumar1 = (x,y,z)=> x+y+z;

console.log(sumar1(...numeros));


////////////////7 desestructuracion

const usuario={
    nombre:"Eduard",
    edad:28
}

//const nombre = usuario.nombre;
//const edad = usuario.edad;

const {nombre, edad}=usuario;


const coordenadas={
    x:3,
    y:6,
    z:9
}

const{x,y,z}=coordenadas;
console.log(x);
console.log(y);
console.log(z);


////////// DESESTRUCTURACION

const usu= {
    jhon:{
        anos:28,
        correo:"eduminora"

    }

};

const {jhon:{anos:edadUsuario,correo}}=usu;
console.log(edadUsuario);

//////////////////////////////

var a,b;
[a,b]=[1,2];


var nuevoCliente={
    nombre:"Eduard",
    edad:28,
    ubicacion:"Alemania"
};

const actualizacion =({nombre,edad,ubicacion}) =>{
    //const{nombre,edad,ubicacion}=info;
    console.log(nombre,"\n",edad,ubicacion);
};

actualizacion(nuevoCliente);
//actualizacion("andrea",26,"alaska");

//////////
var a =6;

console.log(`el valor de a es ${a}`)
