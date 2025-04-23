let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];
    
let consulta = window.prompt(`Que desea hacer? \n(1).ingresar un nuevo  contacto\n(2).mostrar el primer contacto \n(3).mostrar el ultimo contacto\n\ningrese el numero de la accion: `)
    
let last = contacts.length - 1;

console.log("Before debugger");
debugger;
console.log("After debugger");
    
let resultados;

switch (consulta){
        
    case "1" : resultados = contacts[contacts.length] = {
            name: prompt("señor/a usuario ingrese el nombre del nuevo contacto"),
            phone: prompt("señor/a usuario ingrese el numero del nuevo contacto"),
            email: prompt("señor/a usuario ingrese el email del nuevo contacto")}
            break;
            
    case "2" : resultados = `${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`; break;
        
    case "3" : resultados = `${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`; break;
    }

alert(resultados)    
