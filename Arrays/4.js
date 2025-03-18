const productos = new Map([
    [1, { nombre: "gomita", cantidad: 10 }],
    [2, { nombre: "chicle", cantidad: 10 }],
    [3, { nombre: "chocolate", cantidad: 10 }],
    [4, { nombre: "cocacola", cantidad: 10 }],
    [5, { nombre: "pepsi", cantidad: 10 }],
  ]);
  
  let monedas = 0;
  let seleccion = 0;
  
  const mostrar_productos = () => {
    let productos_str = "Productos disponibles - cantidad - precio:\n";
    productos.forEach((producto, codigo) => {
      productos_str += `${codigo}. ${producto.nombre} - ${producto.cantidad} - 1 moneda\n`;
    });
    alert(productos_str);
  };
  
  const ingresar_monedas = () => {
    monedas++;
    alert(`Ingresaste 1 moneda...\nAhora tienes: ${monedas}`);
  };
  
  const compra = () => {
    if (monedas > 0) {
      const producto = productos.get(Number(seleccion));
      if (producto && producto.cantidad > 0) {
        monedas--;
        producto.cantidad--;
        productos.set(Number(seleccion),producto);
        alert(
          `Usted ha comprado 1 ${producto.nombre}. Quedan ${producto.cantidad} unidades.\nTe quedan ${monedas} monedas.`
        );
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
    alert("Máquina reabastecida.");
  };
  
  while (true) {
    const op = Number(
      prompt(
        "Digite:\n(1)-Para introducir una moneda.\n(2)-Para comprar un producto.\n(3)-Para reabastecer la máquina.\n(4)-salir.\n"
      )
    );
    if (op === 1) {
      ingresar_monedas();
    } else if (op === 2) {
      let productos_str =
        "Producto - cantidad - precio: \n(digite el número para seleccionar su compra)\n\n";
      productos.forEach((producto, codigo) => {
        productos_str += `${codigo}. ${producto.nombre} - ${producto.cantidad} - 1 moneda\n`;
      });
      seleccion = prompt(productos_str);
      compra();
    } else if (op === 3) {
      reabastecer_maquina();
    } else if (op === 4) {
      break;
    }
  }