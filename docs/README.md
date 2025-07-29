# Bienvenido al Challenge de amigo secreto!!!

Este proyecto es un pequeño desafío para fortalecer habilidades en lógica de programación mediante JavaScript. Consiste en ingresar nombres de amigos, listarlos y realizar un sorteo para seleccionar uno de ellos aleatoriamente.

---

## Descripción

El programa permite:

- Agregar nombres de amigos a una lista.
- Mostrar la lista actualizada de amigos.
- Realizar un sorteo para seleccionar aleatoriamente un amigo de la lista.
- Reiniciar el sorteo si se agregan nuevos amigos después de haber realizado un sorteo.

---

## Funcionalidades

- **Agregar amigo:** Permite ingresar un nombre en un campo de texto y añadirlo a la lista.
- **Mostrar amigos:** Muestra la lista de amigos agregados en pantalla.
- **Sortear amigo:** Selecciona aleatoriamente un nombre de la lista y lo muestra.
- **Reinicio automático:** Si se agrega un amigo después de haber hecho un sorteo, el sistema reinicia el sorteo y limpia la lista para comenzar de nuevo.

---

## Estructura del código

- `amigos` — Array que almacena los nombres de los amigos.
- `sorteado` — Booleano que indica si ya se realizó un sorteo.
- `agregarAmigo()` — Función que agrega un nombre al array y actualiza la lista en pantalla.
- `recorrerArrayDeAmigos()` — Función que recorre el array y muestra todos los nombres en la interfaz.
- `sortearAmigo()` — Función que selecciona aleatoriamente un amigo de la lista y muestra el resultado.

---

## Uso

1. Ingresar el nombre de un amigo en el campo de texto.
2. Hacer clic en el botón para agregar el amigo a la lista.
3. Repetir los pasos anteriores para añadir más amigos.
4. Hacer clic en el botón de sorteo para seleccionar un amigo al azar.
5. Si se agrega un amigo después del sorteo, el sistema reiniciará la lista para comenzar un nuevo sorteo.

---

## Notas

- Si se intenta agregar un amigo sin escribir un nombre, el sistema mostrará una alerta pidiendo que se ingrese un nombre.
- Si se intenta sortear sin haber ingresado amigos, el sistema mostrará una alerta indicando que se deben ingresar nombres primero.

---

## Tecnologías utilizadas

- JavaScript
- HTML (para la estructura y elementos de interacción)
