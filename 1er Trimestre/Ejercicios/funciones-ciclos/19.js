function m(){
    if(mensualidad=="15-dias"){alert(`El servicio de 15 dias cuesta 18.000 y debido al uso de este uste debe ${veces*18000}`)}else
    if(mensualidad=="30-dias"){alert(`El servicio de 30 dias cuesta 35.000 y debido al uso de este uste debe ${veces*35000}`)}else
    if(mensualidad=="3-meses"){alert(`El servicio de 3 meses cuesta 86.000 y debido al uso de este uste debe ${veces*86000}`)}else{alert("...Error...")}
}
do{
    mensualidad=String(prompt("¿Que mensualidad usa? (15-dias) (30-dias) (3-meses)"))
    veces=Number(prompt("¿Cuantas veces a usado este servicio este año?"))
    console.log(m())
    salir=String(prompt("desea salir? si - no"))
}while(salir !== "si")