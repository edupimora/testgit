const contenedor=document.querySelector(".flex-container");
const boton =document.querySelector(".send-button");//las siguientes tres lineas las ahorramos sustituyendo en 
let valorA=boton.value;                             //el HTML el valor por "COMPRAR"
boton.value=valorA.toUpperCase(); 


let contador =0;

function crearLlave(nombre,modelo,precio){
    contador++;
    img="<img class= 'llave1' src='llave.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return[img,nombre,modelo,precio];
}


//document.write(llave[0],llave[1],[llave[2]]);


let documentFragment=document.createDocumentFragment();// creamos el documento donde va a estar cada div

for (let i = 1; i <= 20; i++) {
    
    let modeloRandon=Math.round(Math.random()*10000);
    let precioRandon =Math.round(Math.random()*10+30);
    
    const llave = crearLlave(`llave${i}`,`modelo ${modeloRandon}`,precioRandon);//creamos el objeto
    let div=document.createElement("DIV");//creamos el elemento div para cada llave

    div.addEventListener("click",()=>{//creamos el evento para guardar el modelo
        
        document.querySelector(".key-data").value =modeloRandon;//le asignamos al elemento  el valor igual al modelo


    });
    div.tabIndex=i;//permite que cada item sea seleccionado y tabulado
    div.classList.add(`item-${i}`,`flex-item`)//agregamos a el div dos clases una invidual y otra general

    div.innerHTML = llave[0]+llave[1]+llave[2]+llave[3];//agregamos al div el codigo HTML

    documentFragment.appendChild(div);//agregamos al documeno el div creado
    
    
}
contenedor.appendChild(documentFragment);//agregamos al documento general, el documento con todos los div