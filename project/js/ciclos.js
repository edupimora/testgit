var i=0;
var arreglo=[];
var arreglo2=[];

while(i<10){
    console.log("la cuenta va en : "+ i);
    arreglo.push(i)
    

    i++;
}
console.log(arreglo);

for(var j=10;j<=20;j++){
    console.log("la cuenta va en : "+ j);
    arreglo2.push(j)
    

}
console.log(arreglo2);
 var arreglo=[1,2,3,4,5,6,7];
 var total=0;
 var lenguajes =["Python","java","c++","javascript"]

 for(var k=0;k< arreglo.length;k++){
     console.log(arreglo[k]);
     total +=arreglo[k];
 }
 console.log(total);

 for (i=0;i<lenguajes.length;i++){
     console.log(lenguajes[i].toUpperCase());
 }

 var miArreglo=[[1,2,3],[4,5,6],[7,8,9]];

 for(i=0;i<miArreglo.length;i++){
     var anidado=miArreglo[i]
     for (j=0;j<anidado.length;j++){
         console.log(anidado[j]);
     }


 }


 var x;
 x=5;

 do{
    console.log(x);// se ejecuta almenos una vez la secuencia
    x++
 }while(x<10);