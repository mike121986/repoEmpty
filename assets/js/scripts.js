/*!
 * Start Bootstrap - SB Admin v6.0.0 (https://startbootstrap.com/templates/sb-admin)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-sb-admin/blob/master/LICENSE)
 */
(function($) {
    "use strict";

    // Add active state to sidbar nav links
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path

    
    $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {

        if (this.href === path) {
            sessionStorage.setItem("lasTUrl", path);
            $(this).addClass("active");
        }
    });

    // Toggle the side navigation
    $("#sidebarToggle").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
    });


})(jQuery);

function getAbsolutePath() {
    var loc = window.location;

    //var pathNamecsdfswfdfsdfdf = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
    var pathName = loc.pathname.substring(0, 14);
    // var pathName = loc.pathname.substring(0, 1);
    return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
}
function hoy() {
    var hoy = new Date();
    var hoyAno = hoy.getFullYear();
    var hoyMes = hoy.getMonth() + 1;
    var hoyDia = hoy.getDate();

    return hoyDia + "-" + hoyMes + "-" + hoyAno;
}

/**
 * validacion*/
function expRegular(texto, contenido) {
    let letras_latinas;
    let letras_Frm;
    let ercorreo;
    let phonearray;
    let mesaje;
    let pass;
    let varif;
    let decimal;
    let fecha;
    let rfc;

    switch (texto) {
        case "nombre":
            letras_latinas = /^[a-zA-ZáéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ/-_-\s]+$/;
            varif = letras_latinas;
            break;

        case "frm":
            letras_Frm = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
            varif = letras_Frm;
            break;

        case "email":
            ercorreo = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
            varif = ercorreo;
            break;

        case "phone":
            phonearray = /^[0-9]+$/;
            varif = phonearray;
            break;

        case "decimales":
            decimal = /^([0-9]+\.?[0-9]{0,3})$/;
            varif = decimal;
            break;

        case "messagge":
        case "dir":
            mesaje = /^[0-9a-zA-ZáéíóúàèìòùÀÈÌÒÙÁÉÍÓÚñÑüÜ_/;,.()¿$?\s]+$/;
            varif = mesaje;
            break;

        case "date":
            fecha = /^\d{1,2}\-\d{1,2}\-\d{2,4}$/;
            varif = fecha;
            break;

        case "dateUs":
            fecha = /^\d{2,4}\-\d{1,2}\-\d{1,2}$/;
            varif = fecha;
            break;

        case "dateSlash":
            fecha = /^\d{2,4}\-\d{1,2}\-\d{1,2}$/;
            varif = fecha;
            break;
        case "rfc":
            rfc = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;
            varif = rfc;
            break;

        case "pass":
            pass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
            varif = pass;
            /*La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.
  NO puede tener otros símbolos.
  Ejemplo:
  w3Unpocodet0d0 */
            break;

    }
    if (!(varif.test(contenido))) {
        return 0;
    } else {
        return texto;
    }

}
// funcion para limpiar formularios
function limpiarFormulario(formulario) {
    document.getElementById(formulario).reset();
}
// funcion para limpiar inputs
function limpiarInput(idInput) {
    let idInputFuntion = document.getElementById(idInput).value;
    if (idInputFuntion.length > 0) {
        document.getElementById(idInput).value = '';
    }

}

function lipiarDiv(elemento) {
    let idBorder = document.getElementById(elemento);
    idBorder.style.border = '1px solid green';
    document.getElementsByClassName(elemento)[0].innerHTML = '';
}


// funcion para colocar el cursor en un inpucon focus
function focusInput(idInput) {
    document.getElementById(idInput).focus();
}

function multi(uno = 0, dos = 0) {
    let result = parseFloat(0.0);
    result = (parseFloat(uno) * parseFloat(dos));
    if (result == "NaN" || result == "") {
        result = 0;
    } else {
        result = result.toFixed(2);
    }
    return result;
}

function sumar(uno, dos) {
    var result;
    result = (uno + dos);

    return result;
}

function restar(uno, dos) {
    var resta;
    resta = (uno - dos);

    if (resta < 0) {
        return 0;
    } else {
        return resta;
    }
}

function emptyInput(input) {
    if (input === '') {
        return 'empty';
    } else {
        return input;
    }
}

function dosDecimales(n) {
    let t = n.toString();
    let regex = /(\d*.\d{0,2})/;
    return t.match(regex)[0];
}


/**
 * @param String name
 * @return String
 */
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}



/* Función que suma o resta días a una fecha, si el parámetro
   días es negativo restará los días*/
   function restarDias(dias){
        let hoy = new Date();
        let semMinisegundos = 1000 * 60 * 60 * 24 * dias;
        let suma = hoy.getTime() - semMinisegundos;
        let nuevaFecha = new Date(suma);

        let fechaAno = nuevaFecha.getFullYear();
        let fechaMes = nuevaFecha.getMonth() + 1;
        let fechaHoy = nuevaFecha.getDate();

        return fechaHoy+"-"+fechaMes+"-"+fechaAno;
  }
  /* Función que suma o resta días a una fecha, si el parámetro
   días es negativo restará los días*/
   function sumarDias(dias){
    let hoy = new Date();
    let semMinisegundos = 1000 * 60 * 60 * 24 * dias;
    let suma = hoy.getTime() + semMinisegundos;
    let nuevaFecha = new Date(suma);

    let fechaAno = nuevaFecha.getFullYear();
    let fechaMes = nuevaFecha.getMonth() + 1;
    let fechaHoy = nuevaFecha.getDate();

    return fechaHoy+"-"+fechaMes+"-"+fechaAno;
    }

    /**
     * este funcon detecta si es el dia es domingo lo pasamos al lunes
     */
    function verifDay(dias){
        let sumday = sumarDias(dias);
        let weekend = numberDay(sumday);
        if(weekend == 0){
            sumday = sumarDias(2);
        }
        return sumday;
    }
/**
 * extrae el numero del dia sabiendo que el dia 0 es domingo 
 * el dia 6 es sabado
 */
    function numberDay(date){
        let separar = separarFecha(date);
        let mes = (separar[1] - 1);
        let MyDate = new Date(separar[2],mes,separar[0]);
        let getdayNumber = MyDate.getDay();
        
        return getdayNumber;
    }

function mayusculas(e) {
    e.value = e.value.toUpperCase();
}

/* boton regresar una pantalla atras en la historia */
document.getElementById('botondiv').onclick = function(e) {
    sessionStorage.setItem("logguin", "logueado");
    if (e.target == document.getElementById('backHisotry')) {
        window.history.back();
    }
}



//Función para validar un RFC
// Devuelve el RFC sin espacios ni guiones si es correcto
// Devuelve false si es inválido
// (debe estar en mayúsculas, guiones y espacios intermedios opcionales)
function rfcValido(rfc, aceptarGenerico = true) {
    const re = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;
    var validado = rfc.match(re);

    if (!validado) //Coincide con el formato general del regex?
        return false;

    //Separar el dígito verificador del resto del RFC
    const digitoVerificador = validado.pop(),
        rfcSinDigito = validado.slice(1).join(''),
        len = rfcSinDigito.length,

        //Obtener el digito esperado
        diccionario = "0123456789ABCDEFGHIJKLMN&OPQRSTUVWXYZ Ñ",
        indice = len + 1;
    var suma,
        digitoEsperado;

    if (len == 12) suma = 0
    else suma = 481; //Ajuste para persona moral

    for (var i = 0; i < len; i++)
        suma += diccionario.indexOf(rfcSinDigito.charAt(i)) * (indice - i);
    digitoEsperado = 11 - suma % 11;
    if (digitoEsperado == 11) digitoEsperado = 0;
    else if (digitoEsperado == 10) digitoEsperado = "A";

    //El dígito verificador coincide con el esperado?
    // o es un RFC Genérico (ventas a público general)?
    if ((digitoVerificador != digitoEsperado) &&
        (!aceptarGenerico || rfcSinDigito + digitoVerificador != "XAXX010101000"))
        return false;
    else if (!aceptarGenerico && rfcSinDigito + digitoVerificador == "XEXX010101000")
        return false;
    return rfcSinDigito + digitoVerificador;
}


//Handler para el evento cuando cambia el input
// -Lleva la RFC a mayúsculas para validarlo
// -Elimina los espacios que pueda tener antes o después
function validarInput(input) {
    var rfc = input.value.trim().toUpperCase(),
        resultado = document.getElementById("resultado"),
        valido;

    var rfcCorrecto = rfcValido(rfc); // ⬅️ Acá se comprueba

    if (rfcCorrecto) {
        valido = "Válido";
        resultado.classList.add("ok");
    } else {
        valido = "No válido"
        resultado.classList.remove("ok");
    }

    resultado.innerText = "RFC: " + rfc +
        "\nResultado: " + rfcCorrecto +
        "\nFormato: " + valido;
}

function separarFecha(fecha){
    let separador = "-";
    let fechaNuevo = "";
    fechaNuevo = fecha.split(separador,3);
    return fechaNuevo;
}

function separaTexto(texto, limite) {
    let separador = "_";
    let textoNuevo = "";
    textoNuevo = texto.split(separador, limite);
    return textoNuevo
}

function tamanoTxt(texto, length_txt) {
    let tamano = texto.length;

    if (tamano > length_txt) {
        return false
    } else {
        return texto
    }
}
//validar formualrios
/* NOTA:
        para que regrese un valor valido debe der igual a cero (0),
        si este regresa un valor mayor a cero este se toma como un valor 
        negativo*/
function validarCampos(arrayDatos) {
    let contador = 0;
    for (var clave in arrayDatos[0]) {
        var indice = separaTexto(clave, 3)

        if (arrayDatos[0][clave] === 'empty') {
            $("#" + indice[1]).css('border', '1px solid red')
            $("." + indice[1]).html('este campo es obligatorio')
            $("." + indice[1]).css('color', 'red')
            contador = contador + 1;
        } else {
            var error = expRegular(indice[0], arrayDatos[0][clave])
            if (error != 0) {
                let largoTexto = tamanoTxt(arrayDatos[0][clave], indice[2])
                if (largoTexto) {
                    $("#" + indice[1]).css('border', '1px solid green')
                    $("." + indice[1]).html('correcto')
                    $("." + indice[1]).css('color', 'green')
                } else {
                    $("#" + indice[1]).css('border', '1px solid red')
                    $("." + indice[1]).html('EXCEDE EL TAMAÑO PERMITIDO')
                    $("." + indice[1]).css('color', 'red')
                    contador = contador + 2;
                }
            } else {
                $("#" + indice[1]).css('border', '1px solid red')
                $("." + indice[1]).html('Formato Incorrecto')
                $("." + indice[1]).css('color', 'red')
                contador = contador + 2;
            }
        }
    }
    return contador
}

function humanizeNumber(n) {
    n = n.toString()
    while (true) {
        var n2 = n.replace(/(\d)(\d{3})($|,|\.)/g, '$1,$2$3')
        if (n == n2) break
        n = n2
    }
    return n
}

function deleteArray(arrayDelete) {
    let complete = arrayDelete.length;

    if (complete == 0) {
        return -1;
    } else {
        for (let i = arrayDelete.length; i > 0; i--) {
            arrayDelete.pop();
        }
    }
}

/**
 * funcion para saber si existe registro en las tablas
 */
function existeRegistro(idDeTabla) {
    let filas = $('#' + idDeTabla).find('tbody tr').length;
    /* let filas = $('table#'+idDeTabla+' tbody tr').length; */
    if (filas > 0) {
        let hola = $('#' + idDeTabla).find('tbody tr td').attr("colspan");
        if(typeof hola === 'undefined'){
            return 1;
        }else{
            return 0;
        }
    } else {
        return 0;
    }
}


function clearDiv(idDiv) {
    document.getElementById(idDiv);
}


function porcentaje(porcentaje, total) {
    let dato1 = parseFloat(porcentaje);
    let dato2 = parseFloat(total);
    let reesultadoDato = ((dato1 * dato2) / 100);
    let reesultado = restar(total, reesultadoDato)
    return reesultado.toFixed(2);
}

function limpiarSession() {
    sessionStorage.clear();
}



/* funcion para recorrer una tabla */
function valTable(idTabla, classRowTable, classSelector) {
    const tableRows = document.querySelectorAll(`#${idTabla} tr.${classRowTable}`);
    let cero = 0;
    // Recorremos las filas que tengan el class="row"
    // así obviamos la cabecera
    for (let i = 0; i < tableRows.length; i++) {
        const row = tableRows[i];
        const peso = row.querySelector(`.${classSelector}`);
        let dato = peso.innerText;
        if (dato == 0) {
            cero++;
        }
    }
    return cero;
}

function redondearNumero(numero) {
    let numeroRound = parseFloat(numero).toFixed(2);
    return numeroRound;
}

