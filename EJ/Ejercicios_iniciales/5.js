let ticket = String(prompt("de que numero es su tiquete: (numeros de prioridad: 1,2)"))

ticket == "1"? console.log(`el Tiquete ${ticket} puede pasar`) 
        : ticket == "2"? console.log(`el Tiquete ${ticket} puede pasar`)
        : console.log(`turno n°${turno} ha caducado, tome otro turno por favor`);