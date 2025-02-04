// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// 1. Declaro el array para almacenar los nombres de los amigos
let amigos = [];

// 2. Función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById("amigo");  
    const nombre = input.value.trim();  

    // Validación: Si el campo está vacío, mostramos un mensaje de error
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Si el nombre es válido, lo agregamos al array
    amigos.push(nombre);

    // Actualizamos la lista de amigos en la página
    actualizarListaAmigos();

    // Limpiamos el campo de entrada
    input.value = "";
}

// 3. Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");  
    lista.innerHTML = "";  

    // Recorro el array de amigos y agrego un <li> para cada uno
    amigos.forEach(amigo => {
        const li = document.createElement("li");  // Crea un nuevo <li>
        li.textContent = amigo;  // Asigna el nombre al <li>
        lista.appendChild(li);  // Agrega el <li> a la lista
    });
}

// 4. Función para realizar el sorteo aleatorio
function sortearAmigo() {
    // Validación: Si hay menos de dos amigos, no podemos hacer el sorteo
    if (amigos.length < 2) {
        alert("Por favor, ingrese al menos dos amigos para realizar el sorteo.");
        return;
    }

    // Seleccion un amigo aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `¡El amigo secreto sorteado es: ${amigoSorteado}!`;
}


