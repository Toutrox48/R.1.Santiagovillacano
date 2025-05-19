const productos = new Map([
    [1, { nombre: "gomita", cantidad: 10 }],
    [2, { nombre: "chicle", cantidad: 10 }],
    [3, { nombre: "chocolate", cantidad: 10 }],
    [4, { nombre: "cocacola", cantidad: 10 }],
    [5, { nombre: "pepsi", cantidad: 10 }],
    [6, { nombre: "fanta", cantidad: 10 }]
]);

let monedas = 0;
let seleccion = 0;

const mostrar_productos = () => {
    let productosDiv = document.getElementById("productos");
    productosDiv.innerHTML = "";
    productos.forEach((producto, codigo) => {
        let productoDiv = document.createElement("div");
        productoDiv.classList.add("producto");
        productoDiv.textContent = `${codigo}. ${producto.nombre} - ${producto.cantidad} - 1 moneda`;
        productoDiv.addEventListener("click", () => {
            seleccion = codigo;
            compra();
        });
        productosDiv.appendChild(productoDiv);
    });
};

const ingresar_monedas = () => {
    monedas++;
    actualizarMonedas();
};

const compra = () => {
    if (monedas > 0) {
        const producto = productos.get(Number(seleccion));
        if (producto && producto.cantidad > 0) {
            monedas--;
            producto.cantidad--;
            productos.set(Number(seleccion), producto);
            alert(`Usted ha comprado 1 ${producto.nombre}. Quedan ${producto.cantidad} unidades.\nTe quedan ${monedas} monedas.`);
            mostrar_productos();
            actualizarMonedas();
        } else {
            alert("Producto no disponible o cantidad insuficiente.");
        }
    } else {
        alert("Monedas insuficientes.");
    }
};

const reabastecer_maquina = () => {
    productos.forEach((producto) => {
        producto.cantidad = 10;
    });
    mostrar_productos();
    alert("Máquina reabastecida.");
};

const actualizarMonedas = () => {
    document.getElementById("monedas").textContent = `Monedas: ${monedas}`;
};

document.getElementById("ingresarMoneda").addEventListener("click", ingresar_monedas);
document.getElementById("reabastecer").addEventListener("click", reabastecer_maquina);

mostrar_productos();
actualizarMonedas();