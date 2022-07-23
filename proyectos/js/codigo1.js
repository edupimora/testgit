//-Dejar pasar a los mayores de edad
//-si llega antes de las 2am no paga
let free = false;
const validarcliente=(time)=>{
    edad=prompt("cual es tu edad? ");
    if (edad>18){
        if(time>=2 && time <=7 && free==false)
        {
            alert(`puedes pasar son las ${time}`);
            free=true;

        }else{
            alert(`podes pasar pero te toca pagar son las ${time}`)
        }


    }else{
        alert("La fiesta es para ADULTOS...");

    }
}
validarcliente(23)
// validarcliente(4)
// validarcliente(6)
// validarcliente(10)