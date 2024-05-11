const { URL } = require("url");
const fs = require("fs");
const http = require("http");
/**
 * This exercise makes us to create a server that responds to a different html files depending on the url indicated in the browser
 */
const server = http.createServer();
const PORT = 8080;
server
  .on("request", (request, response) => {
    const { headers, method, url } = request;
    const myUrl = new URL(`http://${headers.host}${url}`);
    let fileName = `.${myUrl.pathname}`;
    fs.readFile(fileName, (error, data) => {
      if (error) {
        response.writeHead(404, { "Content-Type": "text/html" });
        return response.end("404 Not Found");
      }
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    });
  })
  .listen(PORT, () => `Server is running on port: ${PORT}`);
