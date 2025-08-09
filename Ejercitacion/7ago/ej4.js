// 📝 Ejercicio 4
// =====================
// Crear un array de objetos llamado "alumnos" con al menos 3 alumnos,
// cada uno con propiedades: nombre, nota.
// Mostrar "Aprobado" o "Desaprobado" según si la nota es mayor o igual a 6, usando el operador ternario.



const alumnos = [
    {nombre: "Julieta", nota: 10},
    {nombre: "Sofia", nota: 9},
    {nombre: "Bruno", nota: 8},
    {nombre: "Julieta", nota: 4}
]

for (let i = 0; i < alumnos.length; i++) {
    const element = alumnos[i];
}

let condicion = nota >= 6 ? "Aprobado" : "Desaprobado"

console.log(condicion)