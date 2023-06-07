function C(A, B) {
    var C = [];
    var suma = 0;
    
    for (var i = 0; i < A.length; i++) {
        var resultado = A[i] * B[i];
        C.push(resultado);
        suma += resultado;
    }
    
    return { C: C, suma: suma };
}

function houston(A, B) {
    document.write('A = ');
    mostrarVector(A);
    document.write('<br>');
    
    document.write('B = ');
    mostrarVector(B);
    document.write('<br>');
    
    var Houston = C(A, B);
    
    document.write('C = ');
    mostrarVector(Houston.C);
    document.write('<br>');
    
    document.write('La suma total es = ' + Houston.suma);
}

function mostrarVector(vector) {
    for (var i = 0; i < vector.length; i++) {
        document.write(vector[i] + ' ');
    }
}