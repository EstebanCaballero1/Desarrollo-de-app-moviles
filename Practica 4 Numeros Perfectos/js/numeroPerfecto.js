function EsPerfecto(n){
	let aux,aux2;

	for(let k=4; k<n+1; k+=1){
		aux=0;
		for(let j=1; j<k; j+=1){
			aux2=j+1;
			if(k%j==0){
				aux+=j;
				//document.write(k+' - '+j+' - '+aux+' - '+aux2+'<br>');
			}
			if((aux2==k)&&(aux==k)){
				document.write(k+'<br>');
			}
		}
	}

}