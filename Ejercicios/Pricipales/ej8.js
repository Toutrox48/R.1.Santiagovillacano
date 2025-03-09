let email="santi@gmail.com"
let contr="1234"
ing_n=String(prompt("Digite su nombre:"))
ing_e=String(prompt("Digite su correo:"))
ing_c=String(prompt("Digite si Contraseña:"))

if (ing_e == email && ing_c == contr){
    alert(`Señor(a) ${ing_n} sea bienvenid@...`)
}else{
    alert(`contraseña o correo incorrectos...`)
}