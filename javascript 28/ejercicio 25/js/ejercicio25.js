function calcularCubo() {
    var numeroInput = document.getElementById("numero");
    var container = document.getElementById("respuesta1");
    var mensaje;
    container.innerHTML = "";

    var numero = parseInt(numeroInput.value);
    var resultado = Math.pow(numero, 3);

    mensaje = document.createTextNode("El número elevado al cubo es: " + resultado);
    container.appendChild(mensaje);
}
  
function mostrarMayor() {
    var numero1Input = document.getElementById("numero1");
    var numero2Input = document.getElementById("numero2");
    var container = document.getElementById("respuesta2");
    var mensaje;
    var numero1 = parseInt(numero1Input.value);
    var numero2 = parseInt(numero2Input.value);
    container.innerHTML = "";
    
    if (numero1 > numero2) {
        mensaje = document.createTextNode("El primer número es mayor");
    } else if (numero2 > numero1) {
        mensaje = document.createTextNode("El segundo número es mayor.");
    } else {
        mensaje = document.createTextNode("Ambos números son iguales.");
    }
    container.appendChild(mensaje);
}
  
function concatenarNombreApellido() {
    var nombreInput = document.getElementById("nombre");
    var apellidoInput = document.getElementById("apellido");
    var nombre = nombreInput.value;
    var apellido = apellidoInput.value;
    var resultadoInput = document.getElementById("resultado");
    resultadoInput.value = nombre + " " + apellido;
}
