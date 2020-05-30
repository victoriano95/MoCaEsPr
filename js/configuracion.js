
window.addEventListener("load",function(event) {
    existeConfiguracion ();
}, false);


var numerConfiguraciones = 0;

function crearConfiguracion() {
    if (document.getElementById("importeID").value != '' && document.getElementById("rrhhID").value != '' && document.getElementById("criteriosID").value != '' &&
        document.getElementById("inPropID").value != '' && document.getElementById("finPropID").value != '' && document.getElementById("inEvID").value != '' &&
        document.getElementById("finEvID").value != '' && document.getElementById("publicacionID").value != '') { // en principio no es obligatorio meter docuemntos
        result = sessionStorage.getItem("conf" + numerConfiguraciones);
        while (result != null) {
            numerConfiguraciones++;
            result = sessionStorage.getItem("conf" + numerConfiguraciones);
        }
    // antes numerConfiguraciones
        sessionStorage.setItem("conf" + 0, "creada");
        sessionStorage.setItem("conf" + 0 +  "importe", document.getElementById("importeID").value);
        sessionStorage.setItem("conf" + 0 +  "rrhh", document.getElementById("rrhhID").value);
        sessionStorage.setItem("conf" + 0 +  "criteriosEvaluacion", document.getElementById("criteriosID").value);
        sessionStorage.setItem("conf" + 0 +  "inicioPropuestas", document.getElementById("inPropID").value);
        sessionStorage.setItem("conf" + 0 +  "finPropuestas", document.getElementById("finPropID").value);
        sessionStorage.setItem("conf" + 0 +  "inicioEvaluacion", document.getElementById("inEvID").value);
        sessionStorage.setItem("conf" + 0 +  "finEvaluacion", document.getElementById("finEvID").value);
        sessionStorage.setItem("conf" + 0 +  "publicacion", document.getElementById("publicacionID").value);
        sessionStorage.setItem("conf" + 0 +  "documentos", document.getElementById("docID").value);

        sessionStorage.setItem("conf" + 0 +  "importeConProyectos", document.getElementById("importeID").value);

        sessionStorage.setItem("nombreDeLaCreacionDeLaConfiguracion", sessionStorage.getItem("usuarioName"));

        location.replace("index.html");
    } else {
        alert("Necesita completar todos los campos para crear la configuración");
    }
}


function existeConfiguracion () {
    if (sessionStorage.getItem("conf0") != null) {
        $("#propuestaActual").append("<center>" +
            "<h2> Propuesta actual:  </h2>" +
            "<div style=\"width:800px; margin: auto;\">" +  
            "<br>" +
            "<div style=\"float:left\">Importe " + sessionStorage.getItem("conf" + 0 +  "importe") + "</div>" + 
            "<br>" +
            "<div style=\"float:left\">Recursos humanos " + sessionStorage.getItem("conf" + 0 +  "rrhh") + "</div>" + 
            "<br>" +
            "<div style=\"float:left\">Criterios " + sessionStorage.getItem("conf" + 0  +  "criteriosEvaluacion") + "</div>" +  
            "<br>" +
            "<div style=\"float:left\">Período de tiempo " + sessionStorage.getItem("conf" + 0  +  "inicioPropuestas") + " / " + sessionStorage.getItem("conf" + 0  +  "finPropuestas") + "</div>" + 
            "<br>" +
            "</div>" +
            "</center>" + 
            "<hr>"
            );       
        document.getElementById("propeustaBotonID").innerHTML = "Modificar propuesta";
    }
}




