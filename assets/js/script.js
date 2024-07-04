// document.addEventListener('DOMContentLoaded', function () {
//     var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
//     var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//         return new bootstrap.Tooltip(tooltipTriggerEl);
//     });
// });

// console.log("Página cargada y lista para usar");
// console.log("Número de pasos en la preparación: " + document.querySelectorAll('ol li').length);


// Tooltip

$(document).ready(
    function () {

        $('#enviarCorreo').tooltip();

        $('#enviarCorreo').click(
            function () {
                alert('El correo fue enviado correctamente...');

            }
        )

        $('h2').on('dblclick', function () {
            if ($(this).text() === 'INGREDIENTES' || $(this).text() === 'PREPARACIÓN') {
                $(this).css('color', 'red');
            }
        }
        )

        $('.card-title').click(
            function () {
                var cardBody = $(this).closest('.card').find('.card-body .card-text');
                cardBody.toggle();
            }
        )


    }
);

