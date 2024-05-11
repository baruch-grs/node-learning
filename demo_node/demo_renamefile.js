/**
 * This method is used to rename the file indicated in the path
 */
const fs = require("fs");

fs.rename("mynewfile1.txt", "myrenamedfile.txt", (error) => {
  if (error) {
    throw error;
  }
  console.log("File renamed");
});
