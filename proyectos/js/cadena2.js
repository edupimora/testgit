
const conMat=(x)=>{

    materias={
    mate:["juan","camilo","jess","edi"],
    fisica:["laura","nicol", "angie"],
    sociales:["edi","angie","nicol","juan"]
        
    }
    if (materias[x] !== undefined){
        
        return [materias[x],x,materias];
       }
        else{
            return materias;
           }
   
     


}

const informacion = (materia)=>{

   
    let con=conMat(materia);
    prof=con[0][0];
    alumnos= con[0];
    alumnos.shift();

    document.write(`el profesor de <b style ="color:red">${con[1]}</b> es: ${prof}<br>
    Los alumnos son ${alumnos.join(" ")}`);

}

const clases =(alumno)=>{
    let con=conMat();
    let cantidad =0;
    let clasesPresen=[];

    for(info in con){
        if (con[info].includes(alumno))
        {
            cantidad++;
            clasesPresen.push(" "+info);

        }

    }
    return `<b style='color:blue'> ${alumno}</b> esta en <b>${cantidad}
    clases</b><b> y esta cursando las clases : <b>${clasesPresen}</b>`;
}


let materia = prompt("Ingrese el nombre de la materia")
informacion(materia);
document.write("<br><br>"+clases("angie"));