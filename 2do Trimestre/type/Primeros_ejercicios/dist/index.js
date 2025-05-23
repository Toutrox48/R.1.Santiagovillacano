"use strict";
// Funciones
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Ejercicios
function i1() {
    const estaturaStr = prompt("digite su altura (cm):");
    const estatura = estaturaStr ? parseInt(estaturaStr) : 0; // Handle null or invalid input
    if (estatura >= 150) {
        alert("Puede ingresar a la atraccion...");
    }
    else {
        alert("No puede ingresar a la atraccion...");
    }
}
function i2() {
    const numeroStr = prompt("Digite un numero");
    const numero = numeroStr ? parseInt(numeroStr) : 0; // Handle null or invalid input
    numero % 2 === 0 ? alert("EL numero es par...") : alert("El numero es impar...");
}
function i3() {
    let pe = prompt("la peluqueria esta disponible?: (si o no)");
    const np = "Manolo";
    pe = pe === null || pe === void 0 ? void 0 : pe.toLowerCase(); // Ensure `pe` is a string and convert to lowercase
    pe === "si" ? alert(`El peluquero: ${np} esta disponible...`) : alert(`El peluquero: ${np} esta ocupado...`);
}
function i4() {
    const NC = "santiago";
    const ID = "1038105582";
    const nombre = prompt("Ingrese su nombre:") || ""; // Provide a default empty string for null
    const iden = prompt("Ingrese su N° de documento de identidad...") || ""; // Provide a default empty string for null
    NC === nombre && ID === iden
        ? alert(`esta inscrito al gym ${nombre}, Bienvenido...`)
        : alert(`"${nombre}",no se encuentra en nuestra base de datos, Nombre o N° documento es invalido...`);
}
function i5() {
    const ticket = prompt("de que numero es su tiquete: (numeros de prioridad: 1,2)");
    if (ticket === "1" || ticket === "2") {
        alert(`el Tiquete ${ticket} puede pasar...`);
    }
    else {
        // Assuming 'turno' is meant to be 'ticket' here
        alert(`turno n°${ticket} ha caducado, tome otro turno por favor...`);
    }
}
function i6() {
    const edadStr = prompt("indique su edad:");
    const edad = edadStr ? parseInt(edadStr) : 0; // Handle null or invalid input
    if (edad >= 18) {
        alert(`Usted tiene ${edad} , eres mayor de edad...`);
    }
    else {
        alert(`Usted tiene ${edad} , eres menor de edad...`);
    }
}
function i7() {
    var _a;
    const cv = (_a = prompt("En que clase se registro para el vuelo: (economica) o (ejecutiva)")) === null || _a === void 0 ? void 0 : _a.toLowerCase(); // Convert to lowercase for consistent comparison
    if (cv === "economica") {
        alert(`pertenece a la clase ${cv}...`);
    }
    else if (cv === "ejecutiva") {
        alert(`pertenece a la clase ${cv}...`);
    }
    else {
        alert("Su ticket es invalido o ha caducado, reviselo o pregunte en servicio al cliente...");
    }
}
function i8() {
    const nombreBd = "emma";
    const documentoBd = "4488123";
    const placaIngresada = prompt("ingrese el numeto de su placa") || "";
    const nombreIngresado = prompt("Ingrese su nombre:") || "";
    const documentoIngresado = prompt("ingrese su documento:") || "";
    if (nombreIngresado === nombreBd && documentoIngresado === documentoBd) {
        alert(`${nombreBd}, puede pasar por su vehiculo ${placaIngresada}`);
    }
    else {
        alert("No se a registrado su auto en nuestros en nustros locales...");
    }
}
function i9() {
    var _a;
    const direccion = (_a = prompt("digita la direccion del dron: Arriba(ar) Abajo(ab) Derecha(de) Izquierda(iz)")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    if (direccion === "ar") {
        alert("El dron va para arriba");
    }
    else if (direccion === "ab") {
        alert("El dron va para abajo");
    }
    else if (direccion === "iz") {
        alert("El dron va para la izquierda");
    }
    else if (direccion === "de") {
        alert("El dron va para la derecha");
    }
    else {
        alert("dron dañado");
    }
}
function i10() {
    var _a;
    const encendido = (_a = prompt("El carro esta encendido: (si o no)")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    const velocidadStr = prompt("¿A que velocidad vas?");
    const velocidad = velocidadStr ? Number(velocidadStr) : 0;
    if (encendido === "si") {
        alert(`su carro esta encendido`);
    }
    else if (velocidad === 0) {
        alert(`carro frenado`);
    }
    else if (velocidad > 0 && velocidad <= 100) {
        alert(`carro en marcha`);
    }
    else {
        alert(`evite un accidente ... exceso de velocidad`);
    }
}
function i11() {
    var _a;
    const dia = (_a = prompt("Que dia es hoy?")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    const clas = 'algoritmos';
    dia === 'miercoles' ? alert(`la clase de hoy es ${clas}`) : alert(`si a bueno...`);
}
function i12() {
    const nombre = prompt('Ingrese nombre:') || '';
    const horasStr = prompt('Ingrese horas:');
    const horas = horasStr ? parseInt(horasStr) : 0;
    const tarifa = horas <= 10 ? 30000 : 33000;
    const salario = horas * tarifa;
    alert(`Señor/a ${nombre}, el número de horas es ${horas} y su salario equivale a $${salario}.`);
}
function i13() {
    const numeroStr = prompt('Ingrese número:');
    const numero = numeroStr ? parseInt(numeroStr) : 0;
    alert(numero % 2 === 0 ? "El número es par" : "El número es impar");
}
function i14() {
    const tipoLavadoraStr = prompt('Ingrese tipoLavadora:');
    const tipoLavadora = tipoLavadoraStr ? parseInt(tipoLavadoraStr) : 0;
    const cantidadStr = prompt('Ingrese cantidad:');
    const cantidad = cantidadStr ? parseInt(cantidadStr) : 0;
    const horasAlquilerStr = prompt('Ingrese horasAlquiler:');
    const horasAlquiler = horasAlquilerStr ? parseInt(horasAlquilerStr) : 0;
    const tarifaLavadora = tipoLavadora === 1 ? 4000 : 3000;
    let total = cantidad * horasAlquiler * tarifaLavadora;
    if (cantidad > 3) {
        total *= 0.97;
    }
    alert(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horasAlquiler} horas: $${total}`);
}
function i15() {
    const numeroStr = prompt('Ingrese número:');
    const numero = numeroStr ? parseInt(numeroStr) : 0;
    alert(numero % 2 === 0 ? "El número es par" : "El número es impar");
}
function i16() {
    const fisicaStr = prompt('Ingrese Física:');
    const fisica = fisicaStr ? parseFloat(fisicaStr) : 0;
    const quimicaStr = prompt('Ingrese Química:');
    const quimica = quimicaStr ? parseFloat(quimicaStr) : 0;
    const biologiaStr = prompt('Ingrese Biología:');
    const biologia = biologiaStr ? parseFloat(biologiaStr) : 0;
    const matematicasStr = prompt('Ingrese Matemáticas:');
    const matematicas = matematicasStr ? parseFloat(matematicasStr) : 0;
    const informaticaStr = prompt('Ingrese Informática:');
    const informatica = informaticaStr ? parseFloat(informaticaStr) : 0;
    const total = fisica + quimica + biologia + matematicas + informatica;
    const porcentaje = (total / 50) * 100;
    const calificacion = porcentaje > 80 ? "Excelente" : porcentaje >= 60 ? "Buena" : "Mala";
    alert(`Tu porcentaje es ${porcentaje.toFixed(2)}% y tu calificación es ${calificacion}.`);
}
function i17() {
    const aStr = prompt('Ingrese número 1:');
    const a = aStr ? parseInt(aStr) : 0;
    const bStr = prompt('Ingrese número 2:');
    const b = bStr ? parseInt(bStr) : 0;
    const cStr = prompt('Ingrese número 3:');
    const c = cStr ? parseInt(cStr) : 0;
    alert(`El número mayor es ${Math.max(a, b, c)}`);
}
function i18() {
    var _a;
    const genero = (_a = prompt('Ingrese género (femenino/masculino):')) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    const edadStr = prompt('Ingrese edad:');
    const edad = edadStr ? parseInt(edadStr) : 0;
    let ayuda;
    if (genero === "femenino") {
        ayuda = edad > 50 ? 120000 : edad >= 30 ? 100000 : 0;
    }
    else if (genero === "masculino") {
        ayuda = 40000;
    }
    else {
        ayuda = "Dato inválido";
    }
    alert(`El valor de ayuda mensual es: $${ayuda}.`);
}
function i19() {
    const diasStr = prompt('Ingrese la cantidad de días (15, 30 o 90):');
    const dias = diasStr ? parseInt(diasStr) : 0;
    let costo;
    if (dias === 15) {
        costo = 18000;
    }
    else if (dias === 30) {
        costo = 35000;
    }
    else if (dias === 90) {
        costo = 86000;
    }
    else {
        costo = "Dato inválido";
    }
    alert(`El costo por ${dias} días es: $${costo}`);
}
function i20() {
    const angulo1Str = prompt('Ingrese ángulo 1:');
    const angulo1 = angulo1Str ? parseFloat(angulo1Str) : 0;
    const angulo2Str = prompt('Ingrese ángulo 2:');
    const angulo2 = angulo2Str ? parseFloat(angulo2Str) : 0;
    const angulo3Str = prompt('Ingrese ángulo 3:');
    const angulo3 = angulo3Str ? parseFloat(angulo3Str) : 0;
    alert(angulo1 + angulo2 + angulo3 === 180 ? "El triángulo es válido" : "El triángulo no es válido");
}
function i21() {
    const copiasStr = prompt('Ingrese copias:');
    const copias = copiasStr ? parseInt(copiasStr) : 0;
    let precio;
    if (copias >= 1000) {
        precio = 50;
    }
    else if (copias >= 750) {
        precio = 80;
    }
    else if (copias >= 500) {
        precio = 100;
    }
    else {
        precio = 120;
    }
    alert(`Precio por copia: $${precio}, Precio total: $${precio * copias}`);
}
function i22() {
    var _a, _b;
    const pitido = (_a = prompt('¿Escucha un pitido? (si/no):')) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    const discoGira = (_b = prompt('¿El disco gira? (si/no):')) === null || _b === void 0 ? void 0 : _b.toLowerCase();
    if (pitido === "si" && discoGira === "si") {
        alert("Póngase en contacto con el técnico de apoyo");
    }
    else if (pitido === "si" && discoGira === "no") {
        alert("Verificar contactos de la unidad");
    }
    else if (pitido === "no" && discoGira === "no") {
        alert("Traiga la computadora para repararla en la central");
    }
    else {
        alert("Compruebe las conexiones de altavoces");
    }
}
function i23() {
    const modeloStr = prompt('Ingrese modelo:');
    const modelo = modeloStr ? parseInt(modeloStr) : 0;
    const defectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];
    if (defectuosos.includes(modelo)) {
        alert("El automóvil está defectuoso, llevar a garantía");
    }
    else {
        alert("Su automóvil no está defectuoso");
    }
}
function i24() {
    var _a, _b;
    const operador = (_a = prompt('Ingrese operador (Claro, Tigo o Movistar):')) === null || _a === void 0 ? void 0 : _a.trim();
    const minutosInternacionalesStr = prompt('Ingrese minutos internacionales consumidos:');
    const minutosInternacionales = minutosInternacionalesStr ? Number(minutosInternacionalesStr) : 0;
    const paquetededtos = (_b = prompt(`quiere adquirir paquete de datos(si/no):`)) === null || _b === void 0 ? void 0 : _b.trim();
    const tarifas = {
        Tigo: { cargoFijo: 45000, valorMinuto: 200, paqueteDatos: 12000 },
        Claro: { cargoFijo: 30000, valorMinuto: 100, paqueteDatos: 18000 },
        Movistar: { cargoFijo: 40000, valorMinuto: 250, paqueteDatos: 8000 }
    };
    if (operador && tarifas[operador] && !isNaN(minutosInternacionales) && minutosInternacionales >= 0) {
        const { cargoFijo, valorMinuto, paqueteDatos } = tarifas[operador];
        let totalCosto = cargoFijo + (valorMinuto * minutosInternacionales);
        // Add package cost only if requested
        if (paquetededtos === "si") {
            totalCosto += paqueteDatos;
        }
        alert(`Costo total para ${operador} con ${minutosInternacionales} minutos internacionales: $${totalCosto}`);
    }
    else {
        alert('Operador no válido o minutos ingresados incorrectamente.');
    }
}
function i25() {
    var _a, _b;
    function calcularCostoBase(tamaño) {
        if (tamaño === "pequeño")
            return 6000;
        if (tamaño === "grande")
            return 12000;
        return 0; // Tamaño no válido
    }
    function calcularTotal(costoBase, toppings) {
        return toppings.reduce((total, topping) => total + topping.precio, costoBase);
    }
    let tamaño = (_a = prompt("¿Desea un sándwich pequeño o grande?")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    let costoBase = 0;
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
        const toppings = [];
        const preciosToppings = {
            tocineta: 3000,
            jalapeño: 0,
            pavo: 3000,
            queso: 2500
        };
        let agregarTopping;
        do {
            agregarTopping = (_b = prompt("¿con que lo desea? elija 1: (tocineta, jalapeño, pavo, queso, no)")) === null || _b === void 0 ? void 0 : _b.toLowerCase();
            if (agregarTopping && preciosToppings[agregarTopping] !== undefined) {
                toppings.push({ nombre: agregarTopping, precio: preciosToppings[agregarTopping] });
            }
            else if (agregarTopping !== "no" && agregarTopping !== null) {
                alert("Topping no válido.");
            }
        } while (agregarTopping !== "no" && agregarTopping !== null);
        const totalFinal = calcularTotal(costoBase, toppings);
        const n = totalFinal.toLocaleString("es-ES");
        alert(`El total a pagar por su sándwich es: $${n} pesos`);
    }
}
function blackjack() {
    var _a, _b;
    alert("🖤...Bienvenido a BlackJack...❤️");
    alert("Reglas: son 5 rondas, en cada ronda se le preguntara a cada jugador si es que desea sacar una carta, si lo desea se le proporcionara una carta con un numero del 1 al 10 sumandosele a su putaje final, si no desea sacar carta pasata y no volvera a sacar mas cartas.");
    alert("para que un jugador gane debe terminar con el puntaje mas cercano a 21, si se pasa de este numero perdera automaticamente.");
    let puntaje1 = 0;
    let puntaje2 = 0;
    let jugadaj1 = "";
    let jugadaj2 = "";
    for (let i = 0; i < 3; i++) {
        if (jugadaj1 !== "no") {
            jugadaj1 = (_a = prompt("Jugador 1 desea jugar(sacar una carta) : si - no")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
            if (jugadaj1 === "si") { // Only proceed if 'si'
                const nr = getRandomInt(1, 10);
                puntaje1 += nr;
                alert(`Jugador 1 usted saco ${nr}, su puntaje actual es de ` + puntaje1);
            }
        }
        if (jugadaj2 !== "no") {
            jugadaj2 = (_b = prompt("Jugador 2 desea jugar(sacar una carta) : si - no")) === null || _b === void 0 ? void 0 : _b.toLowerCase();
            if (jugadaj2 === "si") { // Only proceed if 'si'
                const nr = getRandomInt(1, 10);
                puntaje2 += nr;
                alert(`Jugador 2 usted saco ${nr}, su puntaje actual es de ` + puntaje2);
            }
        }
    }
    const d1 = Math.abs(21 - puntaje1);
    const d2 = Math.abs(21 - puntaje2);
    if (d1 < d2) {
        alert("El número más cercano a 21 es: " + puntaje1 + " , Gano el primer jugador");
    }
    else if (d2 < d1) {
        alert("El número más cercano a 21 es: " + puntaje2 + " Gano el segundo jugador"); // Corrected player name
    }
    else {
        alert("Ambos números están a la misma distancia de 21.");
    }
}
