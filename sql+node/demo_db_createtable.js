/**
 * This script will help us to create a table in the database that we've created in the other file
 */
const { Client } = require("pg");
const { accessData } = require("./ACCESS_DATA");

const client = new Client(accessData);
let sqlQuery =
  "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
client.connect((error) => {
  if (error) throw error;
  console.log("Connected");
  client.query(sqlQuery, (error, result) => {
    if (error) throw error;
    console.log("Table created");
  });
});
