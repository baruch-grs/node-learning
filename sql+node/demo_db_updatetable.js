/**
 * In this exercise we are going to see how to update a table with Node
 */

const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

let sqlQuery =
  "update customers set address = 'Canyon 123' where address = 'Valley 345'";

client.connect((error) => {
  if (error) throw error;
  console.log("Connected");
  client.query(sqlQuery, (error, result) => {
    if (error) throw error;
    console.log(result);
    client.end();
  });
});
