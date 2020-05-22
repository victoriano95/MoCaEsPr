

var numeroPeticion = 0;

function crearPeticion() {

    if (document.getElementById("costeProyID").value != '' && document.getElementById("rrhhProyID").value != '' && document.getElementById("conseguirProyID").value != '' &&
        document.getElementById("inProyID").value != '' && document.getElementById("finProyID").value != '' && document.getElementById("nombreProyID").value != '' && tareasLlenas()) {
    	numeroPeticion = 0;
        result = sessionStorage.getItem("peticionProy" + numeroPeticion);
        while (result != null || sessionStorage.getItem("evaluarBorrados" + numeroPeticion) != null) {
        	numeroPeticion++;
            result = sessionStorage.getItem("peticionProy" + numeroPeticion);           	
        }

        sessionStorage.setItem("peticionProy" + numeroPeticion, "creada");
        sessionStorage.setItem("peticionProy" + numeroPeticion +  "nombre", document.getElementById("nombreProyID").value);
        sessionStorage.setItem("peticionProy" + numeroPeticion +  "coste", document.getElementById("costeProyID").value);
        sessionStorage.setItem("peticionProy" + numeroPeticion +  "rrhh", document.getElementById("rrhhProyID").value);
        sessionStorage.setItem("peticionProy" + numeroPeticion +  "conseguir", document.getElementById("conseguirProyID").value);
        sessionStorage.setItem("peticionProy" + numeroPeticion +  "inicioProyecto", document.getElementById("inProyID").value);
        sessionStorage.setItem("peticionProy" + numeroPeticion +  "finProyecto", document.getElementById("finProyID").value);
        // las tareas
        sessionStorage.setItem("peticionProy" + numeroPeticion +  "numeroTareas", numeroTareas);
        for (var i = 0; i< numeroTareas; i++) {
        	sessionStorage.setItem("peticionProy" + numeroPeticion +  "tarea" + i, document.getElementById("tarea" + i +"ID").value); // de que va la tarea
        	sessionStorage.setItem("peticionProy" + numeroPeticion +  "tareaEstado" + i, "pendiente"); // su estado
        }

        sessionStorage.setItem("peticionProy" + numeroPeticion +  "nombreCreador", sessionStorage.getItem("usuarioName"));
        sessionStorage.setItem("estado" + numeroPeticion, "espera");

        location.replace("index.html");
    } else {
        alert("Necesita completar todos los campos para la creación de este petición de proyecto");
    }
}	

var numeroTareas = 1;

function añadirTarea () {
	$("#conjuntoTareasID").append("<small class=\"form-text text-muted\" id=\"confuntoTareasID\">Tarea " + (numeroTareas + 1) + ":&nbsp;" +
										"<input type=\"text\" id=\"tarea" + numeroTareas + "ID\">" +
								   "</small>");
	numeroTareas++;
}

// que todas las casillas para meter tareas estén llenas
function tareasLlenas () {
	for (var i = 0; i < numeroTareas; i++) {
		console.log(i);
		if (document.getElementById("tarea" + i + "ID").value == '') {
			return false;
		}
	}
	return true;
}

