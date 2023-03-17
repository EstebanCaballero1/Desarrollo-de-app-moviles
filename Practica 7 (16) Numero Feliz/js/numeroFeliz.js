function EsFeliz(n){
	let aux=0, aux1=0, aux2=0, aux3=0, aux5=0;
	
	for(let k=1; k<n+1; k++){
		if(k<100){	
			if(k>9){
				aux1=Math.floor(k/10);
			}
			aux2=k-aux1*10;
			
			if((Math.pow(aux1,2)+Math.pow(aux2,2))==k){
				document.write('El numero '+k+' es narciso <br>');
			}
		}else{
			if(k<1000){		
				if(k>99){
					aux1=Math.floor(k/100);
				}
				if(k>9){
					aux2=Math.floor(k/10);
					aux2-=aux1*10;
				}
			
				aux3=k-((aux1*100)+(aux2*10));
			
				if((Math.pow(aux1,3)+Math.pow(aux2,3)+Math.pow(aux3,3))==k){
					document.write('El numero '+k+' es narciso <br>');
				}
			}else{
				if(k<10000){
					if(k>999){
						aux1=Math.floor(k/1000);
					}
					if(k>99){
						aux=k-(aux1*1000);
						aux2=Math.floor(aux/100);
					}
					if(k>9){
						aux=(k-(aux1*1000));
						aux3=Math.floor(aux/10);
						aux3-=aux2*10
					}
					aux4=k-((aux1*1000)+(aux2*100)+(aux3*10));
					
					if((Math.pow(aux1,4)+Math.pow(aux2,4)+Math.pow(aux3,4)+Math.pow(aux4,4))==k){
						document.write('El numero '+k+' es narciso <br>');
					}
				}
			}
		}
	
	}

}