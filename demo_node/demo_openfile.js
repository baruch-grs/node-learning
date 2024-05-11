const fs = require("fs");

fs.open("mynewfile2.txt", "w", (err) => {
  if (err) throw err;
  console.log("Saved new file");
});
