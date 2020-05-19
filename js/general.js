


window.onload = function() {
  var usuario = sessionStorage.getItem("usuario");
  if (usuario != null) {
	$("#puestoID").append(usuario);

  	if (usuario == "cio") {
    	document.getElementById('configOptionID').style.display = 'none';
  	} else if (usuario == "director") {
    	document.getElementById('dashboardOptionID').style.display = 'none';
  	} else if (usuario == "lo que sea") {

  	}  
  } else {
  	$("#puestoID").append("Gobern TIC");
  }
  
  var nombreUs = sessionStorage.getItem("usuarioName");
  if (nombreUs != null) {
  	document.getElementById("nombreusuarioHeaderID").innerHTML = nombreUs;
  } else {
  	document.getElementById("nombreusuarioHeaderID").innerHTML = "Nombre usuario";
  }

  mensajes();
};



var numeroMensajesNuevos;
function mensajes () {	
	numeroMensajesNuevos = 1;  // calcularlos

	document.getElementById("notificationNumberID").innerHTML = numeroMensajesNuevos;

	// hacer esto para cada mensaje
	$("#mensajesID").append("<a class=\"d-flex align-items-center dropdown-item\" href=\"#\">" +
                                    "<div class=\"mr-3\">" +
                                       "<div class=\"bg-primary icon-circle\">" + 
                                       		"<i class=\"fas fa-file-alt text-white\"></i>" +
                                       	"</div>" +
                                    "</div>" +
                                    "<div>"+
                                       "<span class=\"small text-gray-500\">December 12, 2019</span>"+
                                       "<p>" + "mensaje" + "</p>" +
                                   "</div>" +
                                 "</a>");
}

function mensajesLeidos () {
	numeroMensajesNuevos = 0;
	document.getElementById("notificationNumberID").innerHTML = "";
}