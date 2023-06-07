function result(pal) {
    let tam = pal.length, one = 0, two = 0;
    pal = pal.toUpperCase();

    for (let i = 0; i < tam; i++) {
        let aux = pal.charAt(i);

        if (aux === 'F') {
            break;
        }

        switch (aux) {
            case 'A':
                one += 1;
                break;
            case 'B':
                two += 1;
                break;
        }
    }

    return one + ' - ' + two;
}