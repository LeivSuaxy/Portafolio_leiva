document.addEventListener('DOMContentLoaded', function () {
// Diccionario con los títulos y descripciones de las imágenes
    let imageDescriptions = {
        "Luminicos": "Descripción de Luminicos",
        "Moto": "Descripción de Moto",
        "Pladur": "Descripción de Pladur",
        "Image4": "Descripción de Image4",
        "Image5": "Descripción de Image5"
    };

// Selecciona todas las imágenes y el elemento donde se mostrará la descripción
    let images = document.querySelectorAll('.img-container img');
    let descriptionElement = document.getElementById('image-description');
    let titleElement = document.getElementById('image-title');

// Agrega los eventos a cada imagen
    images.forEach(function (image) {
        image.addEventListener('mouseover', function () {
            let title = this.getAttribute('data-title');
            titleElement.textContent = title
            descriptionElement.textContent = imageDescriptions[title];
            titleElement.classList.add('show');
            descriptionElement.classList.add('show');
        });
        image.addEventListener('mouseout', function () {
            titleElement.textContent = '';
            descriptionElement.textContent = '';
            titleElement.classList.remove('show');
            descriptionElement.classList.remove('show');
        });
    });
});