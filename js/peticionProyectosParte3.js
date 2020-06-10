


window.addEventListener("load",function(event) {
    load();
},false);


function load() {
  if (sessionStorage.getItem("aprobado") != "si") {  // cambiare esto

    var numeroProyectos = 0;
    var proyecto = sessionStorage.getItem("estado" + numeroProyectos);
    contador = 0;

    while (proyecto != null) {
      if (sessionStorage.getItem("peticionProy" + numeroProyectos + "nombreCreador") == sessionStorage.getItem("usuarioName") && sessionStorage.getItem("peticionProy" + numeroProyectos + "completarManager") == "Completado" &&
          sessionStorage.getItem("peticionProy" + numeroProyectos) == null && sessionStorage.getItem("peticionProy" + numeroProyectos + "borradaFase3") == null) {  // si es para mi y el manager le ha dado el visto bueno
                                                                                                                                                                // y no se ha aceptado ni descartado
        $("#bodyProyectsAcceptadosID").append("<tr> " +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "nombre") + "</td>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "conseguir") + "</td>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "finProyecto") + "</td>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "coste") + "</td>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "rrhh") + "</td>" +
                    "<td>"+ 
                      "<a class=\"btn btn-success btn-circle ml-1\" onclick=\"aceptar(" + numeroProyectos + ")\"><i class=\"fas fa-check text-white\"></i></a>" +
                      "<a  class=\"btn btn-danger btn-circle ml-1\" onclick=\"rechazar(" + numeroProyectos + ")\"><i  class=\"fas fa-times text-white\"></i></a>" +
                    "</td>" +
                    "<td></td>" +
                "</tr>");
        contador++;
      }    
              
      numeroProyectos ++;
      proyecto = sessionStorage.getItem("estado" + numeroProyectos);
    }

  } 
  if (contador ==0) {
     $("#dondeCuelgaID").append("<tr>" +
                    "<td><h1>No quedan proyectos para enviar</h1></td>" +
                "</tr>");
      const myNode = document.getElementById("dataTable");
      myNode.innerHTML = '';
  }
}

function aceptar (numero) {
  sessionStorage.setItem("peticionProy" + numero, "creada");
  location.replace("peticionProyectoparte3.html");
}

function rechazar (numero) {
  sessionStorage.setItem("peticionProy" + numero + "borradaFase3", "se ha borrado");
  location.replace("peticionProyectoparte3.html");
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

