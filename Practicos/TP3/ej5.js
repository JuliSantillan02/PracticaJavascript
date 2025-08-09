// 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, 
// la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

let usuario = prompt("Ingrese un texto")
verTexto(usuario)

function verTexto(texto) {
    if (texto === "") {
    console.error("El texto está vacío");
}   else if (texto === texto.toUpperCase()) {
    console.log("El texto está en mayúscula");
}   else if (texto === texto.toLowerCase()) {
    console.log("El texto está en minúscula");
}   else {
    console.log("El texto está combinado");
}
}