// Escribe un programa que pida dos números y escriba en la pantalla 
// cual es el mayor.
// Ejemplo: 
// input: 15 , 3
// Output: El 15 es el número más grande

let numero1 = parseInt(prompt("Ingrese un número"))
let numero2 = parseInt(prompt("Ingrese otro número"))
let numeroMayor = Math.max(numero1,numero2)

console.log("El " + numeroMayor + " es el número más grande")
