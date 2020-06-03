/*
PROMOTOR
    nombre del proyecto
    que se quiere conseguir
    cuando se quiere conseguir
    tareas?

PROGECT MANAGER
    precio
    rrhh

PROMOTOR
    aceptarlo/descartarlo
*/

var numeroPeticion = 0;
var managerNombre = "Alex";

function crearPeticion() {

    if (document.getElementById("conseguirProyID").value != '' && document.getElementById("finProyID").value != '' && 
        document.getElementById("nombreProyID").value != '' && tareasLlenas()) {
    	numeroPeticion = 0;
        result = sessionStorage.getItem("peticionProy" + numeroPeticion  + "nombre");
        while (result != null || sessionStorage.getItem("evaluarBorrados" + numeroPeticion) != null) {
        	numeroPeticion++;
            result = sessionStorage.getItem("peticionProy" + numeroPeticion + "nombre");           	
        }

        //sessionStorage.setItem("peticionProy" + numeroPeticion, "creada"); // ESTO ES LO QUE DEJA APROBARLAS
        sessionStorage.setItem("peticionProy" + numeroPeticion + "completarManager", "Pendiente"); // para que las complete el manager
        sessionStorage.setItem("peticionProy" + numeroPeticion +  "nombre", document.getElementById("nombreProyID").value);
        sessionStorage.setItem("peticionProy" + numeroPeticion +  "conseguir", document.getElementById("conseguirProyID").value);
        sessionStorage.setItem("peticionProy" + numeroPeticion +  "inicioProyecto", "nada");  //por no borrarlo aun
        sessionStorage.setItem("peticionProy" + numeroPeticion +  "nombreManager", managerNombre);
        sessionStorage.setItem("peticionProy" + numeroPeticion +  "finProyecto", document.getElementById("finProyID").value);
        // las tareas
        sessionStorage.setItem("peticionProy" + numeroPeticion +  "numeroTareas", numeroTareas);
        for (var i = 0; i< numeroTareas; i++) {
        	sessionStorage.setItem("peticionProy" + numeroPeticion +  "tarea" + i, document.getElementById("tarea" + i +"ID").value); // de que va la tarea
        	sessionStorage.setItem("peticionProy" + numeroPeticion +  "tareaEstado" + i, "pendiente"); // su estado
        }

        sessionStorage.setItem("peticionProy" + numeroPeticion +  "nombreCreador", sessionStorage.getItem("usuarioName"));
        sessionStorage.setItem("estado" + numeroPeticion, "espera");

        sessionStorage.setItem ("fasePortfolioAux", "yes");

        location.replace("dashboard.html");
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
		if (document.getElementById("tarea" + i + "ID").value == '') {
			return false;
		}
	}
	return true;
}


function manager (nombre) {
    managerNombre = nombre;
    document.getElementById("selectorManagerID").innerHTML = nombre;
}

