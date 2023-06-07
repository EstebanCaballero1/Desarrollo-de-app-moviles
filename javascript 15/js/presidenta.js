function EsPrimo(a, b) {
	let numerosPrimos = [];
  
	for (let i = a; i <= b; i++) {
	  	if (NumeroSecreto(i)) {
			numerosPrimos.push(i);
	  	}
	}
  
	return numerosPrimos.join(' ');
  }
  
function NumeroSecreto(n) {
	let nStr = String(n);
	let tam = nStr.length;
	let sum = 0;
  
	if (!esPrimo(n)) {
		return false;
	}
  
	for (let a = 0; a < tam; a++) {
	  	sum += parseInt(nStr.charAt(a), 10);
	}
  
	if (!esPrimo(sum)) {
	  	return false;
	}
  
	return n;
}
  
function esPrimo(num) {
	if (num <= 1) {
		return false;
	}
  
	for (let i = 2; i <= Math.sqrt(num); i++) {
	  	if (num % i === 0) {
			return false;
	  	}
	}
  
	return true;
  }  