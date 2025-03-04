function i1 () {
    let estatura=prompt("digite su altura (cm):")

if (estatura >=150) {alert("Puede ingresar a la atraccion...")} 
    else{alert("No puede ingresar a la atraccion...")}
}
function i2 () {
    let numero = prompt("Digite un numero")
        numero % 2 === 0? alert("EL numero es par...") 
                : alert("El numero es impar...")
}

function i3 () {
    let pe = prompt("la peluqueria esta disponible?: (si o no)")
    let np= "Manolo"
    
    pe = "si"?  alert(`El peluquero: ${np} esta disponible...`)
             :  alert(`El peluquero: ${np} esta ocupado...`)
}

function i4 () {
    const NC="santiago"
    const ID= "1038105582"
    nombre=prompt("Ingrese su nombre:")
    iden=prompt("Ingrese su N° de documento de identidad...")
    
    NC == nombre && ID == iden ? alert(`esta inscrito al gym ${nombre}, Bienvenido...`) 
        :alert(`"${nombre}",no se encuentra en nuestra base de datos, Nombre o N° documento es invalido...`)    
}

function i5 () {
    let ticket = String(prompt("de que numero es su tiquete: (numeros de prioridad: 1,2)"))

    ticket == "1"? alert(`el Tiquete ${ticket} puede pasar...`) 
    :ticket == "2"? alert(`el Tiquete ${ticket} puede pasar...`)
    :alert(`turno n°${turno} ha caducado, tome otro turno por favor...`);
}

function i6 () {
    let edad = prompt("indique su edad:")

    if(edad >=18){
        alert(`Usted tiene ${edad} , eres mayor de edad...`);
    } else{
        alert(`Usted tiene ${edad} , eres menor de edad...`);
    }
}

function i7 () {
    let cv=prompt("En que clase se registro para el vuelo: (economica) o (ejecutiva)")

    if(cv=="economica"){
        alert(`pertenece a la clase ${cv}...`)
    }else if(cv=="ejecutiva"){
        alert(`pertenece a la clase ${cv}...`)
    }else{
        alert("Su ticket es invalido o ha caducado, reviselo o pregunte en servicio al cliente...")
    }
}

function i8 () {
    let nombreBd= "emma"
    let documentoBd= "4488123"
    let placaIngresada= prompt("ingrese el numeto de su placa")
    let nombreIngresado= prompt("Ingrese su nombre:")
    let documentoIngresado= prompt("ingrese su documento:")


    if(nombreIngresado == nombreBd && documentoIngresado == documentoBd){
        alert(`${nombreBd}, puede pasar por su vehiculo ${placaIngresada}`)
    }else{
        alert("No se a registrado su auto en nuestros en nustros locales...");
    }
}

function i9 () {
    let direccion = prompt("digita la direccion del dron: Arriba(ar) Abajo(ab) Derecha(de) Izquierda(iz)")

    if(direccion=="ar"){
        alert("El dron va para arriba");
    }else if(direccion=="ab"){
        alert("El dron va para abajo");
    }else if(direccion=="iz"){
        alert("El dron va para la izquierda");
    }else if(direccion=="de"){
        alert("El dron va para la derecha");
    }else{
        alert("dron dañado");
    }
}

function i10 () {
    let encendido = String(prompt("El carro esta encendido: (si o no)"))
    let velocidad = Number(prompt("¿A que velocidad vas?"))

    encendido == "si" ? alert(`su carro esta encendido`) :
        velocidad == 0 ? alert(`carro frenado`) :
            velocidad > 0 && velocidad <=100 ? alert(`carro en marcha`) :
                alert(`evite un accidente ... exceso de velocidad`) 
}

function i11 () {
    let dia = String(prompt("Que dia es hoy?"))
    let clas = 'algoritmos'

    dia === 'miercoles' ? alert(`la clase de hoy es ${clas}`) :
        alert(`si a bueno...`)
}

function i12 () {

}

function i13 () {

}

function i14 () {

}

function i15 () {

}

function i16 () {

}

function i17 () {

}

function i18 () {

}

function i19 () {

}

function i20 () {

}

function i21 () {

}

function i22 () {

}

function i23 () {

}

function i24 () {

}

function i25 () {

}
