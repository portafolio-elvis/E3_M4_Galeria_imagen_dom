// =====================================================
// app.js
// Galería interactiva con thumbnails
// grupo 4
// =====================================================

// Selección de elementos del DOM

// Imagen principal
const imagenPrincipal = document.querySelector("#imagen-principal");

// Contenedor de la imagen principal (para insertar el pie de foto)
const contenedorImagen = document.querySelector("#imagen-principal-container");

// Colección de thumbnails
const thumbnails = document.querySelectorAll(".thumbnail");

// Validación defensiva (buena práctica profesional)
if (!imagenPrincipal || !contenedorImagen || thumbnails.length === 0) {
  console.error("Error: Elementos del DOM no encontrados.");
}

// Asignar eventos a cada thumbnail
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    // Obtener datos del thumbnail clickeado
    const srcThumbnail = thumbnail.src;
    const altThumbnail = thumbnail.alt;

    // Actualizar imagen principal
    imagenPrincipal.src = srcThumbnail;
    imagenPrincipal.alt = altThumbnail;

    // Eliminar pie de foto anterior (si existe)
    const pieFotoAnterior = document.querySelector("#pie-de-foto");
    if (pieFotoAnterior) {
      pieFotoAnterior.remove();
    }

    // Crear nuevo pie de foto
    const pieDeFoto = document.createElement("p");
    pieDeFoto.id = "pie-de-foto";
    pieDeFoto.textContent = altThumbnail;

    // Agregar pie de foto al contenedor
    contenedorImagen.appendChild(pieDeFoto);
  });
});
