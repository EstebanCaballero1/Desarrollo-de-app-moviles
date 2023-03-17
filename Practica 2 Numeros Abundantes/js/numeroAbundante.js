function EsAbundante(n){
	let aux;

	for(let k=4; k<n+1; k+=1){
		aux=0;
		for(let j=2; j<k; j+=1){
			if(k%j==0){
				aux+=j;
				if(aux>k){
					document.write(k+'<br>');
				}
			}
		}
	}

}