import { createServer } from "node:http";

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("HELLO WORLD");
});

server.listen(port, hostname, () => {
  console.log(`Server running on port: ${port}`);
});
