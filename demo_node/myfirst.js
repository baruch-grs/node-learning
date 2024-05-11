const http = require("http");
const dt = require("./myfirstModule");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
  })
  .listen(8080);
