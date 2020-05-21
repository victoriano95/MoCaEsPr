

function entrar() {
    nombre = document.getElementById("nombreID").value;
    contraseña = document.getElementById("passwordID").value;
    if (nombre != '' && contraseña != '') { // en principio no es obligatorio meter docuemntos
        // Cio
        if ((nombre == "Pepe" && contraseña == "1234") || (nombre == "Juan" && contraseña == "1234")) {

            sessionStorage.setItem("usuario", "cio");
            location.replace("index.html");

        } else if (nombre == "Victoriano" && contraseña == "1234") { // Director/Rector

            sessionStorage.setItem("usuario", "director");
            location.replace("index.html");

        } else if (nombre == "Berebere" && contraseña == "1234") { // Lo que sea

            sessionStorage.setItem("usuario", "lo que sea");
            location.replace("index.html");

        } else { 
            alert("Parece que no existe ese usuario con esa contraseña!");
            document.getElementById("nombreID").value = "";
            document.getElementById("passwordID").value = "";
        }

       sessionStorage.setItem("usuarioName", nombre);
    } else {
        alert("Faltan datos por completar");
    }
}
