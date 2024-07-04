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
        if ($(this).text() === 'INGREDIENTES' || $(this).text() === 'PREPARACIÓN') {
            $(this).css('color', 'red');
        }
    });
});

// Toggle de contenido para las cards

$(document).ready(function() {
    $('.card-title').click(function() {
        var cardBody = $(this).closest('.card').find('.card-body .card-text');
        cardBody.toggle();
    });
});