let habitaciones =[0,0,1,0,0]

let ocupacion = ""
const ocupacionnes = ( ) =>{
    ocupacion = "Habitaciones:\n"
    for(i=0; i < (habitaciones.length); i ++){
        ocupacion += `habitación ${i+1}: ${habitaciones[i] === 0 ? "Desocupada":"Ocupada"
        } \n`
    }
    alert (ocupacion)
    ocupacion=""
}

const reservas = (n) => {
    if(n < 1 || n > 5){
        alert("No peseemos ese numero de habitacion en este hotel porfavor digite un numero entre (1-5)")
    }else if((habitaciones[n-1] === 1)){
        alert(`La habitacion ${n} se encuentra Ocupada...`)
    }else{
        alert(`La habitacion ${n} se encuentra Desocupada...\nLa reserva se realizo con exito...`)
        habitaciones[n-1] = 1
        ocupacionnes()
    }
}

const liberar = () => {
    if(n < 1 || n > 5){
        alert("No peseemos ese valor de habitacion en este hotel porfavor digite un numero entre (1-5)")
    }else if((habitaciones[n-1] === 0)){
        alert(`La habitacion ${n} ya se encuentra Desocupada...`)
    }else{
        alert(`La habitacion ${n} se a Desocupado...`)
        habitaciones[n-1] = 0
        ocupacionnes()
    }
}

while(true){
    consulta=prompt("-Digite:\n(1) para consultar disponibilidad\n(2) para realizar una reserva\n(3) para desocupar una habitacion")
    if(consulta == 1){ocupacionnes()}
    else if (consulta == 2){
        n=prompt("Bienvenido...  Digite cual es la habitacion que desea (1 - 5)")
        reservas(n)
    }else if (consulta ==3){
        n=prompt("Bienvenido...  Digite cual es la habitacion que desea Desocupar (1 - 5)")
        liberar(n)
    }
}