const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});
/**
 * This query search for the customers that the adress equals to Parl Lane 38
 */
let sqlQuery = "SELECT * FROM customers WHERE address = 'Park Lane 38'";

client.connect((error) => {
  if (error) throw error;
  console.log("Connected");
  client.query(sqlQuery, (error, result) => {
    if (error) throw error;
    console.log(result.rows);
  });
  /**
   * This query search for customers where the address starts with the letter S
   */
  client.query(
    "SELECT * FROM customers WHERE address LIKE 'S%'",
    (err, res) => {
      if (err) throw err;
      console.log(res.rows);
      client.end();
    }
  );
});
