const fs = require("fs");
/**
 * This method is used for either update the content from a file or create a new file in case that the specified file doesn't exist
 */
fs.appendFile("mynewfile1.txt", "Hello content", (err) => {
  if (err) {
    throw err;
  }
  console.log("Saved");
});
