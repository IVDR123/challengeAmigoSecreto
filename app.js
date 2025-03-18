let listaAmigos = [];

/**
 * Agrega un nuevo amigo a la lista de amigos.
 * Verifica que el campo ingresado no esté vacío y actualiza la lista visual.
 */
function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;

  if (nombreAmigo.trim() === "") {
    alert("Por favor, inserte un nombre");
  } else {
    listaAmigos.push(nombreAmigo);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigo();
  }
}
/**
 * Actualiza la visualización de la lista de amigos
 */
function mostrarListaAmigo() {
  let listaHTML = document.querySelector("#listaAmigos");
  listaHTML.innerHTML = "";

  for (let index = 0; index < listaAmigos.length; index++) {
    const element = listaAmigos[index];

    let listaItem = document.createElement("li");
    listaItem.textContent = element;
    listaHTML.appendChild(listaItem);
  }
}

/**
  Muestra un amigo de la lista de amigos de manera aleatoria.
  Verifica que la lista no esté vacía antes de realizar el sorteo.
 */
function sortearAmigo() {
  let cantidadAmigos = listaAmigos.length;
  if (cantidadAmigos === 0) {
    alert("Por favor, inserte un nombre antes de sortear");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = listaAmigos[indiceAmigo];
  }
}
