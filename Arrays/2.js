let historial = [0,0,0,0,0]
let total = 0
let saldo = 0
const retirosdepositos = () => {
    histc="Historial:\n"
    historial.shift() ; historial.push(numero)

    for(i=0 ; i < 5 ; i++){
        total+=(historial[i])
        histc += `${historial[i]} $\n`
        console.log(historial[i])
    }
    histc += `Saldo: ${total} $`
    alert(histc)
    histc=""
    total=0
    console.log(saldo)
}
const consulta = () => {
    histc="Cuenta:\n"

    for(i=0 ; i < 5 ; i++){
        total+=(historial[i])
        histc += `${historial[i]}\n`
        console.log(historial[i])
    }
    histc += `Saldo: ${total}`
    alert(histc)
    histc=""
}


while(true){
    var op = Number(prompt ("Digite:\n(1)-para depositar dinero\n(2)-para retirar dinero\n(3)-para consultar\n(4)-salir"))
    if(op == 3){
        console.log(consulta())
    }else if(op == 1){
        numero=(Number(prompt("Ingrese el valor a depositar:")))
        saldo += numero
        if(numero <= 500 && numero > 0){
            console.log(retirosdepositos())
        }else{
            alert("este valor no aplica para el tramite...")
        }
        
    }else if(op == 2){
        numero=(Number(prompt("Ingrese el valor a retirar:")))*-1
        if(numero >= -500 && numero < 0 && saldo >= numero){
            saldo += numero
            console.log(retirosdepositos())
        }else if(numero >= -500 && numero < 0 && saldo < numero){
            alert("Lo sentimos pero no tiene el saldo sufuciete...")
        }else{
            alert("este valor no aplica para el tramite...")
        }
    }else if(op == 4){
        break
    }





}
