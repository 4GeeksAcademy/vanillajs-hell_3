let pronombre = ["El", "Nuestro", "Los"];
let adjetivo = ["gran", "pequeño"];
let nombre = ["campeon", "tarado", "sorprendido"];
let dominio = [".com", ".es", ".net", ".Viva Dani"];

function generador_de_Domain() {
  let random_pronombre =
    pronombre[Math.floor(Math.random() * pronombre.length)];
  let random_adjetivo = adjetivo[Math.floor(Math.random() * adjetivo.length)];
  let random_nombre = nombre[Math.floor(Math.random() * nombre.length)];
  let random_dominio = dominio[Math.floor(Math.random() * dominio.length)];

  return `${random_pronombre}${random_adjetivo}${random_nombre}${random_dominio}`;
}

console.log(generador_de_Domain());
