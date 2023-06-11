// Generamos un numero aleatorio
const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1;
    
};

// Funcion que verifica si el numero es correcto o no 
const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if(numeroSecreto === numeroAdivinado){
        console.log("Felicitaciones!! Adivinaste.")
    }else if(numeroSecreto < numeroAdivinado ){
        console.log("El numero secreto es menor. Sigue intentando!")
    }else{
        console.log("El numero secreto es mayor. Sigue intentando!")
    }
}
    
module.exports= {generarNumeroAleatorio, verificarAdivinanza}
