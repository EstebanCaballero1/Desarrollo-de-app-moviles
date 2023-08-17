const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const { randomChoice } = require('./helpers'); // Necesitarás implementar la función randomChoice

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const filePath = path.join(__dirname, parsedUrl.pathname);

  if (req.method === 'GET' && filePath === path.join(__dirname, '/')) {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.method === 'POST' && parsedUrl.pathname === '/play') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const userChoice = body.split('=')[1];
      const computerChoice = randomChoice(['piedra', 'papel', 'tijera']);
      const result = determineWinner(userChoice, computerChoice); // Necesitarás implementar la función determineWinner
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(result);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
