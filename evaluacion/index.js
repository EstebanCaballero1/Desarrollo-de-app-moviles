const http = require('http')
const fs = require('fs')

const mime = {
  'html': 'text/html',
  'css': 'text/css',
  'jpg': 'image/jpg',
  'ico': 'image/x-icon',
  'mp3': 'audio/mpeg3',
  'mp4': 'video/mp4'
}

const servidor = http.createServer((pedido, respuesta) => {
  const url = new URL('http://localhost:8888' + pedido.url)
  let camino = 'public' + url.pathname
  if (camino == 'public/')
    camino = 'public/index.html'
  encaminar(pedido, respuesta, camino)
})

servidor.listen(8888)


function encaminar(pedido, respuesta, camino) {
  console.log(camino)
  switch (camino) {
    case 'public/recuperardatos': {
      recuperar(pedido, respuesta)
      break
    }
    default: {
      fs.stat(camino, error => {
        if (!error) {
          fs.readFile(camino, (error, contenido) => {
            if (error) {
              respuesta.writeHead(500, { 'Content-Type': 'text/plain' })
              respuesta.write('Error interno')
              respuesta.end()
            } else {
              const vec = camino.split('.')
              const extension = vec[vec.length - 1]
              const mimearchivo = mime[extension]
              respuesta.writeHead(200, { 'Content-Type': mimearchivo })
              respuesta.write(contenido)
              respuesta.end()
            }
          })
        } else {
          respuesta.writeHead(404, { 'Content-Type': 'text/html' })
          respuesta.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>')
          respuesta.end()
        }
      })
    }
  }
}


function recuperar(pedido, respuesta) {
  let info = ''
  pedido.on('data', dato => {
    info += dato
  })
  pedido.on('end', () => {
    const formulario = new URLSearchParams(info)
    console.log(formulario)
    respuesta.writeHead(200, { 'Content-Type': 'text/html' })
    /*let a = 0;
    let value = [60];
    value = formulario.get('mensaje');
    let valueAux;
    let vocalAux;
    let cordPosition;
    let vocal = ["a", "e", "i", "o", "u"];
    while (a < value.length) {
      aux = value[a];
      for (let aux = 5; aux != 0; aux--) {
        if (value[a] == vocal[aux]) {
          cord = a;
          cordPosition = cord;
          vocalAux = vocal[aux];
          while (cord < value.length + 2) {
            valueAux += value[cord];
            cord += 1;
          }
          value[a] = "P";
          value[a + 1] = vocalAux;
          for (let arrastrar = cordPosition; arrastrar < value.length + 2; arrastrar++) {
            value[arrastrar] = valueAux[arrastrar];
          }
        }
      }
      a++;
    }*/
    let a = 0;
    let value = "formulario.get(mensaje)";
    let valueAux = "";
    let vocalAux = "";
    let cordPosition;
    let vocal = ["a", "e", "i", "o", "u"];
    let tam = value.length
    while (a < tam) {
      let aux = value[a];
      for (let i = 4; i >= 0; i--) {
        if (aux == vocal[i]) {
          cordPosition = a;
          vocalAux = vocal[i];
          while (cordPosition < tam) {
            valueAux += value[cordPosition];
            cordPosition++;
          }
          value = value.slice(0, a) + "p" + vocalAux + value.slice(a, tam);
          tam += 1;
        }
      }
      a++;
    }
    const pagina =
      `<!doctype html><html><head></head><body>
      Idioma P:${value}<br>
     </body></html>`
    respuesta.end(pagina)
  })
}

console.log('Servidor web iniciado')