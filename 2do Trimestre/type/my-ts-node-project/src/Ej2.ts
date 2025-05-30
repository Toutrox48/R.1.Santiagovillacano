class Calculadora {
static PI: number = 3.14159;
static contador: number = 0;
static kilo_a_milla: number = 0.621371;
static milla_a_Kilo: number = 1.609;

        constructor() {
    Calculadora.contador++;
    }

    static sumar(a: number, b: number): number {
        return a + b;
    }
    
    static obtenerInstanciasCreadas(): number {
        return Calculadora.contador;
    }

    static KilometrAMillas(b:number): number {
        return b * Calculadora.kilo_a_milla;
    }

    static MillasAKilometros(a:number): number {
        return a * Calculadora.milla_a_Kilo;
    }

}
// Uso
console.log(Calculadora.PI); // 3.14159
console.log(Calculadora.sumar(5, 3)); // 8
const calc1 = new Calculadora();
const calc2 = new Calculadora();
console.log(Calculadora.obtenerInstanciasCreadas()); // 2
console.log(Calculadora.KilometrAMillas(10)); // 6.21371
console.log(Calculadora.MillasAKilometros(6)); // 10