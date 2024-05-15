/**
 * Order By is a method that let us sort the results in ascenden or descending order, by default it's going to be ascendant order
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

let sqlQueryAscendant = "SELECT * FROM customers ORDER BY name";
let sqlQueryDescendant = "SELECT * FROM customers ORDER BY name DESC";

client.connect((error) => {
  if (error) throw error;
  console.log("Connected");

  client.query(sqlQueryAscendant, (err, res) => {
    if (err) throw err;
    console.log(res.rows);
  });

  client.query(sqlQueryDescendant, (err, res) => {
    if (err) throw err;
    console.log(res.rows);
    client.end();
  });
});
