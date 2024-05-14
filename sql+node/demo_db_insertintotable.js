/**
 * This script is used to insert into table using node and postgresql
 */

const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});
let sqlQuery =
  "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
client.connect((error) => {
  if (error) throw error;
  client.query(sqlQuery, (error, result) => {
    if (error) throw error;
    console.log("1 record inserted");
    console.log(result);
  });
});
