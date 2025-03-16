codigo_productos= new Map([
[1,"gomita"],[2,"chicle"],[3,"chocolate"],
[4,"cocacola"],[5,"pepsi"]  
])

cantidad_productos= new Map([
["gomita",10],["chicle",10],["chocolate",10],
["cocacola",10],["pepsi",10]  
])

monedas = 0
seleccion = 0
const mostrar_productos = () => {
    let productos = `Productos disponibles - cantidad - precio:\n`
    for (let i = 1; i <= 5; i++) {
        nombre = codigo_productos.get(i)
        cantidad = cantidad_productos.get(codigo_productos.get(i)) 
        productos += `${i}. ${nombre} - ${cantidad} - 1 moneda\n`
    }
    alert(productos)
}


const ingresar_monedas = () =>{
    monedas++
    alert(`Ingresaste 1 moneda...\nAhora tienes: ${monedas}`)
}

const compra = () =>{
    monedas--
    resta=cantidad_productos.get(codigo_productos.get(seleccion))-1
    alert(`Usted a comprado 1 ${codigo_productos.get(seleccion)} quedaron ${resta}\nTe quedan ${monedas} monedas`)
}

alert(compra())

while(true){
    var op = Number(prompt ("Digite:\n(1)-Para introducir una moneda.\n(2)-Para comprar un producto.\n(3)-Para reabastecer la maquina.\n(4)-salir.\n"))
    if(op == 1){
        console.log(ingresar_monedas())
    }else if(op == 2){
            let productos = `Producto - cantidad - precio: \n(digite el numero para seleccionar su compra)\n\n`
            for (let i = 1; i <= 5; i++) {
                nombre = codigo_productos.get(i)
                cantidad = cantidad_productos.get(codigo_productos.get(i)) 
                productos += `${i}. ${nombre} - ${cantidad} - 1 moneda\n`
            }
            seleccion = prompt(productos)
            console.log(compra());
            
    }else if(op == 3){
        
    }else if(op == 4 ){
        break
    }  
}