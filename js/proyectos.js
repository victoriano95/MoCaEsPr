


window.addEventListener("load",function(event) {
    load();
},false);


function load() {
  var numeroProyectos = 0;
  proyecto = sessionStorage.getItem("proyectoEnCurso" + numeroProyectos, "creada");
  while (sessionStorage.getItem("enProcesoBorrados" + numeroProyectos) != null) { // se ha borrado
    numeroProyectos ++;
    var proyecto = sessionStorage.getItem("proyectoEnCurso" + numeroProyectos, "creada");
  }
  while (proyecto != null) {
    $("#bodyProyectsAcceptadosID").append("<tr> "+
                    "<td>" + sessionStorage.getItem("proyectoEnCurso" + numeroProyectos + "nombre") + "</td>" +
                    "<td>" + sessionStorage.getItem("proyectoEnCurso" + numeroProyectos + "coste") + "</td>" +
                    "<td>" + sessionStorage.getItem("proyectoEnCurso" + numeroProyectos + "rrhh") + "</td>" +
                    "<td>" + sessionStorage.getItem("proyectoEnCurso" + numeroProyectos + "conseguir") + "</td>" +
                    "<td>" + sessionStorage.getItem("proyectoEnCurso" + numeroProyectos + "inicioProyecto") + "</td>" +
                    "<td>" + sessionStorage.getItem("proyectoEnCurso" + numeroProyectos + "finProyecto") + "</td>" +
                    "<td>"+
                      //"<a class=\"btn btn-success btn-circle ml-1\" role=\"button\" onclick=\"accept(" + numeroProyectos + ")\"><i class=\"fas fa-check text-white\"></i></a>" +
                      "<a class=\"btn btn-success btn-circle ml-1\" role=\"button\" onclick=\"message(" + numeroProyectos + ")\"><i class=\"fas fa-envelope-square\"></i></a>" +
                      "<a class=\"btn btn-info btn-circle ml-1\" role=\button\" onclick=\"decline(" + numeroProyectos + ")\"><i class=\"fas fa-times text-white\"></i></a>" +
                    "</td>" +
                    "<td></td>" +
                "</tr>");
    
    numeroProyectos ++;
    var proyecto = sessionStorage.getItem("proyectoEnCurso" + numeroProyectos, "creada");
    while (sessionStorage.getItem("enProcesoBorrados" + numeroProyectos) != null) { // se ha borrado
      numeroProyectos ++;
      var proyecto = sessionStorage.getItem("proyectoEnCurso" + numeroProyectos, "creada");
    }
  }
}

function decline (numero) {
  sessionStorage.removeItem("proyectoEnCurso" + numero);
  sessionStorage.removeItem("proyectoEnCurso" + numero +  "nombre");
  sessionStorage.removeItem("proyectoEnCurso" + numero +  "coste");
  sessionStorage.removeItem("proyectoEnCurso" + numero +  "rrhh");
  sessionStorage.removeItem("proyectoEnCurso" + numero +  "conseguir");
  sessionStorage.removeItem("proyectoEnCurso" + numero +  "inicioProyecto");
  sessionStorage.removeItem("proyectoEnCurso" + numero +  "finProyecto");
    
  sessionStorage.setItem("enProcesoBorrados" + numero, "borrado");
  location.replace("proyectos.html");
}


function message (numero) {
  var mensaje = prompt("Escriba un mensaje para el creador del proyecto","Mensaje");
  if (mensaje != null || mensaje != "") {
    
    // sacar de quien es la propuesta de proyecto
    var nombreCreadorPropuesta = sessionStorage.getItem("proyectoEnCurso" + numero + "nombreCreador");
    sessionStorage.setItem("mensaje" + nombreCreadorPropuesta, sessionStorage.getItem("usuarioName") + "(" + sessionStorage.getItem("usuario") + ")" + mensaje);

  }

}