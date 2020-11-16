const http = require('http')

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end('<h1>Hello World!</h1>');
  }
  
  const server = http.createServer(requestListener);
  server.listen(4242);