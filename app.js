/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
Aquí deberás desarrollar la lógica para resolver el problema. */

const listaAmigos = [];

//Implementa una función para agregar amigos
function agregarAmigo() {
    const ingresarAmigo = document.getElementById("amigo");
    const amigo = ingresarAmigo.value.trim();

    // Primero validamos si está vacío
    if (amigo === "") {
        alert("Por favor, ingresa un nombre.");
        return; // detenemos la función aquí
    }

    // Validar si el nombre ya existe
    if (listaAmigos.includes(amigo)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Si pasa la validación, agregamos
    listaAmigos.push(amigo);
    ingresarAmigo.value = ""; // limpiar input
    mostrarListaAmigos();
//    console.log(listaAmigos);
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
        
    // Eliminar al amigo sorteado del array
    listaAmigos.splice(indiceAleatorio, 1);

    // Mostrar el resultado en el <ul>
    const resultadoAmigo = document.getElementById("resultado");
    resultadoAmigo.innerHTML = `<li>Tu amigo secreto es ${amigoSorteado}</li>`;
}