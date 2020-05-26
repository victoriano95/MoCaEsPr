
window.addEventListener("load",function(event) {
    aprobarConfiguracion ();
}, false);


var numerConfiguraciones = 0;

function crearConfiguracion() {
    // memoria
    sessionStorage.setItem("configuacionAprobada", "si");

    // avisar al cio

    location.replace("index.html");
}

function descartarConfiguracion () {

    sessionStorage.removeItem("conf" + 0, "creada");
    sessionStorage.removeItem("conf" + 0 +  "importe", document.getElementById("importeID").value);
    sessionStorage.removeItem("conf" + 0 +  "rrhh", document.getElementById("rrhhID").value);
    sessionStorage.removeItem("conf" + 0 +  "criteriosEvaluacion", document.getElementById("criteriosID").value);
    sessionStorage.removeItem("conf" + 0 +  "inicioPropuestas", document.getElementById("inPropID").value);
    sessionStorage.removeItem("conf" + 0 +  "finPropuestas", document.getElementById("finPropID").value);
    sessionStorage.removeItem("conf" + 0 +  "inicioEvaluacion", document.getElementById("inEvID").value);
    sessionStorage.removeItem("conf" + 0 +  "finEvaluacion", document.getElementById("finEvID").value);
    sessionStorage.removeItem("conf" + 0 +  "publicacion", document.getElementById("publicacionID").value);
    sessionStorage.removeItem("conf" + 0 +  "documentos", document.getElementById("docID").value);
    sessionStorage.removeItem("conf" + 0 +  "importeConProyectos", document.getElementById("importeID").value);

    // avisar al CIO
    location.replace("index.html");
}


function aprobarConfiguracion () {
    if (sessionStorage.getItem("conf0") != null) {
        $("#propuestaActual").append("<center>" +
            "<h2> Propuesta actual:  </h2>" +
            "<div style=\"width:800px; margin: auto;\">" + 
            "<div style=\"float:left\">Importe: " + sessionStorage.getItem("conf" + 0 +  "importe") + "</div>" + 
            "<br>" +
            "<div style=\"float:left\">Cantidad de recursos humanos: " + sessionStorage.getItem("conf" + 0 +  "rrhh") + "</div>" +
            "<br>" +
            "<div style=\"float:left\">Criterios " + sessionStorage.getItem("conf" + 0  +  "criteriosEvaluacion") + "</div>" + 
            "<br>" +
            "<div style=\"float:left\">Período de las propuestas: " + sessionStorage.getItem("conf" + 0  +  "inicioPropuestas") + " / " + sessionStorage.getItem("conf" + 0  +  "finPropuestas") + "</div>" +
            "<br>" +
            "<div style=\"float:left\">Período de evaluación: " + sessionStorage.getItem("conf" + 0 +  "inicioEvaluacion") + " / " + sessionStorage.getItem("conf" + 0 +  "finEvaluacion") + "</div>" +
            "<br>" +
            "<div style=\"float:left\">Cantidad de recursos humanos: " + sessionStorage.getItem("conf" + 0 +  "publicacion") + "</div>" +
            "<br>" +
            "</div>" +
            "</center>" + 
            "<hr>"
            );
    } else {
        $("#propuestaActual").append("<center><div><h2> Aún no se ha propuesto una configuración  </h2></div></center>");
        const myNode = document.getElementById("losBotonesDeConfiguracionID");
        myNode.innerHTML = '';
    }
}

