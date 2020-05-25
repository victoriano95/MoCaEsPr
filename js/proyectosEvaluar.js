




window.addEventListener("load",function(event) {
    load();
},false);



function load () {	
	if (sessionStorage.getItem("aprobado") == "si") {
		$("#dondeCuelgaID").append("<tr>" +
                    "<td><h1>La propuesta ya ha sido aceptada</h1></td>" +
                "</tr>");
		const myNode = document.getElementById("dataTable");
  		myNode.innerHTML = '';
	} else {
		var numeroProyectos = 0;
		proyecto = sessionStorage.getItem("peticionProy" + numeroProyectos, "creada");
		while (sessionStorage.getItem("evaluarBorrados" + numeroProyectos) != null) { // se ha borrado
			numeroProyectos ++;console.log("coño");
			var proyecto = sessionStorage.getItem("peticionProy" + numeroProyectos, "creada");
		}
		while (proyecto != null) {
			
			$("#bodyProyectsID").append("<tr> "+
                  	"<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "nombre") + "</td>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "coste") + "</td>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "rrhh") + "</td>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "conseguir") + "</td>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "inicioProyecto") + "</td>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "finProyecto") + "</td>" +
                    "<td><a class=\"btn btn-success btn-circle ml-1\" role=\"button\" onclick=\"accept(" + numeroProyectos + ")\"><i class=\"fas fa-check text-white\"></i></a>" +
                    	"<a class=\"btn btn-warning btn-circle ml-1\" role=\button\" onclick=\"standBy(" + numeroProyectos + ")\" id=\"bottonDeclinarID\"><i class=\"fas fa-minus text-white\"></i></a>" +
                    	"<a class=\"btn btn-danger btn-circle ml-1\" role=\button\" onclick=\"decline(" + numeroProyectos + ")\" id=\"bottonStandByID\"><i class=\"fas fa-times text-white\"></i></a>" +
                    "</td>" +
                    "<td></td>" +
                "</tr>");

			numeroProyectos ++;
			var proyecto = sessionStorage.getItem("peticionProy" + numeroProyectos, "creada");
			while (sessionStorage.getItem("evaluarBorrados" + numeroProyectos) != null) { // se ha borrado
				numeroProyectos ++;
				var proyecto = sessionStorage.getItem("peticionProy" + numeroProyectos, "creada");
			}
		}
	}
}

function accept (numero) {
	sessionStorage.setItem("estado" + numero, "aceptado"); 
	var numeroPeticion = 0;
    result = sessionStorage.getItem("proyectoEnCurso" + numeroPeticion);
    while (result != null || sessionStorage.getItem("enProcesoBorrados" + numeroPeticion) != null) {
        numeroPeticion++;
        result = sessionStorage.getItem("proyectoEnCurso" + numeroPeticion);           	
    }
   
    sessionStorage.setItem("proyectoEnCurso" + numeroPeticion, "creada");
    sessionStorage.setItem("proyectoEnCurso" + numeroPeticion +  "nombre", sessionStorage.getItem("peticionProy" + numero + "nombre"));
    sessionStorage.setItem("proyectoEnCurso" + numeroPeticion +  "coste", sessionStorage.getItem("peticionProy" + numero + "coste"));
    sessionStorage.setItem("proyectoEnCurso" + numeroPeticion +  "rrhh", sessionStorage.getItem("peticionProy" + numero + "rrhh"));
    sessionStorage.setItem("proyectoEnCurso" + numeroPeticion +  "conseguir", sessionStorage.getItem("peticionProy" + numero + "conseguir"));
    sessionStorage.setItem("proyectoEnCurso" + numeroPeticion +  "inicioProyecto", sessionStorage.getItem("peticionProy" + numero + "inicioProyecto"));
    sessionStorage.setItem("proyectoEnCurso" + numeroPeticion +  "finProyecto", sessionStorage.getItem("peticionProy" + numero + "finProyecto"));
    sessionStorage.setItem("proyectoEnCurso" + numeroPeticion + "nombreCreador", sessionStorage.getItem("peticionProy" + numero + "nombreCreador"));

    // actualizar estado general
    var presupuestoAntiguo = sessionStorage.getItem("conf" + 0 +  "importeConProyectos");
    presupuestoAntiguo -= sessionStorage.getItem("proyectoEnCurso" + numeroPeticion +  "coste");
    sessionStorage.setItem("conf" + 0 +  "importeConProyectos", presupuestoAntiguo);

    // presupuesto
    var numeroProyectos = sessionStorage.getItem("confNumeroProyectos");
    if (numeroProyectos == null) {
    	sessionStorage.setItem("confNumeroProyectos", 1);
    } else {
    	numeroProyectos = parseInt(numeroProyectos) + 1;
    	sessionStorage.setItem("confNumeroProyectos", numeroProyectos);
    }

    // rrhh
    var numeroRRHH = sessionStorage.getItem("confNumeroRRHH");
    if (numeroRRHH == null) {
    	sessionStorage.setItem("confNumeroRRHH", sessionStorage.getItem("proyectoEnCurso" + numero +  "rrhh"));
    } else {
    	numeroRRHH = parseInt(numeroRRHH) + parseInt(sessionStorage.getItem("proyectoEnCurso" + numero +  "rrhh"));
    	sessionStorage.setItem("confNumeroRRHH", numeroRRHH);
    }

	sessionStorage.setItem("evaluarBorrados" + numero, "borrado");  

	// Notificar que ha sido aprobado
	// notificar al que lo publicó
	var nombreCreadorPropuesta = sessionStorage.getItem("peticionProy" + numero + "nombreCreador");
    var mensajeAntiguo = sessionStorage.getItem("mensaje" + nombreCreadorPropuesta);
    if (mensajeAntiguo == null) mensajeAntiguo ="";
    sessionStorage.setItem("mensaje" + nombreCreadorPropuesta, mensajeAntiguo + "{" + sessionStorage.getItem("usuarioName") + "|"  + sessionStorage.getItem("usuario")  + "|" + 
    "Su proyecto " + sessionStorage.getItem("peticionProy" + numero +  "nombre") + " ha sido aceptado "  + "}");	

	sessionStorage.setItem("creadorAprobar", sessionStorage.getItem("usuarioName"));

    location.replace("proyectosEvaluar.html");
}


function decline (numero) {
	sessionStorage.setItem("estado" + numero, "borrado");
	sessionStorage.setItem("paraBorrar", numero);
	apretadoBorrar();
	/*
	sessionStorage.removeItem("peticionProy" + numero);
	sessionStorage.removeItem("peticionProy" + numero +  "nombre");
    sessionStorage.removeItem("peticionProy" + numero +  "coste");
    sessionStorage.removeItem("peticionProy" + numero +  "rrhh");
    sessionStorage.removeItem("peticionProy" + numero +  "conseguir");
    sessionStorage.removeItem("peticionProy" + numero +  "inicioProyecto");
    sessionStorage.removeItem("peticionProy" + numero +  "finProyecto");
    sessionStorage.removeItem("peticionProy" + numero +  "nombreCreador");
    */

    sessionStorage.setItem("creadorAprobar", sessionStorage.getItem("usuarioName"));
    
    sessionStorage.setItem("evaluarBorrados" + numero, "borrado");
    //location.replace("proyectosEvaluar.html");
}

function motivoEliminacion(variable) {
	sessionStorage.setItem("evaluarBorrados" + sessionStorage.getItem("paraBorrar") + "motivo", variable);

	var modal = document.getElementById("myModal");
	modal.style.display = "none";

	// notificar al que lo publicó
	var nombreCreadorPropuesta = sessionStorage.getItem("peticionProy" + sessionStorage.getItem("paraBorrar") + "nombreCreador");
    var mensajeAntiguo = sessionStorage.getItem("mensaje" + nombreCreadorPropuesta);
    if (mensajeAntiguo == null) mensajeAntiguo ="";
    sessionStorage.setItem("mensaje" + nombreCreadorPropuesta, mensajeAntiguo + "{" + sessionStorage.getItem("usuarioName") + "|"  + sessionStorage.getItem("usuario")  + "|" + 
    "Su proyecto " + sessionStorage.getItem("peticionProy" + sessionStorage.getItem("paraBorrar") +  "nombre") + " ha sido borrado por " + variable +"}");

	location.replace("proyectosEvaluar.html");
}

function standBy (numero) {
	sessionStorage.setItem("estado" + numero, "standBy");
	sessionStorage.setItem("evaluarBorrados" + numero, "borrado");
	location.replace("proyectosEvaluar.html");
}

