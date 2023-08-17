const os = require('os')

console.log('Memoria libre:' + os.freemem() + ' bytes')

const numeros = [];
for (let i = 0; i < 1000000; i++) {
    numeros.push(i);
}

console.log('Memoria libre luego del vector:' + os.freemem() + ' bytes')