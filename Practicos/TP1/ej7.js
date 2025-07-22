// Escribe un programa que pida 3 números y escriba en la pantalla 
// el mayor de los tres.
// Ejemplo: 
// input: 15 , 3, 9
// Output: El 15 es el número más grande

let numero1 = parseInt(prompt("Ingrese un número"))
let numero2 = parseInt(prompt("Ingrese otro número"))
let numero3 = parseInt(prompt("Ingrese un tercer número"))
let numeroMayor = Math.max(numero1, numero2, numero3)

console.log("El " + numeroMayor + " es el número más grande")
