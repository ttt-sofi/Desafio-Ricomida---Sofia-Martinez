// document.addEventListener('DOMContentLoaded', function () {
//     var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
//     var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//         return new bootstrap.Tooltip(tooltipTriggerEl);
//     });
// });

// console.log("Página cargada y lista para usar");
// console.log("Número de pasos en la preparación: " + document.querySelectorAll('ol li').length);


// Tooltip

$(document).ready(function() {
    // Inicializar tooltip
    $('#enviarCorreo').tooltip();
});

// Evento Click en Enviar Correo

$(document).ready(function() {
    $('#enviarCorreo').click(function() {
        alert('El correo fue enviado correctamente...');
    });
});

// Cambio de color en Titulos 

$(document).ready(function() {
    // Seleccionar los títulos por etiqueta y aplicar el evento dblclick
    $('h2').on('dblclick', function() {
        // Verificar si el título es "INGREDIENTES" o "PREPARACIÓN"
        if ($(this).text() === 'INGREDIENTES' || $(this).text() === 'PREPARACIÓN') {
            // Cambiar el color del texto a rojo
            $(this).css('color', 'red');
        }
    });
});

// Toggle de contenido para las cards

$(document).ready(function() {
    $('.card-title').click(function() {
        // Obtener el card-body correspondiente a la tarjeta clickeada
        var cardBody = $(this).closest('.card').find('.card-body .card-text');

        // Alternar la visibilidad del texto dentro del card-body
        cardBody.toggle();
    });
});