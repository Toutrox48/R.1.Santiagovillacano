let na = String(prompt("Buenas, Porfavor Digite su nombre:"))
let horas = Number(prompt(`¿cuantas horas trabaja ususario ${na}?`))
if(horas<=10){
    alert(`Señor/a ${na}, el número de horas es ${horas} y su salario equivale a ${horas*33000}.`)
}else if(horas>10){
    alert(`Señor/a ${na}, el número de horas es ${horas} y su salario equivale a ${horas*33000}.`)
}else{alert("...Error...")}