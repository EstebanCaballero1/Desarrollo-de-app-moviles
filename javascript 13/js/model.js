function moda(N) {
	let a = new Array(2), Cont = 0, modas = [], azar;
	for (let h = 0; h < 2; h++) {
	  	a[h] = new Array(N).fill(0);
	}
  
	for (let i = 0; i < N; i++) {
	  	azar = numeroAleatorio();
	  	a[0][i] = azar;
	  	a[1][azar]++;
  
	  	let j = i;
	  	while (j > 0 && a[0][j - 1] > azar) {
			a[0][j] = a[0][j - 1];
			j--;
	  	}
	  	a[0][j] = azar;
  
	  	if (a[1][azar] > Cont) {
			Cont = a[1][azar];
			modas = [azar];
	  	} else if (a[1][azar] === Cont) {
			modas.push(azar);
	 	}
	}
  
	if (Cont <= 1) {
	  	modas = ["No Posee"];
	  	Cont = 0;
	}
  
	return a[0].join(', ') + '<br>Las modas son: ' + modas.join(', ') + '<br>Se repite(n): ' + Cont + ' veces';
}
  
function numeroAleatorio() {
	return Math.floor(Math.random() * 600) + 1;
}  