//SE PUEDE MODIFICAR EL ATRIBUTO DIRECTAMENTE; NO HACE FALTA GET O SET
const input =document.querySelector(".input-normal");
document.write(input.className);//Nombre d ela clase 
document.write(input.value);
document.write(input.type="number");
input.type="range";
input.type="color"
input.type="file"
input.accept="image/png"

const input1 =document.querySelector(".f");
input1.minLength=4;//minima cantidad de caracteres
//input.setAttribute("minLegth","4")
input1.placeholder="aca va el texto mami"

input1.required="Es un campor requerido"


//Style

const tit=document.querySelector(".tit");
tit.style.color="blue"
tit.style.padding="60px";

