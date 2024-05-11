/**
 * This script will help us to create a table in the database that we've created in the other file
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
  "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
client.connect((error) => {
  if (error) throw error;
  console.log("Connected");
  client.query(sqlQuery, (error, result) => {
    if (error) throw error;
    console.log("Table created");
  });
});
