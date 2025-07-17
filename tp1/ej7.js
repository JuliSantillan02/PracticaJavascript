// 7️⃣ Preguntale al usuario si tiene DNI y mostrá si puede ingresar al sistema. 
// 👉 Para ingresar debe tener 18 años o más y tener DNI. 
// 👉 Escribí "sí" o "no" y convertí la respuesta a minúscula para compararla.

let dni = prompt("¿Tenés DNI? (si o no)")

let edad = (Number(prompt("¿Cuántos años tenés?")))

if (dni === aceptar && edad >= 18) {
    console.log("Podés ingresar al sistema")
}   else {
    console.log("No podés ingresar al sistema")
}

