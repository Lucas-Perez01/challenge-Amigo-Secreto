// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

const agregarAmigo = () => {
  let texto = document.getElementById("amigo");

  if (texto.value == "") {
    alert("Por favor, inserte un nombre.");
    return;
  } else {
    amigos.push(texto.value);
    recorrerArrayDeAmigos();
  }
};

const recorrerArrayDeAmigos = () => {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  amigos.forEach((nombre) => {
    lista.innerHTML += `<li>${nombre}</li>`;
  });
};
