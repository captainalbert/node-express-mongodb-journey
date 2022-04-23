const http = require("http");
const url = require("url");

const port = 8000;
const address = "127.0.0.2";

// SERVER
const server = http.createServer((req, res) => {
  const route = req.url;

  route === "/overview" || route === "/"
    ? res.end("THIS IS OVERVIEW")
    : route === "/product"
    ? res.end("THIS IS PRODUCT")
    : (res.writeHead(404, {
        "Content-Type": "text/html",
      }),
      res.end("<h1>PAGE NOT FOUND!</h1>"));
});

server.listen(port, address, () => {
  console.log(`Server is running on port 'http://${address}:${port}'`);
});
