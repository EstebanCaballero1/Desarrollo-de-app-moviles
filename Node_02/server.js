const http = require('http');
const fs = require('fs');

const mime = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'text/javascript',
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
};

const servidor = http.createServer((pedido, respuesta) => {
    const url = new URL('http://localhost:8888' + pedido.url);
    let camino = 'public' + url.pathname;
    if (camino === 'public/') camino = 'public/index.html';
    encaminar(pedido, respuesta, camino);
});

servidor.listen(8888, () => {
    console.log('Servidor web iniciado en el puerto 8888');
});

function encaminar(pedido, respuesta, camino) {
    if (camino === 'public/') {
        enviar(respuesta, 'public/index.html', 'text/html');
    } else if (camino === 'public/actualizar') {
        actualizar(pedido, respuesta);
    } else {
        fs.stat(camino, error => {
            if (!error) {
                fs.readFile(camino, (error, contenido) => {
                    if (error) {
                        respuesta.writeHead(500, { 'Content-Type': 'text/plain' });
                        respuesta.write('Error interno');
                        respuesta.end();
                    } else {
                        const extension = camino.split('.').pop();
                        const mimearchivo = mime[extension] || 'application/octet-stream';
                        respuesta.writeHead(200, { 'Content-Type': mimearchivo });
                        respuesta.end(contenido);
                    }
                });
            } else {
                respuesta.writeHead(404, { 'Content-Type': 'text/html' });
                respuesta.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>');
                respuesta.end();
            }
        });
    }
}

function enviar(respuesta, camino, tipo) {
    fs.readFile(camino, (err, contenido) => {
        if (err) {
            respuesta.writeHead(500, { 'Content-Type': 'text/plain' });
            respuesta.end('Error interno del servidor');
        } else {
            respuesta.writeHead(200, { 'Content-Type': tipo });
            respuesta.end(contenido);
        }
    });
}

function actualizar(pedido, respuesta) {
    let body = '';
        
    pedido.on('data', chunk => {
        body += chunk.toString();
    });

    pedido.on('end', () => {
        const numLines = parseInt(body.split('=')[1]);
        const figura = figuraA(numLines);
            
        respuesta.writeHead(200, { 'Content-Type': 'text/plain' });
        respuesta.end(figura);
    });
}

function figuraA(numLines) {
    let figure = '';

    for (let i = 1; i <= numLines; i++) {
        // Agregar espacios
        for (let k = 0; k < numLines - i + 1; k++) {
            figure += ' ';
        }

        // Inserta Simbolos
        for (let j = 1; j <= 2 * i - 1; j++) {
            if (j % 2 === 0) {
                figure += 'O';
            } else {
                figure += '*';
            }
        }

        figure += '\n';
    }

    return figure;
}