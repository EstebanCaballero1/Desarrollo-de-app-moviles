function sonBinarios( num1, num2 ) {
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
    if (num1.length !== num2.length || !sonBinarios(num1, num2)) {
        return false;
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
