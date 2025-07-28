// 🧪 Ejercicio 1: Contador de múltiplos
// ✅ Tipo: for
// 🎯 Objetivo: Usar bucle con condición
// 🧠 Habilidades: iteración, condición dentro del bucle

// Consigna:
// Mostrar por consola los números del 1 al 50 que sean múltiplos de 3. 
// Al final, mostrar cuántos múltiplos de 3 hubo.


let contador = 0

for (let i = 1; i <= 50; i++) {
    if (i % 3 == 0); {
       console.log(i, "es multiplo de 3")
       contador++;
    }
    
}

console.log("En total hay " ,contador, "multiplos de3")