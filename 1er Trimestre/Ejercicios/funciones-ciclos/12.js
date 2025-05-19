function multi(n1,n2) {return n1*n2}

do{
let na = String(prompt("Buenas, Porfavor Digite su nombre:"))
let horas = Number(prompt(`¿cuantas horas trabaja ususario ${na}?`))
if(horas<=10){
    alert(`Señor/a ${na}, el número de horas es ${horas} y su salario equivale a ${multi(horas,30000)}.`)
}else if(horas>10){
    alert(`Señor/a ${na}, el número de horas es ${horas} y su salario equivale a ${multi(horas,33000)}.`)
}else{alert("...Error...")}
salir=String(prompt("desea salir? si - no"))
}while(salir !== "si")