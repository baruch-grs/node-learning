/**
 * This example let us delete some records for the table customers, we have to specify the condition for removing data from database
 * if we forgot or omit the WHERE keyword, we are going to delete all the records in the table
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

let sqlQuery = "delete from customers where address = 'Mountain 21'";

client.connect((error) => {
  if (error) throw error;
  console.log("connected");

  client.query(sqlQuery, (error, result) => {
    if (error) throw error;
    console.log(result.rowCount);
    client.end();
  });
});
