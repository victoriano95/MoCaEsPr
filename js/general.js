


window.onload = function() {
  var usuario = sessionStorage.getItem("usuario");
  if (usuario != null) {
	$("#puestoID").append(usuario);

  	if (usuario == "cio") {

    	document.getElementById('configOptionID').style.display = 'none';
    	document.getElementById('evaluarProyectoID').style.display = 'none';
    	document.getElementById('proyectosOptionID').style.display = 'none';

  	} else if (usuario == "director") {

    	document.getElementById('peticionProyectoID').style.display = 'none';
    	document.getElementById('misProyectosOptionID').style.display = 'none';

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
	var contador = 0;

	var listaMensajes = sessionStorage.getItem("mensaje" + sessionStorage.getItem("usuarioName"));
	if (listaMensajes != null) {

		while  (listaMensajes.length != 0) {
			listaMensajes = listaMensajes.substring(1, listaMensajes.length); //{

			var nombre = listaMensajes.substring(0, listaMensajes.indexOf("|"));
			listaMensajes = listaMensajes.substring(listaMensajes.indexOf("|") + 1, listaMensajes.length);

			var puesto = listaMensajes.substring(0, listaMensajes.indexOf("|"));
			listaMensajes = listaMensajes.substring(listaMensajes.indexOf("|") + 1, listaMensajes.length);

			var mensaje = listaMensajes.substring(0, listaMensajes.indexOf("}"));
			listaMensajes = listaMensajes.substring(listaMensajes.indexOf("}") + 1, listaMensajes.length);

			$("#mensajesID").append("<a class=\"d-flex align-items-center dropdown-item\" href=\"#\">" +
                                    "<div class=\"mr-3\">" +
                                       "<div class=\"bg-primary icon-circle\">" + 
                                       		"<i class=\"fas fa-file-alt text-white\"></i>" +
                                       	"</div>" +
                                    "</div>" +
                                    "<div>"+
                                       "<span class=\"small text-gray-500\">" + nombre + " (" + puesto + ")" + "</span>"+
                                       "<p>" + mensaje + "</p>" +
                                   "</div>" +
                                 "</a>");
			contador ++;
		}
	}
	if (contador > 0) {
		document.getElementById("notificationNumberID").innerHTML = contador;
	}

	sessionStorage.removeItem("mensaje" + sessionStorage.getItem("usuarioName"));
}

function mensajesLeidos () {
	numeroMensajesNuevos = 0;
	document.getElementById("notificationNumberID").innerHTML = "";
}