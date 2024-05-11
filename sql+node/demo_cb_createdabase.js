const { Client } = require("pg");

/**
 * This code will help us to create a database in node and postgres
 */

require("dotenv").config();

const client = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

client.connect((error) => {
  if (error) throw error;
  console.log("Connected");
  client.query("CREATE DATABASE mydb", (error, result) => {
    if (error) throw error;
    console.log("Database created");
  });
});
