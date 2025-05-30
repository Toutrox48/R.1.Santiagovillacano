let historial: number[] = [0,0,0,0,0];
let total: number = 0;
let saldo: number = 0;

const retiro: any = () => {
    let hist : string = "Historial: \n\n";

    for (let i = 0; i < historial.length; i++) {
        hist += `${i+1}: ${historial[i]} \n`;
    }
    alert(hist)
}

console.log(retiro())

