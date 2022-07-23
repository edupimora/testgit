
class animal{
    constructor(especie,edad,color){
        this.edad=edad; //propiedad llamada edad
        this.especie=especie;
        this.color=color;
        this.info=`Hola soy ${especie}, tengo ${edad} y mi color es ${color}`;

    }
    verInfo(){
        document.write(this.info+"<br>") //Metodo si esta dentro de una clase
                                //funcion si esta fuera de la clase
                                //no se puede hacer funcion flecha
    }
}


class perros extends animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color)
        this.raza = null;
    }
    ladrar(){alert("Waw!! ")}
    set modificarRaza(newName){
        this.raza= newName;
    }
//getters und setters benutzt man, wenn man quiere acceder a propiedades privadas 
//o datos encapsulados en Javascript 
    get getRaza(){
        return this.raza;
    }

}


const perro = new perros("perro",9,"cafe","chauchau");

const gato= new animal("gato",2,"azul")
//document.write(perro.info);
perro.verInfo();
//gato.verInfo();
perro.modificarRaza="Pedro";

document.write(perro.getRaza);