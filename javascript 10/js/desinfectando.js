function desinfectar(pal, v1, v2) {
    let tam = pal.length, aux = v1 + v2 + v1, aux1 = v1 + v1, aux2;

    document.write(pal + ' ' + v1 + ' ' + v2 + '<br>');

    for (let i = 0; i < tam; i++) {
        aux2 = '';
        for (let j = 0; j < 3; j++) {
            aux2 += pal.charAt(i + j);
        }
        if (aux2 == aux) {
            let Pal = "";
            for (let g = 0; g < i+1; g++) {
                Pal += pal.charAt(g);
            }
            for (let f = i + 2; f < tam; f++) {
                Pal += pal.charAt(f);
            }
            pal = Pal;
            break;
        }
    }
    return pal;
}