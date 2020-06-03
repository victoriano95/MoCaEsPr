

window.addEventListener("load",function(event) {

  cargarOpciones();

},false);

var numeroPeticion = 0;

function cargarOpciones () {
    var resultado = "";
    var numeroProyecto = 0;
    var contadorCompletados = 0;
    var peticion = sessionStorage.getItem("peticionProy" + numeroProyecto +  "nombre"); // el nombre por mirar alguno
    while (peticion != null) {
        if (sessionStorage.getItem("peticionProy" + numeroProyecto +  "nombreManager") == sessionStorage.getItem("usuarioName") && sessionStorage.getItem("peticionProy" + numeroProyecto + "completarManager") == "Pendiente") {   // si es para mi y si no está ya completado de antes
            resultado += "<tr> "+
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyecto + "nombre") + "</td>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyecto + "conseguir") + "</td>" +
                    "<td>" + sessionStorage.getItem("peticionProy" + numeroProyecto + "finProyecto") + "</td>" +
                    "<td>" + "<small class=\"form-text text-muted\"><input type=\"text\" id=\"costeProy" + numeroProyecto + "\"></small>" + "</td>" +
                    "<td>" + "<small class=\"form-text text-muted\"><input type=\"text\" id=\"rrhhProy" + numeroProyecto + "\"></small>" + "</td>" +
                    "<td>"+
                       "<button type=\"button\" class=\"btn btn-primary\" onclick=\"envair(" + numeroProyecto + ")\">Envair</button>" +                     
                    "</td>"+
                "</tr>";
        } else {
            contadorCompletados++;
        }

        numeroProyecto++;
        peticion = sessionStorage.getItem("peticionProy" + numeroProyecto +  "nombre");
    }

    if (numeroProyecto == 0 || contadorCompletados == numeroProyecto) {
        $("#dondeCuelgaID").append("<tr>" +
                    "<td><h1>No hay propuestas de proyecto para completar</h1></td>" +
                "</tr>");
      const myNode = document.getElementById("dataTable");
      myNode.innerHTML = '';
    } else {
        $("#bodyProyectsAcceptadosID").append(resultado);
    }
}



function envair (numero) {
    var presupuesto = document.getElementById("costeProy" + numero).value;
    var rrhh = document.getElementById("rrhhProy" + numero).value;
    if (presupuesto != '' && rrhh != '') {
        console.log("aprobar " + numero);
        sessionStorage.setItem("peticionProy" + numero +  "coste", presupuesto);
        sessionStorage.setItem("peticionProy" + numero +  "rrhh", rrhh);
        sessionStorage.setItem("peticionProy" + numero + "completarManager", "Completado");
        location.replace("peticionProyectoParte2.html");
    } else {
        alert("Necesita introducir tanto el presupuesto como la cantidad de recursos humanos");
    }
}   
