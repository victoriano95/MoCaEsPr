

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


},false);