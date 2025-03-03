let nombreBd= "emma"
let documentoBd= "4488123"
let placaIngresada= prompt("ingrese el numeto de su placa")
let nombreIngresado= prompt("Ingrese su nombre:")
let documentoIngresado= prompt("ingrese su documento:")


if(nombreIngresado == nombreBd && documentoIngresado == documentoBd){
    alert(`${nombreBd}, puede pasar por su vehiculo ${placaIngresada}`)
}else{
    alert("No se a registrado su auto en nuestros en nustros locales...");
}
