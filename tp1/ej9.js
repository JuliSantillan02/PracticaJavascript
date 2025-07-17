// 9️⃣ Pedí dos números al usuario y mostrá comparaciones con operadores lógicos. 

let num1 = (Number(prompt("Ingrese un número")))
let num2 = (Number(prompt("Ingrese otro número")))

resultado = num1 > num2 && num1 < num2
console.log(resultado)

resultado1 = num1 < num2 || num1 < num2
console.log(resultado1)

resultado2 = num1 > num2 && !(num1 < num2)
console.log(resultado2)