
document.addEventListener("DOMContentLoaded", () => {
    console.log("biblioteca.js está funcionando");

    // Contenedores de la página
    const listaHatha = document.getElementById("posturas-hatha");
    const listaYin = document.getElementById("posturas-yin");
    const vista = document.getElementById("vista-previa");
    const contenido = document.getElementById("biblioteca-content");

    // Recorrer todas las posturas del archivo asanas.js
    ASANAS.forEach(asana => {

        // SOLO agregar a Hatha si la postura es de Hatha
        // (Más adelante agregamos categoría a cada postura)
        const contenedor = listaHatha;

        // Crear botón
        const btn = document.createElement("button");
        btn.classList.add("postura-btn");
        btn.textContent = asana.nombre;

        // Evento al hacer clic en una postura
        btn.addEventListener("click", () => {

            // Mostrar vista previa
            vista.innerHTML = asana.svgCode;

            // Mostrar descripción y título
            contenido.innerHTML = `
                <h2>${asana.nombre}</h2>
                <p>${asana.descripcion}</p>
                <div id="vista-previa">${asana.svgCode}</div>
            `;
        });

        // Insertar el botón en la lista de Hatha
        contenedor.appendChild(btn);
    });

});