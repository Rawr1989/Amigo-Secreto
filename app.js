/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema. */

const listaAmigos = [];

//Implementa una función para agregar amigos
function agregarAmigo() {
    const ingresarAmigo = document.getElementById("amigo");
    const amigo = ingresarAmigo.value.trim();

    if (amigo !== "") {
        listaAmigos.push(amigo);
        ingresarAmigo.value = ""; // Limpiar el campo de entrada
        mostrarListaAmigos();
        console.log(listaAmigos)

    } else {
        alert("Por favor, ingresa un nombre.");
    }
}

//Implementa una función para actualizar la lista de amigos
function mostrarListaAmigos() {
    const muestraLista = document.getElementById("listaAmigos");
    
    // Limpiar la lista antes de actualizar
    muestraLista.innerHTML = "";

    // Recorrer la lista y agregar cada amigo como <li>
    listaAmigos.forEach(amigo => {
        muestraLista.innerHTML += `<li>${amigo}</li>`;
    });
}

// Implementa una función para sortear los amigos
function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = listaAmigos[indiceAleatorio];

    // Mostrar el resultado en el <ul>
    const resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = `<li>Tu amigo secreto es ${amigoSorteado}</li>`;
}
