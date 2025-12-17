const http = require('http');

http.createServer((req, res) => {
  res.end("Hello DevOps 🚀 Version 1");

}).listen(3000);

console.log("Server running on port 3000");
