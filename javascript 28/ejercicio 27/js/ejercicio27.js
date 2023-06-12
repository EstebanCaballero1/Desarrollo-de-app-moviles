function precioPizza() {
    var selectPizza = document.getElementById("selectPizza");
    var valor = selectPizza.value;
    var pizzaInput = document.getElementById("pizza");
    pizzaInput.value = "La pizza cuesta: $" + valor;
}

function calcularPresupuesto() {
    var procesador = document.getElementById("selectProcesador");
    var monitor = document.getElementById("selectMonitor");
    var discoDuro = document.getElementById("selectDiscoDuro");
    
    var precioProcesador = parseInt(procesador.value);
    var precioMonitor = parseInt(monitor.value);
    var precioDiscoDuro = parseInt(discoDuro.value);
    
    var total = precioProcesador + precioMonitor + precioDiscoDuro;
    
    document.getElementById("presupuesto").value = "$"+ total;
}
calcularPresupuesto();

function calcularImporte() {
    var cantidadPizza = document.getElementById("selectPizzaCantidad");
    var cantidad = parseInt(document.getElementById("cantidad").value);
    
    var precioPizza = parseFloat(cantidadPizza.value);
    var importe = precioPizza * cantidad;
    
    document.getElementById("importeTotal").value = importe;
}

var preguntasRespuestas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        respuestas: ["Londres", "París", "Madrid", "Berlín"],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál es el río más largo del mundo?",
        respuestas: ["Nilo", "Yangtsé", "Misisipi", "Amazonas"],
        respuestaCorrecta: 3
    },
    {
        pregunta: "¿Quién pintó La Mona Lisa?",
        respuestas: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Cuál es el idioma más hablado del mundo?",
        respuestas: ["Español", "Inglés", "Hindi", "Chino mandarín"],
        respuestaCorrecta: 3
    }
];

function generarExamen() {
    var preguntas = document.getElementById("preguntas");
    preguntas.innerHTML = "";

    actualizar();

    for (let i = 0; i < preguntasRespuestas.length; i++) {
        var pregunta = document.createElement("div");
        pregunta.innerHTML = `<h3>Pregunta ${i + 1}: ${preguntasRespuestas[i].pregunta}</h3>`;

        var selectPregunta = document.createElement("select");
        selectPregunta.id = `selectPregunta${i + 1}`;

        for (let j = 0; j < preguntasRespuestas[i].respuestas.length; j++) {
            var option = document.createElement("option");
            option.value = j;
            option.text = preguntasRespuestas[i].respuestas[j];
            selectPregunta.appendChild(option);
        }

        pregunta.appendChild(selectPregunta);
        preguntas.appendChild(pregunta);
    }
}

function evaluarRespuestas() {
    var correctas = 0, incorrectas = 0;

    for (let i = 1; i <= 4; i++) {
        var selectPregunta = document.getElementById(`selectPregunta${i}`);
        var respuesta = parseInt(selectPregunta.value); // Convertir el valor a entero

        var preguntaActual = preguntasRespuestas[i - 1]; // Obtener la pregunta actual del arreglo

        if (respuesta === preguntaActual.respuestaCorrecta) {
            correctas++;
        } else {
            incorrectas++;
        }
    }

    document.getElementById("respuestasCorrectas").value = correctas;
    document.getElementById("respuestasIncorrectas").value = incorrectas;
}

function actualizar() {
    var elemento = document.querySelector('.multiple');
    elemento.style.height= '87.6vh';
}