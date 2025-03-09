genero=String(prompt("Cual es su Genero:"))
años=Number(prompt("Digite su edad:"))

if(genero=="hombre"){alert("Recibes 40.000 de ayuda mensual")}else
if(genero=="mujer"){
    if(años<30){alert("no recibes nada...")}else
    if(años>=30 && años<=50){alert("Recibes 100.000 de ayuda mensual")}else
    if(años>50){alert("Recibes 120.000 de ayuda mensual")}
}