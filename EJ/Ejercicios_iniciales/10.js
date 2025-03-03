let encendido = false
let velocidad = 134

encendido == true ? console.log(`su carro esta encendido`) :
    velocidad == 0 ? console.log(`carro frenado`) :
        velocidad > 0 && velocidad <=100 ? console.log(`carro en marcha`) :
            console.log(`evite un accidente ... exceso de velocidad`) 
   
