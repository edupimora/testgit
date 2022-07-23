
//OBTENCION Y MODIFICACION DE HIJOS
const contenedor =document.querySelector(".contenedor");

const primerHijo =contenedor.firstChild;//toma lo primero que encuentra
const ultimo = contenedor.lastChild;// en este caso es el espacio el hijo
const sinEspacio =contenedor.lastElementChild;
const todos= contenedor.childNodes;
const hijos=contenedor.children;

// console.log(primerHijo);
// console.log(ultimo);
// console.log(sinEspacio);
// console.log(todos);
// console.log(hijos);

//metodos CHILD

const parrafo = document.createElement("P").innerHTML="Parrafo";
const h2_N = document.createElement("H2");


h2_N.innerHTML = "Titulo cambiado";

const h2_A = document.querySelector(".h2");

//contenedor.replaceChild(h2_N,h2_A)

//contenedor.removeChild(h2_A)

let respuesta=contenedor.hasChildNodes();//muestra si el node tiene hijo


//PADRES

console.log(h2_A.parentElement);

//Hermanos  -siblings
console.log(h2_A.nextSibling);
//previosSiblinng, nextElementSibling, previousElementSiblings

//////////////////////////////////////
const div =document.querySelector(".div2");

//console.log(div.closest(".div"))