
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
   
        sessionStorage.setItem("conf" + numerConfiguraciones, "creada");
        sessionStorage.setItem("conf" + numerConfiguraciones +  "importe", document.getElementById("importeID").value);
        sessionStorage.setItem("conf" + numerConfiguraciones +  "rrhh", document.getElementById("rrhhID").value);
        sessionStorage.setItem("conf" + numerConfiguraciones +  "criteriosEvaluacion", document.getElementById("criteriosID").value);
        sessionStorage.setItem("conf" + numerConfiguraciones +  "inicioPropuestas", document.getElementById("inPropID").value);
        sessionStorage.setItem("conf" + numerConfiguraciones +  "finPropuestas", document.getElementById("finPropID").value);
        sessionStorage.setItem("conf" + numerConfiguraciones +  "inicioEvaluacion", document.getElementById("inEvID").value);
        sessionStorage.setItem("conf" + numerConfiguraciones +  "finEvaluacion", document.getElementById("finEvID").value);
        sessionStorage.setItem("conf" + numerConfiguraciones +  "publicacion", document.getElementById("publicacionID").value);
        sessionStorage.setItem("conf" + numerConfiguraciones +  "documentos", document.getElementById("docID").value);

        location.replace("index.html");
    } else {
        alert("Necesita completar todos los campos para crear la configuración");
    }
}

