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
                alert('El correo fue enviado correctamente.');

            }
        )

        $('#AñadirFavoritos').tooltip();
        $('#AñadirFavoritos').click(
            function () {
                alert('Agrega esta receta a tus favoritos');

            }
        )

        $("h2").dblclick(
            function () {
                $(this).css('color', 'red');
            }
        )


        $(".card-title").on("click", function () {
            $(this).siblings(".card-text").toggle("slow");
        }

        )

    }
);

