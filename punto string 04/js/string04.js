function ConvertirFrase(frase, cantDesplazamiento){
	let codigo='abcdefghijkmnñopqrstuvwxyzabcdefghijkmnñopqrstuvwxyz', tam=frase.length, aux, ingresado='';
	let i;

	for(i=0; i<=tam; i++){
		for(let j=25; j<50; j+=1){
			if(frase.charAt(i)==codigo.charAt(j)){
				aux=j+parseInt(cantDesplazamiento);
				ingresado+=codigo.charAt(aux);
			}
		}
	}

	return ingresado;
}