const http = require('http');

const port = process.env.port || 3000;
const hostName = '127.0.0.1';

const server = http.createServer((req, res) => {
  res.end('Hi getting data from server!')   
})

server.listen(port, hostName, () => {
  console.log(`Server is running at port: ${port}`);
})