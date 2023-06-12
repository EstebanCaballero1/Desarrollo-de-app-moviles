function verificarContrasenas() {
    var contrasena1 = document.getElementById("contrasena1").value;
    var contrasena2 = document.getElementById("contrasena2").value;
    var mensaje;
    var container = document.getElementById("mensaje-adicional");
    container.innerHTML = "";
  
    if (contrasena1 == contrasena2) {
        mensaje = document.createTextNode("Las contraseñas coinciden.");
        container.appendChild(mensaje);
    } else {
        mensaje = document.createTextNode("Las contraseñas no coinciden.");
        container.appendChild(mensaje);
    }
}  