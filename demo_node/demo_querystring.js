const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    let query = url.parse(req.url, true).query;
    let txt = query.year + " " + query.month;
    res.end(txt);
  })
  .listen(8080);
