// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];
let sorteado = false;

const agregarAmigo = () => {
  const texto = document.getElementById("amigo");

  if (texto.value === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(texto.value);

  if (sorteado) {
    sorteado = false;
    alert("Se reiniciara el sorteo.");
    amigos.length = 0;
    recorrerArrayDeAmigos();
  } else {
    recorrerArrayDeAmigos();
  }
};

const recorrerArrayDeAmigos = () => {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  amigos.forEach((nombre) => {
    lista.innerHTML += `<li>${nombre}</li>`;
  });
  return;
};

const sortearAmigo = () => {
  const lista = document.getElementById("listaAmigos");

  if (amigos.length === 0) {
    alert("Debes ingresar los nombres de tus amigos");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  lista.innerHTML = "";
  lista.innerHTML += `<li>Amigo sorteado: ${amigos[indice]}</li>`;
  sorteado = true;
};
