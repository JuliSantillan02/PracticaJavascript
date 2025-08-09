let palabras = ["sol", "luna", "estrella", "mar", "nube"]
let palabrasFiltradas = [];

for (let i = 0; i < palabras; i++){
    if (palabras[i].length > 4) {
    console.log(palabras[i]);
    palabrasFiltradas.push(palabras[i]);
    }

}
console.log(palabrasFiltradas);