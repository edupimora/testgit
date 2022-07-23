let cuantosalumos=prompt("Cuantos alumnos son?");
let alumnosTotales=[];
for(let i=0;i<cuantosalumos;i++){
    alumnosTotales[i]=[prompt("Nombre del alumno " +(i+1)), 0];
}

const asistencia=(nombre,p)=>{
    let presencia=prompt(nombre +" "+ alumnosTotales[p][1]);
    if (presencia=="p"){
        alumnosTotales[p][1]++;

    }

}

for(i=0;i<5;i++){
    for(alumno in alumnosTotales){
        asistencia(alumnosTotales[alumno][0],alumno);
    }
}

for (alumno in alumnosTotales){
    let resultados = `${alumnosTotales[alumno][0]}:<br>
    ______Asistencias: ${alumnosTotales[alumno][1]}<br>
    ______ausencias: ${5-alumnosTotales[alumno][1]}`;

    if (5-alumnosTotales[alumno][1]>1){
        resultados+=" Reprobado por inasistencias <br><br>"
    }else{
        resultados+="<br><br>"
    }
    document.write(resultados);

}
