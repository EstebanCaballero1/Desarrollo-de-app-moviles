function sonBinarios(num1, num2) {
    let combinado = num1 + num2; 
    const tamaño = combinado.length;

    for (let indice = 0; indice < tamaño; indice++) {
        if (combinado.charAt(indice) !== '0' && combinado.charAt(indice) !== '1') {
            return false;
        }
    }

    return true;
}

function cumplenRequisitos( num1, num2 ) {
    while (num1.length !== num2.length || !sonBinarios(num1, num2)) {
        alert('Las cadenas deben tener la misma longitud y ser binarias');
        num1 = prompt('Ingrese el primer número', '');
        num2 = prompt('Ingrese el número con el cual será comparado', '');
    }

    return true;
}


function hammingEntre(num1, num2) {
    let inconsistencia = 0, tamaño = num1.length;

    for (let nDeCiclo = 0; nDeCiclo < tamaño; nDeCiclo++) {
        if (num1.charAt(nDeCiclo) != num2.charAt(nDeCiclo)) {
            inconsistencia++;
        }
    }

    return inconsistencia;
}