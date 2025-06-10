// index.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.end("Hello from Dockerized Node.js app!");
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
// Minor change for triggering CI/CD pipeline
// Minor change for triggering CI/CD pipeline_1
