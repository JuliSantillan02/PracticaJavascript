// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y 
// seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let numero = 0
do {
    let numeroIngresado = parseInt(prompt("Ingrese un número: "))
    if(isNaN(numeroIngresado)){
       alert("Ingrese un número: ")
       numeroIngresado = (prompt("Ingrese un número"))
    }
    else{
        numero = numeroIngresado + numero
    }
} while (confirm("¿Desea continuar?"));
console.log("La suma total de los números introducidos es: ", numero)