function EsPalindromo(frase){
	let tam, incongruencia, valor='SI';
	tam= frase.length-4;

	for(let y=0; y<=Math.round(tam/2); y++){
		if(frase.charAt(y)!=frase.charAt((tam)-y)){
			incongruencia=1;
		}
	}

	if(incongruencia>0){
		valor='NO';
	}
	
	return valor;
}