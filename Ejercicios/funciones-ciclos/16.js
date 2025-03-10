function nota(n1,n2,n3,n4,n5){return ((n1+n2+n3+n4+n5)/50)*100}

do{
    fis = Number(prompt("Cuanto sacaste en Fisica: (de 1 a 10)")) 
    qui = Number(prompt("Cuanto sacaste en Quimica: (de 1 a 10)"))
    bio = Number(prompt("Cuanto sacaste en Biologia: (de 1 a 10)"))
    mat = Number(prompt("Cuanto sacaste en Matematicas: (de 1 a 10)"))
    inf = Number(prompt("Cuanto sacaste en Informatica: (de 1 a 10)"))

    total = nota(fis,qui,bio,mat,inf)

    if(total<=59){
        alert(`Tu nota final es de un ${total}% de exito. Que mal...`)
    }else if(total>=60 && total<=79){
        alert(`Tu nota final es de un ${total}% de exito. Estas bien...`)
    }else if(total>=80){
        alert(`Tu nota final es de un ${total}% de exito. Te fue Genial... Tu promedio fue de ${total/10}`)
    }
    salir=String(prompt("desea salir? si - no"))
}while(salir !== "si")