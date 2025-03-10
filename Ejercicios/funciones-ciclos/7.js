do{
let canoa=String(prompt("Que tipo de canoa tiene: (tipo-1) o (tipo-2)"))
if (canoa == "tipo-1"){
    alert(`Su canoa es del ${canoa}, pase por el canal 1`)
}else if (canoa == "tipo-2"){
    alert(`Su canoa es del ${canoa}, pase por el canal 2`)
}else{
    alert(`Su canoa no es valida para ingresar a nuestros canales`)
}
salir=String(prompt("desea salir? si - no"))
}while(salir == "no")