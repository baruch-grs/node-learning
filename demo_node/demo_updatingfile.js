const fs = require("fs");
/**
 * These methods are used to update the content in files
 */
fs.appendFile("mynewfile1.txt", "New content", (error) => {
  if (error) {
    throw error;
  }
  console.log("Saved new content. File updated");
});

fs.writeFile("mynewfile3.txt", "Writing new content", (error) => {
  if (error) {
    throw error;
  }
  console.log("File changed. Content replaced");
});
