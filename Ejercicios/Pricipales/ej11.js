dia=prompt("¿Que dia de la semana es hoy?")
clases=["algoritmos", "Diseño", "descansar"]
if (dia=="lunes"){
    alert(`Hoy toca ${clases[0]}`)
}else if (dia=="martes"){
    alert(`Hoy toca ${clases[1]}`)
}else if (dia=="miercoles"){
    alert(`Hoy toca ${clases[0]}`)
}else if (dia=="jueves"){
    alert(`Hoy toca ${clases[1]}`)
}else if (dia=="viernes"){
    alert(`Hoy toca ${clases[0]}`)
}else if (dia=="sabado"){
    alert(`Hoy toca ${clases[2]}`)
}else if (dia=="domingo"){
    alert(`Hoy toca ${clases[2]}`)
}else {alert("...¿Que?...")}