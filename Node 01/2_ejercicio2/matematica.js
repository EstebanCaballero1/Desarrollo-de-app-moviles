const Pi = 3.14;

function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function dividir(num1, num2) {
    if(num2 == 0){
        mostrarErrorDivicion();
    } else {
        return num1 / num2;
    }
}

function mostrarErrorDivicion(){
    console.log("En mi programa no se admite diviciones por '0'")
}

exports.sumar = sumar;
exports.restar = restar;
exports.dividir = dividir;
exports.pi = Pi;