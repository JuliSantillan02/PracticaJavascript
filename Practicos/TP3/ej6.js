// 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro 
// y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

let lado1 = parseInt(prompt("Ingresar la longitud de un lado del rectángulo: "))
let lado2 = parseInt(prompt("Ingresar la longitud del otro lado del rectángulo: "))

function calcularPerimetro(lado1, lado2) {
    return 2 * (lado1 + lado2)
}

let perimetro = calcularPerimetro(lado1, lado2)
console.log("El perímetro del rectángulo es ",perimetro)