// 📝 Ejercicio 3
// =====================
// Crear una función llamada "mostrarInfo" que reciba un objeto y lo recorra con for...in,
// mostrando: "clave: valor" en consola.

let producto = {
    nombre:"papas",
    precio: 1200,
    stock: 200,
}

function mostrarInfo(objeto){
    for (let propiedad in objeto) {
           console.log(propiedad + ": " + objeto[propiedad])
        }
    }

    console.log(mostrarInfo(producto))

    
