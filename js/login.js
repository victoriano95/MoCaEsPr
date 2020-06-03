

function entrar() {
    nombre = document.getElementById("nombreID").value;
    contraseña = document.getElementById("passwordID").value;
    if (nombre != '' && contraseña != '') { // en principio no es obligatorio meter docuemntos
        
        if ((nombre == "Pepe" && contraseña == "1234") || (nombre == "Ana" && contraseña == "1234")) {  // Promotor

            sessionStorage.setItem("usuario", "promotor");
            location.replace("dashboard.html");

        } if ((nombre == "Alex" && contraseña == "1234") || (nombre == "Fernando" && contraseña == "1234")) {  // project manager

            sessionStorage.setItem("usuario", "project manager");
            location.replace("dashboard.html");

        } else if (nombre == "Juan" && contraseña == "1234") { // Director/Rector

            sessionStorage.setItem("usuario", "director");
            location.replace("dashboard.html");

        } else if (nombre == "Victoriano" && contraseña == "1234") {  // CIO

            sessionStorage.setItem("usuario", "cio");
            location.replace("dashboard.html");

        } else if (nombre == "admin" && contraseña == "1234") {

            sessionStorage.setItem("usuario", "admin");
            location.replace("dashboard.html");

        } else { 
            //alert("Parece que no existe ese usuario con esa contraseña!");
            document.getElementById("nombreID").value = "";
            document.getElementById("passwordID").value = "";
        }

       sessionStorage.setItem("usuarioName", nombre);
    } else {
        alert("Faltan datos por completar");
    }
}
