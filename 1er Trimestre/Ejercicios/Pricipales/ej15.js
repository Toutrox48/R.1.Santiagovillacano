n_p = Number(prompt("¿Su numero es par o impar?... Compruebelo, digitelo a continuacion y percione enter."))
pp = n_p % 2

if(pp == 0) {alert("Efectivamente este numero es PAR..")}else
if(pp == 1) {alert("Efectivamente este numero es IMPAR..")}else{alert("Este valor es invalido")}