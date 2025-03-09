pitido=String(prompt("¿Su computadora emite un pitido?"))
gira=String(prompt("¿Su disco duro o unidad gira?"))
if(pitido == "si" && gira == "si"){
    alert("la computadora esta averiada, pongase en contacto tecnico con nosotros...")
}else if(pitido == "si" && gira == "no"){
    alert("la computadora esta averiada, Verificar contactos de la unidad...")
}else if(pitido == "no" && gira == "si"){
    alert("la computadora esta averiada, Traiga la computadora para repararla en la central...")
}else if(pitido == "no" && gira == "no"){
    alert("la computadora esta averiada, Compruebe las conexiones de altavoces...")
}