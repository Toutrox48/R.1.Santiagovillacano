do{
cs=String(prompt("De que color es el semaforo? (rojo)-(amarillo)-(verde)"))
cs=="rojo"? alert("...!!Pare¡¡..."): cs == "amarillo" ? alert("...Espere..."): cs == "verde"? alert("...Continue..."): 
alert("Error...valor invalido...");
salir=String(prompt("desea salir? si - no"))
}while(salir == "no")