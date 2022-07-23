

const contenedor =document.querySelector(".contenedor");

const item=document.createElement("LI");
//document.write(item);

//console.log(item);
const textDeItem = document.createTextNode("Este es un Item");
//console.log(textDeItem);

//item.innerHTML="Esta es otra forma de meter el item"; PERO NO ES UN OBJETO
// NO TENDRIA LAS MISMAS PROPIEDADES QUE UN NODE

//console.log(item);

item.appendChild(textDeItem);
console.log(item);

contenedor.appendChild(item)

const frangmentto=document.createDocumentFragment();
for(i=0; i<20;i++){
    const item=document.createElement("LI");
    item.innerHTML="Item de la lista";
    frangmentto.appendChild(item);

}

contenedor.appendChild(frangmentto)
