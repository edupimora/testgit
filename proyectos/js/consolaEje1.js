let materias={
    fisica:[90,8,4,"fisica"],
    matematicas:[80,7,3,"matematicas"],
    sociales:[60,6,2,"sociales"],
    filosofia:[90,9,4,"filosofia"],
    ciencias:[70,6,3,"ciecias"]
}

const asistencias=()=>{
    for (materia in materias){
       let asistencia= materias[materia][0];
       let promedio=materias[materia][1];
       let tareas=materias[materia][2];

       console.log(materias[materia][3]);
       if (asistencia>=90){
           
           console.log(`%c Asistencia en orden`,"color:green");
       }else{
        //console.log(materias[materia][1]);
        console.log(`%c muchas inasistencias`,"color:red");

       }
       if (promedio>=7){
           
        console.log(`%c Promedio en orden`,"color:green");
        }else{
        //console.log(materias[materia][1]);
        console.log(`%c Promedio Bajo`,"color:red");

        }
        if (asistencia>=3){
           
            console.log(`%c Tareas en orden`,"color:green");
        }else{
         //console.log(materias[materia][3]);
         console.log(`%c Nno presento todos los trabajos`,"color:red");
 
        }
    }

}

asistencias();