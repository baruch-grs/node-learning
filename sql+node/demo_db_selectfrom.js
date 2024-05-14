const { Client } = require("pg");
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
  client.query(
    "SELECT * FROM customers WHERE id>=45",
    (error, result, fields) => {
      if (error) throw error;
      console.log(result.rows);
    }
  );
});
