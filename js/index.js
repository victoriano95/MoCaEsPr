

window.addEventListener("load",function(event) {

  // PROYECTOS
    document.getElementById("numeroProyectosID").innerHTML = 0;
    // RRHH
    document.getElementById("barraRRHHID").style.width = 0 + "%";
    document.getElementById("porcentajeTareasID").innerHTML = 0 + "/" + 0;
    // PRESUPUESTO
    document.getElementById("presupuestoTotalID").innerHTML = 0;
    document.getElementById("presupuestoRestanteID").innerHTML = 0;

	  cabeceraFase();

   	estadoDeLosProyectos();

},false);



function estadoDeLosProyectos () {
	// sacar todos los proyectos que hay
  var numeroProyectos = 0;
  if (sessionStorage.getItem("aprobado") == "si") {
    var numeroProyectos = 0;
    var listaElementos = "";
    proyecto = sessionStorage.getItem("peticionProy" + numeroProyectos, "creada");
    while (sessionStorage.getItem("evaluarBorrados" + numeroProyectos) != null) { // se ha borrado
      numeroProyectos ++;console.log("coño");
      var proyecto = sessionStorage.getItem("peticionProy" + numeroProyectos, "creada");
    }
    while (proyecto != null) {

      if (sessionStorage.getItem("estado" + numeroProyectos) == "aceptado" || sessionStorage.getItem("estado" + numeroProyectos) == "finalizado") {
        // este proyecto está aceptado
        listaElementos += "<h4 class=\"small font-weight-bold\">" + sessionStorage.getItem("peticionProy" + numeroProyectos +  "nombre") + "<span class=\"float-right\" id=\"nombreBarraID" + numeroProyectos + "\"></span></h4>" +
              "<div class=\"progress mb-4\">" +
                  "<div class=\"progress-bar bg-danger\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 0%;\"  id=\"contenidoBarraID" + numeroProyectos + "\"><span class=\"sr-only\">0%</span></div>" +
              "</div>";
      }

      numeroProyectos ++;
      var proyecto = sessionStorage.getItem("peticionProy" + numeroProyectos, "creada");
      while (sessionStorage.getItem("evaluarBorrados" + numeroProyectos) != null) { // se ha borrado
        numeroProyectos ++;
        var proyecto = sessionStorage.getItem("peticionProy" + numeroProyectos, "creada");
      }
    }
  }
	
  if (numeroProyectos > 0) {
    $("#estadoDeLosProyectosID").append(listaElementos);
  } else {
    $("#estadoDeLosProyectosID").append("No hay proyectos de momento");
    numeroProyectos = 0;
  }

	estadoProyecto (numeroProyectos);
}



function estadoProyecto (numero) {
  var numeroProyectos = 0;
  if (sessionStorage.getItem("aprobado") == "si") {
    var numeroProyectos = 0;
    var listaElementos = "";

    var numeroDeProyectosAceptadosoFinalizados = 0;
    var numeroDeRRHHusados = 0;
    var numeroDePresupuestoUsado = 0;

    proyecto = sessionStorage.getItem("peticionProy" + numeroProyectos, "creada");
    while (sessionStorage.getItem("evaluarBorrados" + numeroProyectos) != null) { // se ha borrado
        numeroProyectos++;
        var proyecto = sessionStorage.getItem("peticionProy" + numeroProyectos, "creada");
    }
    while (proyecto != null) {

        if (sessionStorage.getItem("estado" + numeroProyectos) == "aceptado" || sessionStorage.getItem("estado" + numeroProyectos) == "finalizado") {
          // esto no es para las tareas pero se va a quedar aqui porque es el estado global 
          numeroDeProyectosAceptadosoFinalizados++;
          numeroDeRRHHusados += parseInt(sessionStorage.getItem("peticionProy" + numeroProyectos + "rrhh"));
          numeroDePresupuestoUsado += parseInt(sessionStorage.getItem("peticionProy" + numeroProyectos + "coste"));

          // esto ya si
            var numeroTareas = sessionStorage.getItem("peticionProy" + numeroProyectos + "numeroTareas");
            var contadorFinalizadas = 0;
            for (var i = 0; i < numeroTareas; i++) {
                if (sessionStorage.getItem("peticionProy" + numeroProyectos + "tareaEstado" + i) == "finalizado") {
                    contadorFinalizadas++;
                }
            }
            var porcentaje = 1.5;
            porcentaje = (parseInt(contadorFinalizadas) / parseInt(numeroTareas)) * 100;
            
            document.getElementById("contenidoBarraID" + numeroProyectos).style.width = porcentaje + "%";
            document.getElementById("nombreBarraID" + numeroProyectos).innerHTML = contadorFinalizadas + "/" + numeroTareas + " tareas finalizadas";
           
        }

        numeroProyectos++;
        var proyecto = sessionStorage.getItem("peticionProy" + numeroProyectos, "creada");
        while (sessionStorage.getItem("evaluarBorrados" + numeroProyectos) != null) { // se ha borrado
            numeroProyectos++;
            var proyecto = sessionStorage.getItem("peticionProy" + numeroProyectos, "creada");
        }
    }

    // esto no tiene nada que ver pero aqui se queda
    // PROYECTOS
    document.getElementById("numeroProyectosID").innerHTML = numeroDeProyectosAceptadosoFinalizados;
    // RRHH
    var uno = "";
    if (sessionStorage.getItem("configuacionAprobada") == null) {
      uno = "0";
    } else {
      uno = sessionStorage.getItem("conf" + 0 +  "rrhh");
    }
    document.getElementById("porcentajeTareasID").innerHTML = numeroDeRRHHusados + "/" + uno;
    var porcentaje = 1.5;
    porcentaje = (parseInt(numeroDeRRHHusados) / parseInt(uno)) * 100;
    document.getElementById("barraRRHHID").style.width = porcentaje + "%";
    // PRESUPUESTO

    if (sessionStorage.getItem("configuacionAprobada") != null) {
      document.getElementById("presupuestoTotalID").innerHTML = sessionStorage.getItem("conf" + 0 +  "importe");
      document.getElementById("presupuestoRestanteID").innerHTML = sessionStorage.getItem("conf" + 0 +  "importe") - numeroDePresupuestoUsado;
    } else {
      document.getElementById("presupuestoTotalID").innerHTML = 0;
      document.getElementById("presupuestoRestanteID").innerHTML = 0;
    }

  }

}

function cabeceraFase () {
  
  //document.getElementById("tareasPorHacerID").innerHTML = "No hay tareas pendientes por ahora";
  
  var fase = sessionStorage.getItem ("fasePortfolio");

  if (fase == null) {
    sessionStorage.setItem ("fasePortfolio", 1);
    fase = 1;
  }

  // para saber cuando ha acabado la fase de propuesta de proyectos y por si se está en la última fase
  if (sessionStorage.getItem("usuario") == "cio" && sessionStorage.getItem ("fasePortfolioAux") == "yes") {
    sessionStorage.removeItem("fasePortfolioAux");
    sessionStorage.setItem ("fasePortfolio", 3);
  }
  ultimafase();


  fase = sessionStorage.getItem ("fasePortfolio");
  document.getElementById("cabeceraFaseID").innerHTML = "Fase: " + fase;
  switch (fase) {
    case '1':
    document.getElementById("tareasPorHacerID").innerHTML = "Configuración";
    break;
    case '2':
    document.getElementById("tareasPorHacerID").innerHTML = "Propuesta de proyectos";
    break;
    case '3':
    document.getElementById("tareasPorHacerID").innerHTML = "Priorización";
    break;
    case '4':
    document.getElementById("tareasPorHacerID").innerHTML = "Ejecución";
    break;
    case '5':
    document.getElementById("tareasPorHacerID").innerHTML = "Evaluación del éxito";
    break;
  }

}


function ultimafase () {
  var numeroProyectos = 0;
  var totalFinalizadas = 0;
  var totalAceptadas = 0;

    proyecto = sessionStorage.getItem("peticionProy" + numeroProyectos, "creada");
    while (sessionStorage.getItem("evaluarBorrados" + numeroProyectos) != null) { // se ha borrado
        numeroProyectos++;
        var proyecto = sessionStorage.getItem("peticionProy" + numeroProyectos, "creada");
    }
    while (proyecto != null) {

        if (sessionStorage.getItem("estado" + numeroProyectos) == "finalizado") {
            totalFinalizadas ++;
        }
        if (sessionStorage.getItem("estado" + numeroProyectos) == "aceptada") {
          totalAceptadas ++;
        }

        numeroProyectos++;
        var proyecto = sessionStorage.getItem("peticionProy" + numeroProyectos, "creada");
        while (sessionStorage.getItem("evaluarBorrados" + numeroProyectos) != null) { // se ha borrado
            numeroProyectos++;
            var proyecto = sessionStorage.getItem("peticionProy" + numeroProyectos, "creada");
        }
    }

    // las tareas de todos los proyectos han acabado
    if (totalFinalizadas > 0 && totalAceptadas == 0) {
      sessionStorage.setItem ("fasePortfolio", 5);
    }
}