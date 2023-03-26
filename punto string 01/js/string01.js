function EsGrito(ingresado){
	let tam, exclamacion=0, caracter=0, aux;
	tam= ingresado.length;

	for(let j=0; j<tam; j++){

		if(ingresado.charAt(j)=='!'){
			exclamacion++;
		} else{
			caracter++;
		}	
	}

	if(exclamacion>caracter){
		aux='ESGRITO';
	} else{
		aux='esgrito';
	}

	return aux;
}