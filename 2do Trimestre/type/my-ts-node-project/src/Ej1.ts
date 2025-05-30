abstract class Figura {
protected color: string;
constructor(color: string) {
this.color = color;
}
// Método abstracto - debe ser implementado por las clases hijas
abstract calcularArea(): number;
// Método concreto - implementación compartida
mostrarColor(): string {
return `Esta figura es de color ${this.color}`;
}
}
// Implementación de una clase hija
class Cuadrado extends Figura {
private lado: number;
constructor(color: string, lado: number) {
super(color);
this.lado = lado;
}
calcularArea(): number {
return this.lado * this.lado;
}
}

class circulo extends Figura {
private radio: number;
constructor(color: string, radio: number) {
super(color);
this.radio = radio;
}
calcularArea(): number {
return Math.PI * this.radio * this.radio;
}

}
// Uso
const cuadrado = new Cuadrado("rojo", 5);
console.log(cuadrado.mostrarColor()); // "Esta figura es de color rojo"
console.log(cuadrado.calcularArea()); // 25
console.log(new circulo("azul", 3).calcularArea()); // 28.274333882308138