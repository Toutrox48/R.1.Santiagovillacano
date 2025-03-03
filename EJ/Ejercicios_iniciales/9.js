let direccion = prompt("digita la direccion del dron: Arriba(ar) Abajo(ab) Derecha(de) Izquierda(iz)")

if(direccion=="ar"){
    alert("El dron va para arriba");
}else if(direccion=="ab"){
    alert("El dron va para abajo");
}else if(direccion=="iz"){
    alert("El dron va para la izquierda");
}else if(direccion=="de"){
    alert("El dron va para la derecha");
}else{
    alert("dron dañado");
}