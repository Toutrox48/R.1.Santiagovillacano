function multi(n1,n2) {return n1*n2}

copias=Number(prompt("¿Cuantas copias desea sacar?"))

if(copias<=499){alert(`Por cada copia debes pagar 120, que en total seria: ${multi(copias,120)}`)}else
if(copias>=500 && copias<=749){alert(`Por cada copia debes pagar 100, que en total seria: ${multi(copias,100)}`)}else
if(copias>=750 && copias<=999){alert(`Por cada copia debes pagar 80, que en total seria: ${multi(copias,80)}`)}else
if(copias>=1000){alert(`Por cada copia debes pagar 50, que en total seria: ${multi(copias,50)}`)}