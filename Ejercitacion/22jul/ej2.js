// 📌 2. Notas de examen
// Instrucciones:

// Pedí al usuadio que ingrese una nota, del 1 al 10

// si ingresa 10 debes devolverle "EXCELENTE 10 TE FELICITO"

// si ingresa 8 o 9 debes devolverle "Muy bueno!"

// si ingresa 6 o 7 debes devolverle "Bueno"

// si ingresa 4 o 5 debes devolverle "Desaprobado"

// si ingresa 3, 2 o 1 debes devolverle "Desaprobado Malisimo a Marzo"

// si el valor ingresado no esta en el rango debe mostrar al usuario un msj que diga que ingrese
// un numero valido entre 1 y 10

let nota = parseInt(prompt("Ingrese una nota del 1 al 10"))

switch (true) {
    case nota === 10:
        console.log("EXCELENTE 10, TE FELICITO");
        break;
    case nota >= 8:
        console.log("Muy bueno!")
        break;
    case nota >= 6:
        console.log("Bueno")
        break;
    case nota >= 4:
        console.log("Desaprobado");
        break;
    case nota >= 1:
        console.log("Desaprobado Malisimo a Marzo");
        break;
    default:
        console.log("Ingrese un nÚmero valido entre 1 y 10")
        break;
}