// 📌 1. Nivel de batería del celular
// Instrucciones:

// Pedí al usuario que ingrese el nivel de batería (un número del 0 al 100) usando prompt().

// Convertí ese valor a número utilizando parseInt().

// Usá una estructura if / else if / else para mostrar por consola uno de los siguientes mensajes, según el nivel de batería ingresado:

// Si el valor es mayor o igual a 80, mostrar: "Batería llena 🔋".

// Si el valor es mayor o igual a 30, mostrar: "Batería media ⚠️".

// Si el valor es menor a 30, mostrar: "Batería baja, conectá el cargador 🔌".

let nivelBateria = parseInt(prompt("Ingrese el nivel de batería:"))

if (nivelBateria >= 80){
    console.log("Batería llena")
}
else if (nivelBateria >= 30){
    console.log("Batería media")
}
else{
    console.log("Bateria baja, conectá el cargador")
}