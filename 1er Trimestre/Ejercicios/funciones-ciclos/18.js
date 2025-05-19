function chicas(){
    if(años<30){alert("no recibes nada...")}else
    if(años>=30 && años<=50){alert("Recibes 100.000 de ayuda mensual")}else
    if(años>50){alert("Recibes 120.000 de ayuda mensual")}
}
do{
    genero=String(prompt("Cual es su Genero:"))
    años=Number(prompt("Digite su edad:"))

    if(genero=="hombre"){alert("Recibes 40.000 de ayuda mensual")}else
    if(genero=="mujer"){console.log(chicas())}
    salir=String(prompt("desea salir? si - no"))
}while(salir !== "si")