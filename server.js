const http = require("http");
const fs = require("fs");

const port = 8000;
const address = "127.0.0.2";

const product_data = fs.readFileSync(
  `${__dirname}/dev-data/data.json`, //'dirname' pertains to the root directory name where this file is location. It is used in replacement of '.'
  "utf-8"
);
const product_data_object = JSON.parse(product_data);

// SERVER
const server = http.createServer((req, res) => {
  const route = req.url;

  if (route === "/overview" || route === "/") {
    //Overview page
    res.end("THIS IS OVERVIEW");
  } else if (route === "/product") {
    //Product page
    res.end("THIS IS PRODUCT");
  } else if (route === "/api") {
    //API
    res.writeHead(200, {
      "Content-Type": "application/json",
    }),
      res.end(product_data);
  } else {
    //Not found
    res.writeHead(404, {
      "Content-Type": "text/html",
    }),
      res.end("<h1>PAGE NOT FOUND!</h1>");
  }
});

server.listen(port, address, () => {
  console.log(`Server is running on port 'http://${address}:${port}'`);
});
