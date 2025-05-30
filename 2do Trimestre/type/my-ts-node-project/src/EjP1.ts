abstract class Vehiculo{
    protected marca:string[] =["BMW", "Mazda", "Mercedes", "Volkswagen"];
    protected modelo:string[] = ["320", "X5", "S5", "S6"];
    protected año:string[] = ["2012 - 2014", "2015 - 2017", "2018 - 2020", "2021 - 2025"];
    
    abstract calcularVelocidad():number;
    abstract obtenerInformacion():string;

    static obtenerEdad():string{
        return "";
    }
}

class Coche extends Vehiculo{
    calcularVelocidad():number{
        return 120;
    }
    obtenerInformacion():string{
        return "Este coche es un "+this.marca[0]+" "+this.modelo[0]+" de "+this.año[0];
    }
}

class Moto extends Vehiculo{
    calcularVelocidad():number{
        return 120;
    }
    obtenerInformacion():string{
        return "Este moto es una "+this.marca[1]+" "+this.modelo[1]+" de "+this.año[1];
    }
    obtenerEdad():string{
        return "Este moto es de "+this.año[1];
    }
}


const coche = new Coche();
const moto = new Moto();
console.log(coche.obtenerInformacion());
console.log(coche.calcularVelocidad());
console.log(moto.obtenerInformacion());
console.log(moto.calcularVelocidad());        
console.log(moto.obtenerEdad());