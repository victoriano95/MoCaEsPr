


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
    var numeroProyectos = 0;
    var proyectosAcaabdos = "";
    var proyectosEnEjecucion = "";

    var contadorAceptadoFinalizados = 0;
    proyecto = sessionStorage.getItem("peticionProy" + numeroProyectos, "creada");
    while (sessionStorage.getItem("evaluarBorrados" + numeroProyectos) != null) { // se ha borrado
      numeroProyectos ++;console.log("coño");
      var proyecto = sessionStorage.getItem("peticionProy" + numeroProyectos, "creada");
    }
    while (proyecto != null) {
      if (sessionStorage.getItem("estado" + numeroProyectos) == "aceptado") {   // aceptado pero no acabado
        contadorAceptadoFinalizados ++;
        var variacionPresupuesto = desviacionSimbolo(sessionStorage.getItem("peticionProyVarPresupuesto" + numeroProyectos));
        var variacionFecha = desviacionSimbolo(sessionStorage.getItem("peticionVarProyFecha" + numeroProyectos));
        var variacionRRHH = desviacionSimbolo(sessionStorage.getItem("peticionVarProyRRHH" + numeroProyectos));

        proyectosEnEjecucion += "<tr> "+
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "nombre") + "</td>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos +  "conseguir") + "</td>" +
                    "<td>" + variacionPresupuesto + "</td>" +
                    "<td>" + variacionRRHH + "</td>" +
                    "<td>" + variacionFecha + "</td>" +
                    "<td>" +
                      "<button type=\"button\" class=\"btn btn-primary\" id=\"evaluarID" + numeroProyectos + "\" onclick=\"evaluar(" + numeroProyectos + ")\">Evaluar</button>" +
                      //"<a class=\"btn btn-info btn-circle ml-1\" role=\button\" onclick=\"decline(" + numeroProyectos + ")\"><i class=\"fas fa-times text-white\"></i></a>" +
                    "</td>" +
                "</tr>";
      } else if (sessionStorage.getItem("estado" + numeroProyectos) == "finalizado" && sessionStorage.getItem("proyectoYaEvaluado" + numeroProyectos) == null) {  // ya ha finalizado
        contadorAceptadoFinalizados ++;

        var variacionPresupuesto = desviacionSimbolo(sessionStorage.getItem("peticionProyVarPresupuesto" + numeroProyectos));
        var variacionFecha = desviacionSimbolo(sessionStorage.getItem("peticionVarProyFecha" + numeroProyectos));
        var variacionRRHH = desviacionSimbolo(sessionStorage.getItem("peticionVarProyRRHH" + numeroProyectos));

        proyectosAcaabdos += "<tr> "+
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "nombre") + "</td>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos +  "conseguir") + "</td>" +
                    "<td>" + variacionPresupuesto + "</td>" +
                    "<td>" + variacionRRHH + "</td>" +
                    "<td>" + variacionFecha + "</td>" +
                    "<td>" +
                      "<button type=\"button\" class=\"btn btn-primary\" id=\"evaluarID" + numeroProyectos + "\" onclick=\"evaluar(" + numeroProyectos + ")\">Evaluar</button>" +
                      //"<a class=\"btn btn-info btn-circle ml-1\" role=\button\" onclick=\"decline(" + numeroProyectos + ")\"><i class=\"fas fa-times text-white\"></i></a>" +
                    "</td>" +
                "</tr>";

      }      
      

      numeroProyectos ++;
      var proyecto = sessionStorage.getItem("peticionProy" + numeroProyectos, "creada");
      while (sessionStorage.getItem("evaluarBorrados" + numeroProyectos) != null) { // se ha borrado
        numeroProyectos ++;
        var proyecto = sessionStorage.getItem("peticionProy" + numeroProyectos, "creada");
      }
    }

    if (contadorAceptadoFinalizados > 0) {
      $("#bodyProyectsAcceptadosID").append(proyectosAcaabdos);
    } else {
      $("#dondeCuelgaID").append("<tr>" +
                    "<td><h1>No hay proyectos que se puedan evaluar aún</h1></td>" +
                "</tr>");
      const myNode = document.getElementById("dataTable");
      myNode.innerHTML = '';
    }
    

  }
}


function desviacionSimbolo (valor) {
  switch (valor) {
    case "peor":
      return "<a  class=\"btn btn-danger btn-square ml-1\" role=\button\"><i  class=\"fas fa-times text-white\"></i></a>";
      break;
    case "mejor":
      return "<a class=\"btn btn-success btn-square ml-1\"><i class=\"fas fa-check text-white\"></i></a>";
      break;
    default:
      return "<a class=\"btn btn-warning btn-square ml-1\"><i class=\"fas fa-minus text-white\"></i></a>";
      break;
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


function evaluar (numero) {
  //sessionStorage.setItem("evaluacion" + numero, "lo que sea");
  // borrar lo de antes
  const myNode = document.getElementById("dataTable");
  myNode.innerHTML = '';
  document.getElementById("dataTable").innerHTML = "<h3>Evaluar el proyecto " + sessionStorage.getItem("peticionProy" + numero + "nombre") + "</h3>";

  var lsitaChecks = "";


  $("#dataTable").append("<table class=\"table dataTable my-0\">" +
                            "<tbody id=\"bodyTareasProyectoID\">" +
                              "<tr>" +
                                "<td>" + "Nota resultado obtenido" + "</td>"+
                                "<td>" + "<label for=\"myCheck\">1  </label><input type=\"checkbox\" id=\"resultado" + 1 + "\" onclick=\"checkBox(" + numero + ", 1, 'resultado')\">" + "</td>" +
                                "<td>" + "<label for=\"myCheck\">2  </label><input type=\"checkbox\" id=\"resultado" + 2 + "\" onclick=\"checkBox(" + numero + ", 2, 'resultado')\">" + "</td>" +
                                "<td>" + "<label for=\"myCheck\">3  </label><input type=\"checkbox\" id=\"resultado" + 3 + "\" onclick=\"checkBox(" + numero + ", 3, 'resultado')\">" + "</td>" +
                                "<td>" + "<label for=\"myCheck\">4  </label><input type=\"checkbox\" id=\"resultado" + 4 + "\" onclick=\"checkBox(" + numero + ", 4, 'resultado')\">" + "</td>" +
                                "<td>" + "<label for=\"myCheck\">5  </label><input type=\"checkbox\" id=\"resultado" + 5 + "\" onclick=\"checkBox(" + numero + ", 5, 'resultado')\">" + "</td>" +
                              "</tr>"  + 
                               "<tr>" +
                                "<td>" + "Nota ejecución" + "</td>"+
                                "<td>" + "<label for=\"myCheck\">1  </label><input type=\"checkbox\" id=\"ejecucion" + 1 + "\" onclick=\"checkBox(" + numero + ", 1, 'ejecucion')\">" + "</td>" +
                                "<td>" + "<label for=\"myCheck\">2  </label><input type=\"checkbox\" id=\"ejecucion" + 2 + "\" onclick=\"checkBox(" + numero + ", 2, 'ejecucion')\">" + "</td>" +
                                "<td>" + "<label for=\"myCheck\">3  </label><input type=\"checkbox\" id=\"ejecucion" + 3 + "\" onclick=\"checkBox(" + numero + ", 3, 'ejecucion')\">" + "</td>" +
                                "<td>" + "<label for=\"myCheck\">4  </label><input type=\"checkbox\" id=\"ejecucion" + 4 + "\" onclick=\"checkBox(" + numero + ", 4, 'ejecucion')\">" + "</td>" +
                                "<td>" + "<label for=\"myCheck\">5  </label><input type=\"checkbox\" id=\"ejecucion" + 5 + "\" onclick=\"checkBox(" + numero + ", 5, 'ejecucion')\">" + "</td>" +
                              "</tr>"  +                                  
                            "</tbody>" +
                          "</table>" +
                            "<center>" +
                               "<button type=\"button\" class=\"btn btn-primary\"  onclick=\"message(" + numero + ")\">Enviar</button>" +
                            "</center>");
  // poner el chek en el que toca
  var nRes = sessionStorage.getItem("notaresultado" + numero);
  var nEj = sessionStorage.getItem("notaejecucion" + numero);
  if (nRes == null) {
    sessionStorage.setItem("notaresultado" + numero, 3);
  }
  if (nEj == null) {
    sessionStorage.setItem("notaejecucion" + numero, 3);
  }
  nRes = sessionStorage.getItem("notaresultado" + numero);
  nEj = sessionStorage.getItem("notaejecucion" + numero);

  document.getElementById("resultado" + nRes).checked = true;
  document.getElementById("ejecucion" + nEj).checked = true;
}


function checkBox (numero, clicado, tipo) {
  sessionStorage.setItem("nota" + tipo + numero, clicado);
  for (var i = 0; i < 5; i++) {
    document.getElementById(tipo + (i + 1)).checked = false;
  }
  document.getElementById(tipo + clicado).checked = true;
}

/*
Envia mensaje al creador del proyecto con la nota que le han puesto
*/
function message (numero) {
  var mensaje = "La evaluación de su proyecto es de " + sessionStorage.getItem("notaresultado" + numero) + "/5 del resultado obtenido y " + sessionStorage.getItem("notaejecucion" + numero) + "/5 en su ejecución.";
 
  // sacar de quien es la propuesta de proyecto
  var nombreCreadorPropuesta = sessionStorage.getItem("proyectoEnCurso" + numero + "nombreCreador");
  var mensajeAntiguo = sessionStorage.getItem("mensaje" + nombreCreadorPropuesta);
  if (mensajeAntiguo == null) {
    mensajeAntiguo = "";
  }
   sessionStorage.setItem("mensaje" + nombreCreadorPropuesta, mensajeAntiguo + "{" + sessionStorage.getItem("usuarioName") + "|"  + sessionStorage.getItem("usuario")  + "|" + mensaje +"}");

   sessionStorage.setItem("proyectoYaEvaluado" + numero, "yes");

   location.replace("exitoProyectos.html");
}