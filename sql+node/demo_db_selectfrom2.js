const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

let sqlQuery = "SELECT address, name FROM customers";

client.connect((error) => {
  if (error) throw error;
  client.query(sqlQuery, (error, result) => {
    if (error) throw error;
    let { rows } = result;
    console.log(rows);
  });
});
