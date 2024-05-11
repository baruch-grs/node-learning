const { URL } = require("url");

const myUrl = new URL(
  "http://localhost:8080/default.htm?year=2017&month=february"
);

console.log(myUrl.pathname);
console.log(myUrl.host);
console.log(myUrl.search);

console.log(myUrl.searchParams);

console.log(myUrl.searchParams.get("month"));
console.log(myUrl.searchParams.get("year"));
