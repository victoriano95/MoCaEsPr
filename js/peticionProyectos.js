

var numeroPeticion = 0;

function crearPeticion() {

    if (document.getElementById("costeProyID").value != '' && document.getElementById("rrhhProyID").value != '' && document.getElementById("conseguirProyID").value != '' &&
        document.getElementById("inProyID").value != '' && document.getElementById("finProyID").value != '' && document.getElementById("nombreProyID").value != '') {
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
        sessionStorage.setItem("peticionProy" + numeroPeticion +  "nombreCreador", sessionStorage.getItem("usuarioName"));
        sessionStorage.setItem("estado" + numeroPeticion, "espera");

        location.replace("index.html");
    } else {
        alert("Necesita completar todos los campos para la creación de este petición de proyecto");
    }
}

