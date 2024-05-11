const { Client } = require("pg");
const { accessData } = require("./ACCESS_DATA");

/**
 * This code will help us to create a database in node and postgres
 */

const client = new Client(accessData);

client.connect((error) => {
  if (error) throw error;
  console.log("Connected");
  client.query("CREATE DATABASE mydb", (error, result) => {
    if (error) throw error;
    console.log("Database created");
  });
});
