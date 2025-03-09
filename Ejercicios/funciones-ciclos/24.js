Operador = String(prompt("Bienvenid@ a Celu-Movil, escriba su operador para poder cobrarle el plan pospago de febrero, de lo contrario cortaremos su sercivio: tigo claro movistar"))
min = parseInt(prompt("Ingrese la cantidad de minutos internacionales que gasto:"))
datos = String(prompt("Incluyo plan de datos: (si) - (no)"))
if(Operador=="tigo"){
    let todo = (45000+(min*200))
    if (datos == "si"){
        todo += 12000
    }
    alert(`Por ser ${Operador}, pasar ${min} minutos y ${datos} tener datos,usted nos debe un total de ${todo}`)
}else if(Operador=="claro"){
    let todo = (30000+(min*100))
    if (datos == "si"){
        todo += 18000
    }
    alert(`Por ser ${Operador}, pasar ${min} minutos y ${datos} tener datos,usted nos debe un total de ${todo}`)
}else if(Operador=="Movistar"){
    let todo = (40000+(min*250))
    if (datos == "si"){
        todo += 8000
    }
    alert(`Por ser ${Operador}, pasar ${min} minutos y ${datos} tener datos,usted nos debe un total de ${todo}`)
}