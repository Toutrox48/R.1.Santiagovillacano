let estadoSemaforo= true;
let colorSemaforo="rojo";

let mensaje=!estadoSemaforo || colorSemaforo === "" 
            ? "Semaforo apagado"
            : colorSemaforo == "rojo" ? "Pare"
            : colorSemaforo == "amarillo" ? "Preparese"
            : colorSemaforo == "verde" ? "Siga"
            : "Semaforo dañado"

console.log(mensaje)