do{
taladro= String(prompt("¿hacia donde desea que vaya el taladro? (arriba) o (abajo)"))

if(taladro=="arriba"){
    alert("El taladro a subido...")
}else if (taladro=="abajo"){
    alert("El taladro a bajado...")
}else{
    alert("El taladro se quedo estatico...")
}
salir=String(prompt("desea salir? si - no"))
}while(salir == "no")