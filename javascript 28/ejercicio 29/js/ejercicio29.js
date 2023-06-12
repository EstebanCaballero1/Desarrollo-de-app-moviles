function verificarEdad() {
    var radioMayor = document.getElementById("radioMayor");
    var radioMenor = document.getElementById("radioMenor");

    if (radioMayor.checked) {
        alert("Puede ingresar al sitio.");
    } else if (radioMenor.checked) {
        alert("No puede ingresar al sitio.");
    } else {
        alert("Por favor, seleccione una opción.");
    }
}