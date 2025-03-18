const codigolibros = [10,25,60,45,80,15,70];
const filtrarlibros = codigolibros.filter(codigo => codigo < 50)
console.log(filtrarlibros);

const precioproduct = [500,1200,300,1500,800];
const preciosaltos = precioproduct.filter(precio => precio > 1000  )
console.log(preciosaltos);

const asistent = new Map ([[1,"ana"],[2,"luis"]]);
const agregar = (map,id,nombre) => map.set(id,nombre);
agregar(asistent,3,"pablo");
console.log(asistent);

const asistentesConferencia = new Map([[101, "Carlos"], [102, "María"], [103, "José"]]);
const verificarAcceso = codigo => asistentesConferencia.has(codigo);
console.log(verificarAcceso(102)); // true
console.log(verificarAcceso(104)); // false

const productosVendidos = new Set([1001, 1002, 1003]);
const productoVendido = codigo => productosVendidos.has(codigo);
console.log(productoVendido(1002)); // true
console.log(productoVendido(1004)); // false

const socios = new Set([5001, 5002, 5003]);
const agregarSocio = codigo => socios.add(codigo);
agregarSocio(5004);
console.log(socios); // Set(4) { 5001, 5002, 5003, 5004 }

const puntajes = [85, 92, 78, 95, 88];
const mapPuntajes = new Map(puntajes.map((puntaje, indice) => [indice, puntaje]));
mapPuntajes.set(5, 90);
console.log(mapPuntajes); // Map(6) { 0 => 85, 1 => 92, 2 => 78, 3 => 95, 4 => 88, 5 => 90 }

const proyectos = [
    new Map([["nombre", "Proyecto A"], ["presupuesto", 5000]]),
    new Map([["nombre", "Proyecto B"], ["presupuesto", 8000]])
  ];
  const nuevoProyecto = new Map([["nombre", "Proyecto C"], ["presupuesto", 6000]]);
  proyectos.push(nuevoProyecto);
  console.log(proyectos);