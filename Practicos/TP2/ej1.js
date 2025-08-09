// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, 
// si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad = parseInt(prompt("Ingrese su edad: "))

if (isNaN(edad)){
    console.log("La edad ingresada no es un número válido")
}
else{
    edad = parseInt(edad);
}
    if(edad >= 18){
    console.log("Ya podés conducir")
    }
    else{
    console.log("No podés conducir")
    }
