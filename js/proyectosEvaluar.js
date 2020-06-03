




window.addEventListener("load",function(event) {
    load();
},false);



function load () {
/*	
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
            // como tendrán que ser los 3 botones de cada fila
            var botonAceptar = "border border-info";
            var textoAceptar = "black";
            var botonBorrar = "border border-info";
            var textoBorrar = "black";
            var botonStandBy = "border border-info";
            var textoStandBy = "black";
            if (sessionStorage.getItem("estado" + numeroProyectos) == "borrado") {
                botonBorrar = "btn-danger";
                textoBorrar = "white";
            } else if (sessionStorage.getItem("estado" + numeroProyectos) == "standBy") {
                botonStandBy = "btn-warning";
                textoStandBy = "white";
            } else { // por defecto el proyecto se aprueba
                sessionStorage.setItem("estado" + numeroProyectos, "aceptado");
                botonAceptar = "btn-success";
                textoAceptar = "white";
            }

			$("#bodyProyectsID").append("<tr> "+
                  	"<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "nombre") + "</td>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "coste") + "</td>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "rrhh") + "</td>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "conseguir") + "</td>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "inicioProyecto") + "</td>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "finProyecto") + "</td>" +
                    "<td><a class=\"btn btn-outline-dark btn-circle\" role=\button\" onclick=\"up(" + numeroProyectos + ")\" id=\"bottonDeclinarID\"><i class=\"fas fa-arrow-up\"></i></a>" +
                    	"<a class=\"btn btn-outline-dark btn-circle\" role=\button\" onclick=\"down(" + numeroProyectos + ")\" id=\"bottonStandByID\"><i class=\"fas fa-arrow-down\"></i></a>" + 
                    "</td>" +
                    "<td><a class=\"btn " + botonAceptar + " btn-circle ml-1  \" role=\"button\" onclick=\"accept(" + numeroProyectos + ")\"><i class=\"fas fa-check text-" + textoAceptar + "\"></i></a>" +
                    	"<a class=\"btn " + botonStandBy + " btn-circle ml-1\" role=\button\" onclick=\"standBy(" + numeroProyectos + ")\" id=\"bottonDeclinarID\"><i class=\"fas fa-minus text-" + textoStandBy + "\"></i></a>" +
                    	"<a class=\"btn " + botonBorrar +  " btn-circle ml-1\" role=\button\" onclick=\"decline(" + numeroProyectos + ")\" id=\"bottonStandByID\"><i class=\"fas fa-times text-" + textoBorrar + "\"></i></a>" +
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
    */
    
    var numeroProyectos = 0;
    proyecto = sessionStorage.getItem("peticionProy" + numeroProyectos +  "nombre");   // nombre por poner uno
    var nohayparaEvaluar = 0;

    while (proyecto != null) {
        // como tendrán que ser los 3 botones de cada fila
        var botonAceptar = "border border-info";
        var textoAceptar = "black";
        var botonBorrar = "border border-info";
        var textoBorrar = "black";
        var botonStandBy = "border border-info";
        var textoStandBy = "black";
        if (sessionStorage.getItem("estado" + numeroProyectos) == "borrado") {
        botonBorrar = "btn-danger";
            textoBorrar = "white";
        } else if (sessionStorage.getItem("estado" + numeroProyectos) == "standBy") {
            botonStandBy = "btn-warning";
            textoStandBy = "white";
        } else { // por defecto el proyecto se aprueba
            sessionStorage.setItem("estado" + numeroProyectos, "aceptado");
            botonAceptar = "btn-success";
            textoAceptar = "white";
        }

        if (sessionStorage.getItem("peticionProy" + numeroProyectos) == "creada") {
            nohayparaEvaluar = 1;
            $("#bodyProyectsID").append("<tr> "+
                "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "nombre") + "</td>" +
                "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "coste") + "</td>" +
                "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "rrhh") + "</td>" +
                "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "conseguir") + "</td>" +
                "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "inicioProyecto") + "</td>" +
                "<td>" + sessionStorage.getItem("peticionProy" + numeroProyectos + "finProyecto") + "</td>" +
                "<td><a class=\"btn btn-outline-dark btn-circle\" role=\button\" onclick=\"up(" + numeroProyectos + ")\" id=\"bottonDeclinarID\"><i class=\"fas fa-arrow-up\"></i></a>" +
                    "<a class=\"btn btn-outline-dark btn-circle\" role=\button\" onclick=\"down(" + numeroProyectos + ")\" id=\"bottonStandByID\"><i class=\"fas fa-arrow-down\"></i></a>" + 
                "</td>" +
                "<td><a class=\"btn " + botonAceptar + " btn-circle ml-1  \" role=\"button\" onclick=\"accept(" + numeroProyectos + ")\"><i class=\"fas fa-check text-" + textoAceptar + "\"></i></a>" +
                   "<a class=\"btn " + botonStandBy + " btn-circle ml-1\" role=\button\" onclick=\"standBy(" + numeroProyectos + ")\" id=\"bottonDeclinarID\"><i class=\"fas fa-minus text-" + textoStandBy + "\"></i></a>" +
                    "<a class=\"btn " + botonBorrar +  " btn-circle ml-1\" role=\button\" onclick=\"decline(" + numeroProyectos + ")\" id=\"bottonStandByID\"><i class=\"fas fa-times text-" + textoBorrar + "\"></i></a>" +
                "</td>" +
                "<td></td>" +
            "</tr>");
        }

        numeroProyectos ++;
        proyecto = sessionStorage.getItem("peticionProy" + numeroProyectos +  "nombre");
    }

    if (nohayparaEvaluar == 0) { // no ha entrado ni una vez en meter elementos
        $("#dondeCuelgaID").append("<tr>" +
                "<td><h1>La propuesta ya ha sido aceptada</h1></td>" +
           "</tr>");
        const myNode = document.getElementById("dataTable");
        myNode.innerHTML = '';
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

	//sessionStorage.setItem("evaluarBorrados" + numero, "borrado");  

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
    
    //sessionStorage.setItem("evaluarBorrados" + numero, "borrado");
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
	//sessionStorage.setItem("evaluarBorrados" + numero, "borrado");
	location.replace("proyectosEvaluar.html");
}



function up (numero) {
	if (numero > 0) {
		intercambiarPuestos (numero, numero - 1)
	}
}

function down (numero) {
	var numeroProyectos = 0;
	proyecto = sessionStorage.getItem("peticionProy" + numeroProyectos, "creada");
	while (sessionStorage.getItem("evaluarBorrados" + numeroProyectos) != null) { // se ha borrado
		numeroProyectos ++;console.log("coño");
		var proyecto = sessionStorage.getItem("peticionProy" + numeroProyectos, "creada");
	}
	while (proyecto != null) {
		numeroProyectos ++;
		var proyecto = sessionStorage.getItem("peticionProy" + numeroProyectos, "creada");
		while (sessionStorage.getItem("evaluarBorrados" + numeroProyectos) != null) { // se ha borrado
			numeroProyectos ++;
			var proyecto = sessionStorage.getItem("peticionProy" + numeroProyectos, "creada");
		}
	}

	if (numero < numeroProyectos - 1) {
		intercambiarPuestos (numero, numero + 1);
	}
}

function intercambiarPuestos (numero1, numero2) {
	// gaurdar estado anterior
	var aux1 = sessionStorage.getItem("peticionProy" + numero1);//con todos
    var aux2 = sessionStorage.getItem("peticionProy" + numero1 +  "nombre");
    var aux3 = sessionStorage.getItem("peticionProy" + numero1 +  "coste");
    var aux4= sessionStorage.getItem("peticionProy" + numero1 +  "rrhh");
    var aux5= sessionStorage.getItem("peticionProy" + numero1 +  "conseguir");
    var aux6 = sessionStorage.getItem("peticionProy" + numero1 +  "inicioProyecto");
    var aux7 = sessionStorage.getItem("peticionProy" + numero1 +  "finProyecto");
        // las tareas
    var aux8 = sessionStorage.getItem("peticionProy" + numero1 +  "numeroTareas");
    var aux9 = [];
    var aux10 = [];
    for (var i = 0; i< aux8; i++) {
        aux9 [i] = sessionStorage.getItem("peticionProy" + numero1 +  "tarea" + i); // de que va la tarea
        aux10 [i] = sessionStorage.getItem("peticionProy" + numero1 +  "tareaEstado" + i); // su estado
    }

    var aux11 = sessionStorage.getItem("peticionProy" + numero1 +  "nombreCreador");
    var aux12 = sessionStorage.getItem("estado" + numero1);

    // meter numero2 en numero 1
    sessionStorage.setItem("peticionProy" + numero1, sessionStorage.getItem("peticionProy" + numero2));//con todos
    sessionStorage.setItem("peticionProy" + numero1 +  "nombre", sessionStorage.getItem("peticionProy" + numero2 +  "nombre"));
    sessionStorage.setItem("peticionProy" + numero1 +  "coste", sessionStorage.getItem("peticionProy" + numero2 +  "coste"));
    sessionStorage.setItem("peticionProy" + numero1 +  "rrhh", sessionStorage.getItem("peticionProy" + numero2 +  "rrhh"));
    sessionStorage.setItem("peticionProy" + numero1 +  "conseguir", sessionStorage.getItem("peticionProy" + numero2 +  "conseguir"));
    sessionStorage.setItem("peticionProy" + numero1 +  "inicioProyecto", sessionStorage.getItem("peticionProy" + numero2 +  "inicioProyecto"));
    sessionStorage.setItem("peticionProy" + numero1 +  "finProyecto", sessionStorage.getItem("peticionProy" + numero2 +  "finProyecto"));
        // las tareas
    var numeroTareas = sessionStorage.getItem("peticionProy" + numero2 +  "numeroTareas");
    for (var i = 0; i< numeroTareas; i++) {
        sessionStorage.setItem("peticionProy" + numero1 +  "tarea" + i, sessionStorage.getItem("peticionProy" + numero2 +  "tarea" + i)); // de que va la tarea
        sessionStorage.setItem("peticionProy" + numero1 +  "tareaEstado" + i, sessionStorage.getItem("peticionProy" + numero2 +  "tareaEstado" + i)); // su estado
    }

    sessionStorage.setItem("peticionProy" + numero1 +  "nombreCreador", sessionStorage.getItem("peticionProy" + numero2 +  "nombreCreador"));
    sessionStorage.setItem("estado" + numero1, sessionStorage.getItem("estado" + numero2));

    // meter el auxiliar en numero 2
    sessionStorage.setItem("peticionProy" + numero2, aux1);//con todos
    sessionStorage.setItem("peticionProy" + numero2 +  "nombre", aux2);
    sessionStorage.setItem("peticionProy" + numero2 +  "coste", aux3);
    sessionStorage.setItem("peticionProy" + numero2 +  "rrhh", aux4);
    sessionStorage.setItem("peticionProy" + numero2 +  "conseguir", aux5);
    sessionStorage.setItem("peticionProy" + numero2 +  "inicioProyecto", aux6);
    sessionStorage.setItem("peticionProy" + numero2 +  "finProyecto", aux7);
        // las tareas
    var numeroTareas = aux8;
    for (var i = 0; i< numeroTareas; i++) {
        sessionStorage.setItem("peticionProy" + numero2 +  "tarea" + i, aux9[i]); // de que va la tarea
        sessionStorage.setItem("peticionProy" + numero2 +  "tareaEstado" + i, aux10[i]); // su estado
    }

    sessionStorage.setItem("peticionProy" + numero2 +  "nombreCreador", aux11);
    sessionStorage.setItem("estado" + numero2, aux12);

    location.replace("proyectosEvaluar.html");
}


function enviarPropuesta () {
    sessionStorage.setItem("propuestaDeProyectosCreada", "si");
    // mensaje
    location.replace("dashboard.html");
}
