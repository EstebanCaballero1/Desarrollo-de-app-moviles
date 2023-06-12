function reseña() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var comentarios = document.getElementById("comentarios").value;

    var mensaje = "Nombre: " + nombre + "\nCorreo electrónico: " + email + "\nComentarios: " + comentarios;

    alert(mensaje);
}