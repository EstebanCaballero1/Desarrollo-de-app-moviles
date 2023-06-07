function digito(num) {
    let cont = 0;

    while (num >= 1) {
        num = Math.floor(num / 10);
        cont++;
    }
  
    return 'La cantidad de digitos que contiene el numero es de: '+cont;
}