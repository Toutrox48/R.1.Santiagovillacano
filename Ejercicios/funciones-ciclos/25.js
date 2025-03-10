function sand(){
    pregunta = prompt(`Desea Añadir ${ingre[i]} a su sandwich? (si) - (no)`)
    if(pregunta=="si" && i == 0) {}
    if(pregunta=="si" && i == 1 || i == 2) {t += 3000}
    if(pregunta=="si" && i == 3) {t += 2500}
}
do{
    tamaño=String(prompt("¿De que tamaño desea su sandwich? Grande(g) o Pequeño (p)"))
    ingre=["tocineta", "jalapeño", "pavo", "Queso"]
    if(tamaño=="p"){t = 6000}else
    if(tamaño=="g"){t =12000}
    for (let i = 0; i <= 3; i++) {
        console.log(sand())
    } alert(`su total a pagar es de ${t}`)
    salir=String(prompt("desea salir? si - no"))
}while(salir !== "si")