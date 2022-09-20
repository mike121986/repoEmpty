$(document).ready(function() {

    var path = window.location.href;
    var login = sessionStorage.getItem("logguin");
    var prevurl = sessionStorage.getItem("lasTUrl");
    // obtener el url
    if (path == getAbsolutePath() && login == "logueado") {
        var session = document.getElementById("frmLogginVerif");
        var attr = session.getAttribute("data-id");
        if (attr == 1) {
            Swal.fire({
                title: '¿Quieres salir de la aplicación?',
                showDenyButton: true,
                confirmButtonText: `Si Salir`,
                denyButtonText: `NO Quedarme`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    sessionStorage.removeItem("logguin");
                    $(location).attr('href', getAbsolutePath() + 'Loggin/logout');
                } else if (result.isDenied) {
                    sessionStorage.removeItem("lasTUrl");
                    $(location).attr('href', prevurl);
                }
            })
        }
    }
});