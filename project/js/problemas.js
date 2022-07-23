//-Dejar pasar a los mayores de edad
//-si llega antes de las 2am no paga
let free = false;
const validarcliente=(time)=>{
    edad=prompt("cual es tu edad? ");
    if (edad>18){
        if(time>=2 && time <=7 && free==false)
        {
            alert("puedes pasar");
            free=true;

        }else{
            alert("podes pasar pero te toca pagar")
        }


    }else{
        alert("La fiesta es para ADULTOS...");

    }
}