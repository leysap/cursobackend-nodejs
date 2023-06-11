const readlineSync = require("readline-sync");
const { generarNumeroAleatorio, verificarAdivinanza } = require("./adivinanza")

//OBTENEMOS EL NUMERO QUE INGRESO EL USUARIO
const obtenerNumeroUsuario= () => {
    return readlineSync.question("Ingrese un numero: ");
}

// JUEGO QUE TOMA EL NUMERO INGRESADO POR EL USUARIO Y LO VERIFICA
const juegoAdivinanza = () => {
    const numero_secreto = generarNumeroAleatorio();
    let numero_adivinado = 0;
    console.log("¡Bienvenido a Adivina el numero secreto!")
    console.log("Intenta adivinar el numero del 1 al 100")
 
    while(numero_secreto !== numero_adivinado){
        numero_adivinado = Number(obtenerNumeroUsuario());
        verificarAdivinanza(numero_secreto, numero_adivinado)
    }

}
juegoAdivinanza();