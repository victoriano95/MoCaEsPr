


window.addEventListener("load",function(event) {
    load();
},false);


function load() {
  if (sessionStorage.getItem("aprobado") != "si") {

    var numeroProyectos = 0;
    var proyecto = sessionStorage.getItem("estado" + numeroProyectos);

    while (proyecto != null) {
      if (sessionStorage.getItem("peticionProy" + numeroProyectos) == "creada") {
        var estadoProyecto = sessionStorage.getItem("estado" + numeroProyectos);
        var icono;
        if (estadoProyecto == "borrado") {
          icono = "<a  class=\"btn btn-danger btn-square ml-1\" role=\button\"><i  class=\"fas fa-times text-white\"></i></a>";
        } else if (estadoProyecto == "aceptado") {
          icono = "<a class=\"btn btn-success btn-square ml-1\"><i class=\"fas fa-check text-white\"></i></a>";
        } else if (estadoProyecto == "standBy") {
          icono = "<a class=\"btn btn-warning btn-square ml-1\"><i class=\"fas fa-minus text-white\"></i></a>";
        } else if (estadoProyecto == "finalizado") {
          icono = "<a class=\"btn btn-link btn-square ml-1\"><i class=\"fas fa-star text-warning\"></i></a>";
        } else {  // aún no se ha decidido
          icono = "<a class=\"btn btn-secondary btn-circle ml-1\"><i <i class=\"fas fa-balance-scale text-white\"></i></a>";
        }

        var botonModificacion = "<button type=\"button\" class=\"btn btn-success\" onclick=\"ejecucionProyecto(" + numeroProyectos + ")\">Actualizar ejecución</button>" + "</td>";
        if (!(estadoProyecto == "aceptado" || estadoProyecto == "finalizado")) {
          botonModificacion = "<i class=\"fas fa-horizontal-rule text-dark\"></i>";
          botonModificacion = "<a class=\"btn btn-link\" > - <i class=\"fas fa-horizontal-rule text-dark\"></i></a>";
        }
          
        $("#bodyProyectsAcceptadosID").append("<tr> "+
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "nombre") + "</td>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "coste") + "</td>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "rrhh") + "</td>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "conseguir") + "</td>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "inicioProyecto") + "</td>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "finProyecto") + "</td>" +
                    //"<td>" + "-" + "</td>" +  // se puede cambiar por otra cosa la ejecución
                    "<td>"+ 
                      icono +
                    "</td>" +
                    "<td></td>" +
                "</tr>"); 
      }
         
      numeroProyectos ++;
      proyecto = sessionStorage.getItem("estado" + numeroProyectos);
    }

  } else {
     $("#dondeCuelgaID").append("<tr>" +
                    "<td><h1>La propuesta ya ha sido aceptada</h1></td>" +
                "</tr>");
      const myNode = document.getElementById("dataTable");
      myNode.innerHTML = '';
  }

}

function aceptar (numero) {
  sessionStorage.setItem("aprobado", "si");
  message ("La propuesta ha sido aceptada");
  sessionStorage.setItem ("fasePortfolio", 4);
  location.replace("dashboard.html");
}

function rechazar (numero) {
  var numeroProyectos = 0;
  var proyecto = sessionStorage.getItem("estado" + numeroProyectos);

  while (proyecto != null) {
    sessionStorage.removeItem("evaluarBorrados" + numeroProyectos);
    numeroProyectos ++;
    proyecto = sessionStorage.getItem("estado" + numeroProyectos);
  }

  message ("La propuesta ha sido rechazada");
  //location.replace("dashboard.html");
}


function message (texto) {
  // sacar de quien es la propuesta de proyecto
  var nombreCreadorPropuesta = sessionStorage.getItem("creadorAprobar");
  var mensajeAntiguo = sessionStorage.getItem("mensaje" + nombreCreadorPropuesta);
  if (mensajeAntiguo == null) {
    mensajeAntiguo = "";
  }
  sessionStorage.setItem("mensaje" + nombreCreadorPropuesta, mensajeAntiguo + "{" + sessionStorage.getItem("usuarioName") + "|"  + sessionStorage.getItem("usuario")  + "|" + texto +"}");
}

