let  materias={
    mate:["juan","camilo","jess","edi"],
    fisica:["laura","nicol", "angie"],
    sociales:["edi","angie","nicol","juan"]
        
    }

    const inscribir = (alumno,materia)=>{
        personas=materias[materia];
        
        personas=personas;
        if(personas.lenght>=10){
            document.write(`lo sentimos ${personas} no hay cupo para la clase ${materia}`)
        }
        else{
            personas.push(alumno);
            if (materia=="mate"){
                materias={
                    mate: personas,
                    fisica:["laura","nicol", "angie"],
                    sociales:["edi","angie","nicol","juan"]
                        
                    }
                
            }else if(materia="fisica"){
                materias={
                    mate:["juan","camilo","jess","edi"],
                    fisica:alumno,
                    sociales:["edi","angie","nicol","juan"]
                        
                    }

            }
            document.write(`Felicidades te has inscrito a ${materia}<br>`);
            document.write(materias[materia]+"<br>")
        }
    }

    inscribir("pedro","mate",);
    inscribir("loro","mate");