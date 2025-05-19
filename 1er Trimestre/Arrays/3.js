let fila_mercado = new Map([
    [1,""],[2,""],[3,""],[4,""],[5,""],[6,""],[7,""]
])
cantidad = 0
//Consulta de la gente en la fila
const fila = () =>{
    orden_fila = "Orden de la fila del mercado:\n"
    for (let i = 1; i <= cantidad; i++) {
        const valor = fila_mercado.get(i) 
        orden_fila += `${i}.${valor}\n`    
    }
    alert(orden_fila)
}
//Atencion del primer cliente de la fila
const salida = () => {
    atendido = `${fila_mercado.get(1)} ha sido atendid@.\nEl orden de la fila actual es:\n`
    cantidad--
    for (let i = 1; i <= cantidad; i++) {
        fila_mercado.set(i,(fila_mercado.get(i+1)))
        const valor = fila_mercado.get(i) 
        atendido += `${i}.${valor}\n`    
    }
    fila_mercado.delete(7)   
    alert(atendido)  
}
//Ingreso de la gente a la fila
const Entrada = () =>{
    llegada = String(prompt(`Cual es el nombre de aquel que desea ingresar a la fila:`))
    fila_mercado.set((cantidad+1),(llegada))
    orden_fila=`El nuevo orden de la fila es:\n`
    cantidad++
    for (let i = 1; i <= cantidad; i++) {
        const valor = fila_mercado.get(i) 
        orden_fila += `${i}.${valor}\n`    
    }
    alert(orden_fila)
}
//consulta
while(true){
    var op = Number(prompt ("Digite:\n(1)-para ver del orden de la fila\n(2)-para atender al primero\n(3)-para ingresar a alguien a la fila\n(4)-salir"))
    if(op == 2){
        if(cantidad === 0){
            alert("La fila esta esta vacia...")
        }else if(cantidad > 0){
            console.log(salida())
        }
    }else if(op == 1){
        console.log(fila())
    }else if(op == 4){
        break
    }else if(op == 3 ){
        if(cantidad === 7){
            alert("La fila esta llena, espere hasta que el primero de la fila sea atendido...")
        }else if(cantidad < 7){
            console.log(Entrada())
        }
    }  
}