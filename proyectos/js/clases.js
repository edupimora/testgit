const clas=document.querySelector(".clas");
clas.classList.add("grande");
//clas.classList.remove("grande")
document.write(clas.classList.item(1));//aca miramos el item de la clase
document.write(clas.classList.contains("item"));//inspecciona si esta incluisa
clas.classList.toggle("verificar");//Si esta la elimina, sino la agrega

const mod =document.querySelector(".mod");

let resultado =mod.textContent;//nos devuelve lo que vamos a modifica en texto plano
document.write("<br>"+resultado);

resultado = mod.innerText;
resultado2 = mod.innerHTML;//muestra el elemento solo
resultado3 = mod.outerHTML;//muestra toda la linea del elemento modificado

document.write("<br>"+resultado);
document.write("<br>"+resultado2);
document.write("<br>"+resultado3);

alert(resultado);
alert(resultado2);
alert(resultado3);


