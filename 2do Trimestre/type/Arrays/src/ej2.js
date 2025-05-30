"use strict";
let historial = [0, 0, 0, 0, 0];
let total = 0;
let saldo = 0;
const retiro = () => {
    let hist = "Historial: \n\n";
    for (let i = 0; i < historial.length; i++) {
        hist += `${i + 1}: ${historial[i]} \n`;
    }
    alert(hist);
};


