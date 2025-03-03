let cv=prompt("En que clase se registro para el vuelo: (economica) o (ejecutiva)")

if(cv=="economica"){
    alert(`pertenece a la clase ${cv}...`)
}else if(cv=="ejecutiva"){
    alert(`pertenece a la clase ${cv}...`)
}else{
    alert("Su ticket es invalido o ha caducado, reviselo o pregunte en servicio al cliente...")
}