function ConvertirNombre(frase){
	let values='aeioun', aux='', aux1, val, pal='u';

	for(let y=0; y<=frase.length; y++){
		val='false';
		aux+=frase.charAt(y);
		for(let h=0; h<values.lenght; h++){	
			if( frase.charAt(y+1)==values[h] ){	val='true';	}
		}
		if((val=='false')&&(aux1=='false')&&(y!=frase.length)){	aux+= pal; }
		aux1=val;
	}

	return aux;
}