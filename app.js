/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema. */

let listaAmigos = [];
//Implementa una función para agregar amigos
function agregarAmigo() {
    const ingresarAmigo = document.getElementById("amigo");
    const amigo = ingresarAmigo.value.trim();

    if (amigo !== "") {
        listaAmigos.push(amigo);
        ingresarAmigo.value = ""; // Limpiar el campo de entrada
//        mostrarListaAmigos();
        console.log(listaAmigos)

    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}