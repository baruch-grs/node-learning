const fs = require("fs");

fs.writeFile("mynewfile3.txt", "Hello content cool", (error) => {
  if (error) {
    throw error;
  }
  console.log("File saved");
});
