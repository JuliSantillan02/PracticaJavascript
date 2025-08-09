// 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser 
// realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

function tabla(numero) {
    console.log("Tabla de multiplicar del numero ",numero)
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}

let numeroUsuario = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar"))
let numero = numeroUsuario

(tabla(numeroUsuario))