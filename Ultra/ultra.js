//Funciones
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



//Ejercicios
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
    let nombre = prompt('Ingrese nombre:');
    let horas = parseInt(prompt('Ingrese horas:'));
    let tarifa = horas <= 10 ? 30000 : 33000;
    let salario = horas * tarifa;
    alert(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a $${salario}.`);
}

function i13 () {
    let numero = parseInt(prompt('Ingrese número:'));
    alert(numero % 2 === 0 ? "El número es par" : "El número es impar");
}

function i14 () {
    let tipoLavadora = parseInt(prompt('Ingrese tipoLavadora:'));
    let cantidad = parseInt(prompt('Ingrese cantidad:'));
    let horasAlquiler = parseInt(prompt('Ingrese horasAlquiler:'));
    let tarifaLavadora = tipoLavadora === 1 ? 4000 : 3000;
    let total = cantidad * horasAlquiler * tarifaLavadora;
    if (cantidad > 3) total *= 0.97;
    alert(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horasAlquiler} horas: $${total}`);
}

function i15 () {
    let numero = parseInt(prompt('Ingrese número:'));
    alert(numero % 2 === 0 ? "El número es par" : "El número es impar");
}

function i16 () {
    let fisica = parseFloat(prompt('Ingrese Física:'));
    let quimica = parseFloat(prompt('Ingrese Química:'));
    let biologia = parseFloat(prompt('Ingrese Biología:'));
    let matematicas = parseFloat(prompt('Ingrese Matemáticas:'));
    let informatica = parseFloat(prompt('Ingrese Informática:'));
    let total = fisica + quimica + biologia + matematicas + informatica;
    let porcentaje = (total / 50) * 100;
    let calificacion = porcentaje > 80 ? "Excelente" : porcentaje >= 60 ? "Buena" : "Mala";
    alert(`Tu porcentaje es ${porcentaje.toFixed(2)}% y tu calificación es ${calificacion}.`);
}

function i17 () {
    let a = parseInt(prompt('Ingrese número 1:'));
    let b = parseInt(prompt('Ingrese número 2:'));
    let c = parseInt(prompt('Ingrese número 3:'));
    alert(`El número mayor es ${Math.max(a, b, c)}`);
}

function i18 () {
    let genero = prompt('Ingrese género (femenino/masculino):').toLowerCase();
    let edad = parseInt(prompt('Ingrese edad:'));
    let ayuda = genero === "femenino" ? (edad > 50 ? 120000 : edad >= 30 ? 100000 : 0) : genero === "masculino" ? 40000 : "Dato inválido";
    alert(`El valor de ayuda mensual es: $${ayuda}.`);
}

function i19 () {
    let dias = parseInt(prompt('Ingrese la cantidad de días (15, 30 o 90):'));
    let costo = dias === 15 ? 18000 : dias === 30 ? 35000 : dias === 90 ? 86000 : "Dato inválido";
    alert(`El costo por ${dias} días es: $${costo}`);
}

function i20 () {
    let angulo1 = parseFloat(prompt('Ingrese ángulo 1:'));
    let angulo2 = parseFloat(prompt('Ingrese ángulo 2:'));
    let angulo3 = parseFloat(prompt('Ingrese ángulo 3:'));
    alert(angulo1 + angulo2 + angulo3 === 180 ? "El triángulo es válido" : "El triángulo no es válido");
}

function i21 () {
    let copias = parseInt(prompt('Ingrese copias:'));
    let precio = copias >= 1000 ? 50 : copias >= 750 ? 80 : copias >= 500 ? 100 : 120;
    alert(`Precio por copia: $${precio}, Precio total: $${precio * copias}`);
}

function i22 () {
    let pitido = prompt('¿Escucha un pitido? (si/no):').toLowerCase();
    let discoGira = prompt('¿El disco gira? (si/no):').toLowerCase();

    if (pitido === "si" && discoGira === "si") {
        alert("Póngase en contacto con el técnico de apoyo");
    } else if (pitido === "si" && discoGira === "no") {
        alert("Verificar contactos de la unidad");
    } else if (pitido === "no" && discoGira === "no") {
        alert("Traiga la computadora para repararla en la central");
    } else {
        alert("Compruebe las conexiones de altavoces");
    }
}

function i23 () {
    let modelo = parseInt(prompt('Ingrese modelo:'));
    let defectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];

    if (defectuosos.includes(modelo)) {
        alert("El automóvil está defectuoso, llevar a garantía");
    } else {
        alert("Su automóvil no está defectuoso");
    }
}

function i24 () {
    let operador = prompt('Ingrese operador (Claro, Tigo o Movistar):').trim();
    let minutosInternacionales = Number(prompt('Ingrese minutos internacionales consumidos:'), 10);
    let paquetededtos = prompt(`quiere adquirir paquete de datos(si/no):`).trim();
    let tarifas = {
        Tigo: { cargoFijo: 45000, valorMinuto: 200, paqueteDatos: 12000 },
        Claro: { cargoFijo: 30000, valorMinuto: 100, paqueteDatos: 18000 },
        Movistar: { cargoFijo: 40000, valorMinuto: 250, paqueteDatos: 8000 }
    };

    if (tarifas[operador] && !isNaN(minutosInternacionales) && minutosInternacionales >= 0) {
        let { cargoFijo, valorMinuto, paqueteDatos } = tarifas[operador];
        let totalCosto = cargoFijo + (valorMinuto * minutosInternacionales) + paqueteDatos;
        
        alert(`Costo total para ${operador} con ${minutosInternacionales} minutos internacionales: $${totalCosto}`);
    } else {
        alert('Operador no válido o minutos ingresados incorrectamente.');
    }
}

function i25 () {
    function calcularCostoBase(tamaño) {
        if (tamaño === "pequeño") return 6000;
        if (tamaño === "grande") return 12000;
        return 0; // Tamaño no válido
    }
    
    function calcularTotal(costoBase, toppings) {
        return toppings.reduce((total, topping) => total + topping.precio, costoBase);
    }
    
    let tamaño = prompt("¿Desea un sándwich pequeño o grande?").toLowerCase();
    
    let costoBase = calcularCostoBase(tamaño);
    
    
    switch (tamaño) {
        case "pequeño":
            costoBase = 6000;
            break;
        case "grande":
            costoBase = 12000;
            break;
        default:
            alert("Tamaño no válido.");
            costoBase = 0;
    }
    
    if (costoBase > 0) {
        let toppings = [];
        let total = costoBase;
    
    
        let agregarTopping;
        const preciosToppings = {
            tocineta: 3000,
            jalapeño: 0,
            pavo: 3000,
            queso: 2500
        };
    
    
        do {
            agregarTopping = prompt("¿con que lo desea? elija 1: (tocineta, jalapeño, pavo, queso, no)").toLowerCase();
            if (preciosToppings[agregarTopping] !== undefined) {
                toppings.push({ nombre: agregarTopping, precio: preciosToppings[agregarTopping] });
            } else if (agregarTopping !== "no") {
                alert("Topping no válido.");
            }
        } while (agregarTopping !== "no");
    
    
        let totalFinal = calcularTotal(costoBase, toppings);
        let n = totalFinal.toLocaleString("es-ES");
        alert(`El total a pagar por su sándwich es: $${n} pesos`);
    }
}
function blackjack () {
    alert("🖤...Bienvenido a BlackJack...❤️")
    alert("Reglas: son 5 rondas, en cada ronda se le preguntara a cada jugador si es que desea sacar una carta, si lo desea se le proporcionara una carta con un numero del 1 al 10 sumandosele a su putaje final, si no desea sacar carta pasata y no volvera a sacar mas cartas.")
    alert("para que un jugador gane debe terminar con el puntaje mas cercano a 21, si se pasa de este numero perdera automaticamente.")
    puntaje1=0
    puntaje2=0
    jugadaj1=""
    jugadaj2=""
    for (let i = 0; i < 3; i++) {
        if (jugadaj1 !== "no"){
            jugadaj1=String(prompt("Jugador 1 desea jugar(sacar una carta) : si - no"))
            if (jugadaj1 !== "no"){
                nr=parseInt(getRandomInt(1,10))
                puntaje1 += nr
                alert(`Jugador 1 usted saco ${nr}, su puntaje actual es de `+puntaje1)
            }
        }
        if (jugadaj2 !== "no"){    
            jugadaj2=String(prompt("Jugador 2 desea jugar(sacar una carta) : si - no"))
            if (jugadaj2 !== "no"){
                nr=parseInt(getRandomInt(1,10))
                puntaje2 += nr
                alert(`Jugador 2 usted saco ${nr}, su puntaje actual es de `+puntaje2)
            }
        }
    }
        
    d1 = Math.abs(21 - puntaje1);
    d2 = Math.abs(21 - puntaje2);

    if (d1 < d2) {
            alert("El número más cercano a 21 es: " + puntaje1 + " , Gano el primer jugador")
        } else if (d2 < d1) {
            alert("El número más cercano a 21 es: " + puntaje2 + " Gano el primer jugador")
        } else {
            alert("Ambos números están a la misma distancia de 21.")
    }
    
}