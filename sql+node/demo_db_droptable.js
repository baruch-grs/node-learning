/**
 * This is a code example where we can delete a table. We can condition the table to IF EXISTS then remove the table
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

let sqlQuery = "drop table customers";

client.connect((error) => {
  if (error) throw error;
  console.log("Connected");
  client.query(sqlQuery, (error, result) => {
    if (error) throw error;
    console.log(result);
  });

  client.query("drop table if exists customers", (error, result) => {
    if (error) throw error;
    console.log(result);
  });
});
