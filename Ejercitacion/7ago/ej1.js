// 📝 Ejercicio 1
// =====================
// Crear un objeto llamado "producto" con las propiedades: nombre, precio y stock.
// Mostrar el nombre y el stock por consola usando desestructuración.

let producto = {
    nombre:"papas",
    precio: 1200,
    stock: 200,
}

const {nombre, stock} = producto
console.log("nombre: " , nombre)
console.log("stock: ", stock)