class celulares{
    constructor(color,peso,rdp,rdc,ram){
        this.color=color;
        this.peso=peso;
        this.rdpantalla=rdp;
        this.rdcamara=rdc;
        this.ram=ram;
        this.encendido=false;
    }
    prender(){
        if(this.encendido==false){
            alert("El celular esta encendiendo");
            this.encendido=true;
        }else{alert("El celular ya esta encendido")}

    }
    apagar(){
        if(this.encendido==false){
            alert("El celular ya esta pagado");
            
        }else{alert("El celular se esta apagando")
        this.encendido=false;
    
    }

    }
    tomarFoto(){
        alert(`foto tomada en una resolucion de ${this.rdcamara}`)
    }
    video(){
        alert(`Video tomado en una resolucion de ${this.rdcamara}`)
    }
    info(){
        return`
        Color:${this.color} </br>
        Peso: ${this.peso}</br>
        tamano: ${this.rdpantalla}</br>
        Camara: ${this.rdcamara}</br>
        RAM: ${this.ram}<br>`;
    }

}

class altaGama extends celulares{
    constructor(color,peso,rdp,rdc,ram,rdce){
        super(color,peso,rdp,rdc,ram)
        this.rdcextra=rdce;
    }
    camaraLenta(){
        alert("Estas grabando en camra lenta");

    }
    reconocimientoFacial(){
        alert("iniciar reconocimiento facial");

    }
    infoAG(){
        return this.info() + `Camara extra: ${this.rdcextra}</br>`;
    }

}
class app
{
    constructor(descargas,puntuacion,peso){
        this.descargas=descargas;
        this.puntuacion=puntuacion;
        this.peso=peso;
        this.iniciada=false;
        this.instalada=false;
    }
    abrir(){
        if(this.iniciada==false && this.instalada==true){
            this.iniciada=true;
            alert("La App ha iniciado");
        }
    }
    cerrar(){
        if(this.iniciada==true && this.instalada==true){
            this.iniciada=false;
            alert("La App se apagara");
        }
    }
    instalar(){
        if(this.instalada==false){
            this.instalada=true;
            alert("La App se ha instalado");
        }
    }
    desinstalar(){
        if(this.instalada==true){
            this.instalada=false;
            alert("La App ha desinstalado");
        }
    }
    appInfo(){
       return `
       puntuacion: ${this.puntuacion}<br>
       Descargas:${this.descargas}<br>
       Peso: ${this.peso}<br>`;
    }


}


// celu1 = new celulares("negro","125g",5,"32MP","8GB");
// celu2 = new celulares("azul","150g",5.4,"64Mp","6Gb");
celu1= new altaGama("negro","125g",5,"32MP","8GB","28Mp");
celu2= new altaGama("cafe","160g",5,"64MP","8GB","28Mp");

document.write(`${celu1.infoAG()}<br><br>
${celu2.infoAG()}<br>`);

aplicacion1 = new app("16000","5 estrellas","0.5Gb");
aplicacion2 = new app("18000","4 estrellas","1Gb");

document.write(`${aplicacion1.appInfo()}<br>
${aplicacion2.appInfo()}<br>`)

// aplicacion.instalar();
// aplicacion.abrir();
// aplicacion.cerrar();
