function mult3(n1,n2,n3){return n1*n2*n3}
function multi(n1,n2) {return n1*n2}
do{
let lavadora=Number(prompt("Que tipo de lavadora desea: Grande(1) Pequeña(2)"))
let cantidad=Number(prompt("¿Cuantas lavadoras desea?"))
let hora=Number(prompt(`¿cuantas horas desea usar la lavadora des tipo ${lavadora}?`))

lavadora == 1 ? costoh=4000: lavadora == 2 ? costoh=3000: alert("Error...Lavadora no identificada")

if(cantidad>3){
    pago_total=mult3(costoh,hora,cantidad)
    descuento=(pago_total-(multi(pago_total, 0.03)))
    alert(`El costo total de su compra tiene descuento por lo que tendra que pagar: ${descuento}`)
}else if(cantidad<=3){
    alert(`El costo total de su compra no tiene descuento por lo que tendra que pagar: ${mult3(costoh,horacantidad)}`)
}
salir=String(prompt("desea salir? si - no"))
}while(salir !== "si")