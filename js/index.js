

window.addEventListener("load",function(event) {
    if (sessionStorage.getItem("conf" + 0) != null) {
    	document.getElementById("presupuestoTotalID").innerHTML = sessionStorage.getItem("conf" + 0 +  "importe");
    	document.getElementById("presupuestoRestanteID").innerHTML = sessionStorage.getItem("conf" + 0 +  "importeConProyectos");
    } else {
    	document.getElementById("presupuestoTotalID").innerHTML = 0;
    	document.getElementById("presupuestoRestanteID").innerHTML = 0;
    	
    }

    document.getElementById("porcentajeTareasID").innerHTML = 0;

    if (sessionStorage.getItem("confNumeroProyectos") == null) {
    	document.getElementById("numeroProyectosID").innerHTML = 0;
    } else {
   		document.getElementById("numeroProyectosID").innerHTML = sessionStorage.getItem("confNumeroProyectos");
   	}


   	if (sessionStorage.getItem("confNumeroProyectos") == null) {
    	document.getElementById("numeroProyectosID").innerHTML = 0;
    } else {
   		document.getElementById("numeroProyectosID").innerHTML = sessionStorage.getItem("confNumeroProyectos");
   	}

   	var recursosHumanos = "";
   	var uno = "";
   	var dos = "";
   	if (sessionStorage.getItem("conf" + 0 +  "rrhh") == null) {
    	uno = "0";
    } else {
    	uno = sessionStorage.getItem("conf" + 0 +  "rrhh");
   	}

   	if (sessionStorage.getItem("confNumeroRRHH") == null) {
    	dos += "0";
    } else {
    	dos += sessionStorage.getItem("confNumeroRRHH");
   	}

   	document.getElementById("porcentajeTareasID").innerHTML = dos + "/" + uno;

   	var porcentaje = 1.5;
   	porcentaje = (parseInt(dos) / parseInt(uno)) * 100;
   	document.getElementById("barraRRHHID").style.width = porcentaje + "%";

   	estadoDeLosProyectos();

},false);



function estadoDeLosProyectos () {
	// pantilla 
	/*
	<h4 class="small font-weight-bold">Server migration<span class="float-right">20%</span></h4>
    <div class="progress mb-4">
        <div class="progress-bar bg-danger" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%;"><span class="sr-only">20%</span></div>
    </div>
	*/

	// sacar todos los proyectos que hay
	var listaElementos = "";
	var numeroProyectos = 0;
  	proyecto = sessionStorage.getItem("proyectoEnCurso" + numeroProyectos, "creada");
  	while (sessionStorage.getItem("enProcesoBorrados" + numeroProyectos) != null) { // se ha borrado
    	numeroProyectos ++;
    	var proyecto = sessionStorage.getItem("proyectoEnCurso" + numeroProyectos, "creada");
  	}
  	while (proyecto != null) {
    	listaElementos += "<h4 class=\"small font-weight-bold\">" + sessionStorage.getItem("peticionProy" + numeroProyectos +  "nombre") + "<span class=\"float-right\" id=\"nombreBarraID" + numeroProyectos + "\"></span></h4>" +
    					"<div class=\"progress mb-4\">" +
        					"<div class=\"progress-bar bg-danger\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 0%;\"  id=\"contenidoBarraID" + numeroProyectos + "\"><span class=\"sr-only\">0%</span></div>" +
    					"</div>";
    	
    	numeroProyectos ++;
    	var proyecto = sessionStorage.getItem("proyectoEnCurso" + numeroProyectos, "creada");
    	while (sessionStorage.getItem("enProcesoBorrados" + numeroProyectos) != null) { // se ha borrado
      		numeroProyectos ++;
      		var proyecto = sessionStorage.getItem("proyectoEnCurso" + numeroProyectos, "creada");
    	}
  	}

	if (numeroProyectos != 0) {
		$("#estadoDeLosProyectosID").append(listaElementos);
	} else {
		$("#estadoDeLosProyectosID").append("No hay proyectos de momento");
	}
	
	estadoProyecto (numeroProyectos);
}

function estadoProyecto (numero) {
	for (var n = 0; n < numero; n++){
	var numeroTareas = sessionStorage.getItem("peticionProy" + n +  "numeroTareas");
	var contadorFinalizadas = 0;
	for (var i = 0; i < numeroTareas; i++ ){
		if (sessionStorage.getItem("peticionProy" + n +  "tareaEstado" + i) == "finalizado") {
			contadorFinalizadas ++;
		}
	}
	var porcentaje = 1.5;
	porcentaje = (parseInt(contadorFinalizadas) / parseInt(numeroTareas)) * 100;
	//console.log(contadorFinalizadas + "/" + numeroTareas + ": " + porcentaje);

	document.getElementById("contenidoBarraID" + n).style.width = porcentaje + "%";
	document.getElementById("nombreBarraID" + n).innerHTML = contadorFinalizadas + "/" + numeroTareas + " tareas finalizadas";
}
}