const http = require("http");

const port = 8000;
const address = "127.0.0.2";

// SERVER
const server = http.createServer((req, res) => {
  res.end("Hello from the server!");
});

server.listen(port, address, () => {
  console.log(`Server is running on port '${address}:${port}'`);
});
