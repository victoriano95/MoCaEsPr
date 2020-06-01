
window.addEventListener("load",function(event) {
    aprobarConfiguracion ();
}, false);


var numerConfiguraciones = 0;

function crearConfiguracion() {
    // memoria
    sessionStorage.setItem("configuacionAprobada", "si");
    message("Se apruba su configuración para la cartera de proyectos");

    sessionStorage.setItem ("fasePortfolio", 2);

    location.replace("dashboard.html");
}

function descartarConfiguracion () {

    sessionStorage.removeItem("conf" + 0, "creada");
    sessionStorage.removeItem("conf" + 0 +  "importe");
    sessionStorage.removeItem("conf" + 0 +  "rrhh");
    sessionStorage.removeItem("conf" + 0 +  "inicioPropuestas");
    sessionStorage.removeItem("conf" + 0 +  "finPropuestas");
    sessionStorage.removeItem("conf" + 0 +  "inicioEvaluacion");
    sessionStorage.removeItem("conf" + 0 +  "finEvaluacion");
    sessionStorage.removeItem("conf" + 0 +  "publicacion");
    sessionStorage.removeItem("conf" + 0 +  "documentos");
    sessionStorage.removeItem("conf" + 0 +  "importeConProyectos");

    message("Se descara su configuración para la cartera de proyectos");

    // avisar al CIO
    location.replace("dashboard.html");
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


/*
Envia mensaje al que propone la propuesta de configuración con si la aprueban o no
*/
function message (mensaje) {
  
  // sacar de quien es la propuesta de proyecto
  var nombreCreadorPropuesta = sessionStorage.getItem("nombreDeLaCreacionDeLaConfiguracion");
  var mensajeAntiguo = sessionStorage.getItem("mensaje" + nombreCreadorPropuesta);
  if (mensajeAntiguo == null) {
    mensajeAntiguo = "";
  }
   sessionStorage.setItem("mensaje" + nombreCreadorPropuesta, mensajeAntiguo + "{" + sessionStorage.getItem("usuarioName") + "|"  + sessionStorage.getItem("usuario")  + "|" + mensaje +"}");

   location.replace("exitoProyectos.html");
}

