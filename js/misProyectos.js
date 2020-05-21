


window.addEventListener("load",function(event) {
    load();
},false);


function load() {
  var numeroProyectos = 0;
  var proyecto = sessionStorage.getItem("estado" + numeroProyectos);

  while (proyecto != null) {
    if (sessionStorage.getItem("peticionProy" + numeroProyectos + "nombreCreador") == sessionStorage.getItem("usuarioName")) {
          var estadoProyecto = sessionStorage.getItem("estado" + numeroProyectos);
          var icono;
          if (estadoProyecto == "borrado") {
            icono = "<a  class=\"btn btn-danger btn-square ml-1\" role=\button\"><i  class=\"fas fa-times text-white\"></i></a>";
          } else if (estadoProyecto == "aceptado") {
            icono = "<a class=\"btn btn-success btn-square ml-1\"><i class=\"fas fa-check text-white\"></i></a>";
          } else if (estadoProyecto == "standBy") {
            icono = "<a class=\"btn btn-warning btn-square ml-1\"><i class=\"fas fa-minus text-white\"></i></a>";
          } else {  // aún no se ha decidido
            icono = "<a class=\"btn btn-success btn-circle ml-1\"><i class=\"fas fa-minus\"></i></a>";
          }

            $("#bodyProyectsAcceptadosID").append("<tr> "+
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "nombre") + "</td>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "coste") + "</td>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "rrhh") + "</td>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "conseguir") + "</td>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "inicioProyecto") + "</td>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "finProyecto") + "</td>" +
                    "<td>"+
                      icono +
                    "</td>" +
                    "<td></td>" +
                "</tr>");
    }    
    
    numeroProyectos ++;
    proyecto = sessionStorage.getItem("estado" + numeroProyectos);
  }
}




function message (numero) {
  var mensaje = prompt("Escriba un mensaje para el creador del proyecto","Mensaje");
  if (mensaje != null || mensaje != "") {
    
    // sacar de quien es la propuesta de proyecto
    var nombreCreadorPropuesta = sessionStorage.getItem("proyectoEnCurso" + numero + "nombreCreador");
    var mensajeAntiguo = sessionStorage.getItem("mensaje" + nombreCreadorPropuesta);
    sessionStorage.setItem("mensaje" + nombreCreadorPropuesta, mensajeAntiguo + "{" + sessionStorage.getItem("usuarioName") + "|"  + sessionStorage.getItem("usuario")  + "|" + mensaje +"}");

  }

}