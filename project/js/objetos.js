var perro ={
    "nombre":"Marco",
    "edad":4,
    "peso":24,
    "raza":"mixta",
    1: "EduardMorales"
};

console.log(perro.nombre);
console.log(perro["raza"]);
var numero =1;
console.log(perro[numero]);

var mochila ={
    "color":"azul",
    "tamano":"grande",
    "contenido":["agua","llaves"]
};

console.log(mochila.color);

mochila.color="verde";
console.log(mochila.color);
mochila.contenido.push("lapiz");

mochila.material="tela"; //agregar propiedad a objeto
delete mochila.tamano//eliminar propiedad de objeto
mochila.hasOwnProperty("color")//verificar si el metodo tiene una propiedad, entrega boolean



//busquedas
function buscarElemnto(simbolo){
    var elemento="";

    var eleQuimico={
        "AL":"Aluminio",
        "S":"azufre",
        "Cl":"CLoro"
    };

    return eleQuimico[simbolo];
}
console.log(buscarElemnto("AL"));


var misPlantas=[
    {
        tipo:"flores",
        lista:[
            "rosas",
            "tulipanes",
            "diente de leon"

        ]
},
{
    tipo:"arboles",
    lista:[// arreglos anidados
        "abeto",
        "pino",
        "abedul"
    ]
    
}
];

var miFlor =misPlantas[0].lista[0];
console.log(miFlor);

