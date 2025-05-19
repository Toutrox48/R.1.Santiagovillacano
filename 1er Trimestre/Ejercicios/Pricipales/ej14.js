let lavadora=Number(prompt("Que tipo de lavadora desea: Grande(1) Pequeña(2)"))
let cantidad=Number(prompt("¿Cuantas lavadoras desea?"))
let hora=Number(prompt(`¿cuantas horas desea usar la lavadora des tipo ${lavadora}?`))

lavadora == 1 ? costoh=4000: lavadora == 2 ? costoh=3000: alert("Error...Lavadora no identificada")

if(cantidad>3){
    pago_total=(costoh*hora*cantidad)
    descuento=(pago_total-(pago_total*0.03))
    alert(`El costo total de su compra tiene descuento por lo que tendra que pagar: ${descuento}`)
}else if(cantidad<=3){
    pago_total=(costoh*hora*cantidad)
    alert(`El costo total de su compra no tiene descuento por lo que tendra que pagar: ${pago_total}`)
}