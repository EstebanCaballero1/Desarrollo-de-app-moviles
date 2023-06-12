function mostrar(idBoton) {
    var container = document.getElementById("respuesta");
    container.innerHTML = "";
    var mensaje = document.createTextNode("El botón " + idBoton + " ha sido presionado");
    container.appendChild(mensaje);
}