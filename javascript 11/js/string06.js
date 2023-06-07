function SECRETO(ingresado){
    let tam, parentesisA=0, parentesisB=0, FparentesisA=0, FparentesisB=0, aux=' ', aux1=' ', aux2=' ', aux3=' ', sec1=' ', sec2=' ', seccionB=0, FseccionA=0;
    tam= ingresado.length;

    for(let j=0; j<tam; j++){
        if(ingresado.charAt(j)=='('){
            aux++;

            switch(aux){
                case 1: 
                    FseccionA=j;
                    parentesisA=FseccionA;
                break;
                case 2: 
                    parentesisB=j;
                break;
            }
        }

        if(ingresado.charAt(j)==')'){
            aux1++;

            switch(aux1){
                case 1: 
                    FparentesisA=j;
                break;
                case 2: 
                    FparentesisB=j;
                    seccionB=FparentesisB;
                break;
            }
        }

    }

    for(let j=0; j<tam; j+=1){
        if(j<parentesisA){
            sec1+=ingresado.charAt(j);
        }
        if((parentesisA<j)&&(j<FparentesisA)){
            aux2+=ingresado.charAt(j);
        }
        if((parentesisB<j)&&(j<FparentesisB)){
            aux3+=ingresado.charAt(j);
        }
        if((parentesisA<j)&&(j>FparentesisB)){
            sec2+=ingresado.charAt(j);
        }
    }


    aux2=aux2.split("").reverse().join("");
    aux3=aux3.split("").reverse().join("");
    return sec1+' '+aux2+' '+aux3+' '+sec2;
}
