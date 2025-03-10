function reciduo(d1,d2)  {return d1 % d2}
do{
    n_p = Number(prompt("¿Su numero es par o impar?... Compruebelo, digitelo a continuacion y percione enter."))
    pp = reciduo(n_p,2)
    pp == 0 ? alert("Efectivamente este numero es PAR..")
    : pp == 1 ? alert("Efectivamente este numero es IMPAR.."):
    alert("Este valor es invalido")
    salir=String(prompt("desea salir? si - no"))
}while(salir !== "si")