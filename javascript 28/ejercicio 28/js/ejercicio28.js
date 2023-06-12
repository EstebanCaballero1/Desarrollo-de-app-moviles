function mostrarDeportesSeleccionados() {
    var mensaje = [];
    var contenedor = document.getElementById("respuesta");
    contenedor.innerHTML = "";

    var futbol = document.getElementById("futbol");
    if (futbol.checked) {
        mensaje.push(futbol.value);
    }

    var basket = document.getElementById("basket");
    if (basket.checked) {
        mensaje.push(basket.value);
    }

    var tenis = document.getElementById("tenis");
    if (tenis.checked) {
        mensaje.push(tenis.value);
    }

    contenedor.value = "Deportes seleccionados: " + mensaje.join(", ");
}