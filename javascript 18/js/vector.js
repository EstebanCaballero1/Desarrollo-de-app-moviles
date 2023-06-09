function generarVectorA(tamaño) {
    let vector = [];
    for (let posicion = 0; posicion < tamaño; posicion++) {
        vector.push(Math.floor(Math.random() * 32000));
    }
    return vector;
}

function devuelvePromedio(vector) {
    return vector.reduce((a, b) => a + b, 0) / vector.length;
}

function generarVectorMayorAlPromedio(vector, promedio) {
    return vector.filter((element) => element > promedio);
}

function contarMultiplosDosTres(vector) {
    let count = 0;
    for (let indice = 0; indice < vector.length; indice++) {
        if (vector[indice] % 2 === 0 && vector[indice] % 3 === 0) {
            count++;
        }
    }
    return count;
}

function sumaTodo(vector) {
    return vector.reduce((a, b) => a + b, 0);
}

function generarVectorConVectorX2(vector) {
    return vector.map((element) => element * 2);
}