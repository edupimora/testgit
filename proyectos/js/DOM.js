// ELEMENT_NODE 1
// ATTRIBUTE_NODE 2
// TEXT_NODE 3
// ENTITY_REFERENCE_NODE 5
// ENTITY_NODE 6
// PROCESSING_INSTRUCCION_NODE 7
// COMMENT_NODE 8
// DOCUMENT_NODE 9   
// DOCUMENT_TYPE_NODE 10

parrafo= document.getElementById("contenido");//asi se selecciona un objeto
document.write(parrafo);
parrafo =document.getElementsByTagName("p");
//document.write(parrafo)
parrafo =document.querySelector(".parrafo")//. para seeccionar  clases
persona =document.querySelector("#lara")//# para seeccionar  un ID

const rangoEtario=document.querySelector(".rangoEtario")

//document.write(rangoEtario);
rangoEtario.setAttribute("type","text");// Lo que queremos modificar, nuevo valor


document.write(rangoEtario.getAttribute("type"));//Toma el valor del atributo
rangoEtario.removeAttribute("type");//Remueve el atributo


 ////////////ATRIBUTOS GLOBALES
 //class - lista de clases
 //dir - indica la direccionalidad del texto
 //hidden - inidica si el elemento aun no es o ya no es relevante
 //id - define un identificador unico
 //style - contiene delcaraciones de estilo CSS para el elemento
 //tabindex - indica si el elemnto puede obtener un focus de input
 //title - contiene texto de informacion


 const titulo= document.querySelector(".titulo");

 titulo.setAttribute("contentEditable","true");
 titulo.setAttribute("dir","rtl");//left to rigth - se hace desde CSS
 titulo.setAttribute("hidden","false");
 titulo.removeAttribute("hidden");

const tit =document.querySelector(".tit");
 tit.setAttribute("tabindex","1")//permite dejar seleccionar con tabulador 
 //y asigna el orden de tabulacion (1,2,3)
 tit.setAttribute("title","jajajaja")// muestra un label donde ponemos el mouse