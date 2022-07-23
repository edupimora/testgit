let trabajo ="240 min";
let tp="100 min";
let estudi ="100 min";
let homework ="30 min";
let descanso="10 min";

console.log("TAREAS");

for(var i=0;i<14;i++){

    if (i==0){console.groupCollapsed("Semana 1");}
console.group("Dia "+(i+1));
console.log(trabajo);
console.log(estudi);
console.log(tp);
console.log(homework);
console.log(descanso);
console.groupEnd();
if(i==7){
    console.groupEnd()
    console.groupCollapsed("Semana2")
}

}
console.groupEnd();
console.groupEnd();