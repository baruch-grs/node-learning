const fs = require("fs");

const content = fs.readFileSync("README.md", "utf-8");

const wordCount = content.split(" ").length;

// const reactWordCount = content
//   .split(" ")
//   .filter((word) => word.toLowerCase().includes("react")).length;

const reactWordCount = content.match(/react/gi ?? []).length;

console.log("Palabras: ", wordCount);

console.log("Palabras React: ", reactWordCount);
