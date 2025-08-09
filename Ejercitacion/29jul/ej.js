// contar los numeros mayores que 10

let numeros1 = [2, 12, 8, 20, 3, 15]
let cantidadNumeros = 0
for (let i = 0; i < numeros1; i++) {
    if (numeros1[i] > 10) {
    console.log(numeros1[i]);
    cantidadNumeros++
    }
}
console.log("La cantidad de números mayores que 10 es de ", cantidadNumeros)