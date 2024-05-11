/**
 * This example is to delete files using this method
 */

const fs = require("fs");

fs.unlink("mynewfile2.txt", (error) => {
  if (error) {
    throw error;
  }
  console.log("File removed");
});
