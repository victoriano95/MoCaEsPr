


window.addEventListener("load",function(event) {
    load();
},false);


function load() {
  if (sessionStorage.getItem("aprobado") != "si") {
    $("#dondeCuelgaID").append("<tr>" +
                    "<td><h1>No hay proyectos aprobados de momento</h1></td>" +
                "</tr>");
      const myNode = document.getElementById("dataTable");
      myNode.innerHTML = '';
  } else {
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
}

function decline (numero) {
  sessionStorage.removeItem("proyectoEnCurso" + numero);
  sessionStorage.removeItem("proyectoEnCurso" + numero +  "nombre");
  
  sessionStorage.removeItem("proyectoEnCurso" + numero +  "conseguir");
  sessionStorage.removeItem("proyectoEnCurso" + numero +  "inicioProyecto");
  sessionStorage.removeItem("proyectoEnCurso" + numero +  "finProyecto");
    
  sessionStorage.setItem("enProcesoBorrados" + numero, "borrado");

  // numero proyectos
  var numeroProyectos = sessionStorage.getItem("confNumeroProyectos");
    if (numeroProyectos == null) {
      sessionStorage.setItem("confNumeroProyectos", 1);
    } else {
      numeroProyectos = parseInt(numeroProyectos) - 1;
      sessionStorage.setItem("confNumeroProyectos", numeroProyectos);
    }

    // presupuesto
    var costeActual = sessionStorage.getItem("conf" + 0 +  "importeConProyectos");
    if (costeActual == null) {
      sessionStorage.setItem("conf" + 0 +  "importeConProyectos", sessionStorage.getItem("proyectoEnCurso" + numero +  "rrhh"));
    } else {
      costeActual = parseInt(costeActual) + parseInt(sessionStorage.getItem("proyectoEnCurso" + numero +  "coste"));
      sessionStorage.setItem("conf" + 0 +  "importeConProyectos", costeActual);
      sessionStorage.removeItem("proyectoEnCurso" + numero +  "coste");
    }

    // rrhh
    var numeroRRHH = sessionStorage.getItem("confNumeroRRHH");
    if (numeroRRHH == null) {
      sessionStorage.setItem("confNumeroRRHH", sessionStorage.getItem("proyectoEnCurso" + numero +  "rrhh"));
    } else {
      numeroRRHH = parseInt(numeroRRHH) - parseInt(sessionStorage.getItem("proyectoEnCurso" + numero +  "rrhh"));
      sessionStorage.setItem("confNumeroRRHH", numeroRRHH);
      sessionStorage.removeItem("proyectoEnCurso" + numero +  "rrhh");
    }

  location.replace("proyectos.html");
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