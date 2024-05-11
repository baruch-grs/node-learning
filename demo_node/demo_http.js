const http = require("http");

http
  .createServer((req, res) => {
    // res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello world");
    res.end("End");
  })
  .listen(8080);
