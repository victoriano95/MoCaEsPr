

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

},false);