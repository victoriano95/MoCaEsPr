


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
                    "<td>" + botonModificacion + "</td>" +
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


function ejecucionProyecto (numero) {
  // borrar lo de antes
  const myNode = document.getElementById("dataTable");
  myNode.innerHTML = '';
  document.getElementById("nombreContenidoTablaID").innerHTML = "Tareas del proyecto " + sessionStorage.getItem("peticionProy" + numero + "nombre");

  // sacar todas las tareas
  var lsitaTareas = "";
  var tareasFinalizadas = 0;
  var lasQueEmpiezanConCheck = new Array(sessionStorage.getItem("peticionProy" + numero + "numeroTareas"));
  for (var i = 0; i < sessionStorage.getItem("peticionProy" + numero + "numeroTareas"); i ++) {

    lasQueEmpiezanConCheck [i] = sessionStorage.getItem("peticionProy" + numero +  "tareaEstado" + i);

    lsitaTareas += "<tr>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numero + "tarea"+ i) + "</td>"+
                    /*
                    "<td>" + "<a class=\"btn btn-link\" onclick=\"modificarEstadoTarea(numero, 'pendiente')\">Pendiente  <i class=\"far " + pen + " text-dark fa-2x\" id=\"pendiente" + i + "\"></i></a>" + "</td>" +
                    "<td>" + "<a class=\"btn btn-link\" onclick=\"modificarEstadoTarea(numero, 'proceso')\">En proceso  <i class=\"far "+ pro + "t ext-dark fa-2x\" id=\"proceso" + i + "\"></i></a>" + "</td>" +
                    "<td>" + "<a class=\"btn btn-link\" onclick=\"modificarEstadoTarea(numero, 'finalizado')\">Finalizado  <i class=\"far " + fin + " text-dark fa-2x\" id=\"finalizado" + i + "\"></i></a>" + "</td>" +
                    */
                    "<td>" + "<label for=\"myCheck\">Pendiente  </label><input type=\"checkbox\" id=\"pendiente" + i + "\" onclick=\"modificarEstadoTarea(" + numero + ", 'pendiente', " + i +")\">" + "</td>" +
                    "<td>" + "<label for=\"myCheck\">En proceso  </label><input type=\"checkbox\" id=\"proceso" + i + "\" onclick=\"modificarEstadoTarea(" + numero + ", 'proceso', " + i +")\">" + "</td>" +
                    "<td>" + "<label for=\"myCheck\">Finalizado  </label><input type=\"checkbox\" id=\"finalizado" + i + "\" onclick=\"modificarEstadoTarea(" + numero + ", 'finalizado', " + i +")\">" + "</td>" +
                  "</tr>";
    if (sessionStorage.getItem("peticionProy" + numero + "tareaEstado"+ i) == "finalizada") {
      tareasFinalizadas++;
    }    
  }

  if (tareasFinalizadas == sessionStorage.getItem("peticionProy" + numero + "numeroTareas")) {
    sessionStorage.setItem("estado" + numero, "finalizado");
  }
  
  $("#dataTable").append("<table class=\"table dataTable my-0\">" +
                              "<tbody id=\"bodyTareasProyectoID\">" +
                                    lsitaTareas +
                              "</tbody>" +
                           "</table>");
  for (var i = 0; i < sessionStorage.getItem("peticionProy" + numero + "numeroTareas"); i ++) {
    var checkBox = document.getElementById(lasQueEmpiezanConCheck [i] + i);
    checkBox.checked = true;
  }
}

function modificarEstadoTarea (numero, estado, i) {
  sessionStorage.setItem("peticionProy" + numero +  "tareaEstado" + i, estado); // su estado

  var checkBox = document.getElementById("pendiente" + i);
  checkBox.checked = false;

  checkBox = document.getElementById("proceso" + i);
  checkBox.checked = false;

  checkBox = document.getElementById("finalizado" + i);
  checkBox.checked = false;

  if (estado == "pendiente") {
      checkBox = document.getElementById("pendiente" + i);
      checkBox.checked = true;
  }

   if (estado == "proceso") {
      checkBox = document.getElementById("proceso" + i);
      checkBox.checked = true;
  }
  if (estado == "finalizado") {
      checkBox = document.getElementById("finalizado" + i);
      checkBox.checked = true;
  }
  

  // si con esta ya está acabado el proyecto
  var tareasFinalizadas = 0;
  for (var i = 0; i < sessionStorage.getItem("peticionProy" + numero + "numeroTareas"); i ++) {
    if (sessionStorage.getItem("peticionProy" + numero + "tareaEstado"+ i) == "finalizado") {
      tareasFinalizadas++;
    }    
  }

  if (tareasFinalizadas == sessionStorage.getItem("peticionProy" + numero + "numeroTareas")) {
    sessionStorage.setItem("estado" + numero, "finalizado");
  }


}