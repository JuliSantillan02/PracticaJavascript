// 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario 
// selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

let ciudades = []
let ciudad 

while (true) {
    ciudad = (prompt("Ingrese el nombre de una ciudad (presione Cancelar para terminar): "))
    
    if(ciudad === null){
        break;
    }

    ciudades.push(ciudad)
}

console.log(ciudades)

// // Mostrar la longitud del arreglo.
console.log(ciudades.length)

// // Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
console.log(ciudades[0])
console.log(ciudades[2])
console.log(ciudades.length -1)

// Añade en última posición la ciudad de París.
ciudades.push("París")
console.log(ciudades)

// Escribe por pantalla el elemento que ocupa la segunda posición.
console.log(ciudades[1])

// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
ciudades[1] = "Barcelona"
console.log(ciudades)