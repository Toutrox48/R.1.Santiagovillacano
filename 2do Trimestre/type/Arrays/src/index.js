"use strict";
let hotel = [0, 0, 0, 0, 0];
let ocupacion = "";
const ocupaciones = () => {
    for (let i = 0; i < hotel.length; i++) {
        ocupacion += `habitación ${i + 1}: ${hotel[i] === 0 ? "Desocupada" : "Ocupada"}\n`;
    }
    alert(ocupacion);
    ocupacion = "";
};
const reservas = (n) => {
    if (n < 1 || n > 5) {
        alert("No peseemos ese numero de habitacion en este hotel porfavor digite un numero entre (1-5)");
    }
    else if ((hotel[n - 1] === 1)) {
        alert(`La habitacion ${n} se encuentra Ocupada...`);
    }
    else {
        alert(`La habitacion ${n} se encuentra Desocupada...\nLa reserva se realizo con exito...`);
        hotel[n - 1] = 1;
        ocupaciones();
    }
};
const liberacion = (n) => {
    if (n < 1 || n > 5) {
        alert("No peseemos ese numero de habitacion en este hotel porfavor digite un numero entre (1-5)");
    }
    else if ((hotel[n - 1] === 0)) {
        alert(`La habitacion ${n} ya se encuentra Desocupada...`);
    }
    else {
        alert(`La habitacion ${n} se encuentra Ocupada...\nLa liberacion se realizo con exito...`);
        hotel[n - 1] = 0;
        ocupaciones();
    }
};
const consultas = () => {
    let consulta = prompt("Digite: \n (1) si desea reservar una habitacion \n (2) si desea liberar una habitacion \n (3) si desea ver las habitaciones ocupadas \n (4) para salir");
    consulta = parseInt(consulta); // Convertir la entrada a número
    if (consulta === 1) {
        const n = parseInt(prompt("Número de habitación:"));
        reservas(n);
    }
    else if (consulta === 2) {
        const n2 = parseInt(prompt("Número de habitación:"));
        liberacion(n2);
    }
    else if (consulta === 3) {
        alert("Habitaciones ocupadas");
        ocupaciones();
    }
    else if (consulta === 4) {
        alert("¡Gracias por usar nuestro sistema de hotel!");
        return false; // Indicar que se debe romper el bucle
    }
    else {
        alert("Opción no válida. Por favor, digite un número entre 1 y 4.");
    }
    return true; // Indicar que se debe continuar el bucle
};
while (true) {
    alert("Bienvenido");
    if (!consultas()) { // Verificar si el usuario desea salir
        break;
    }
}
