/**
 * This exercise is to escape values when the query values are variables that are provided by the user
 * To prevent SQL injections we need to escape the query values
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

/**
 * Method 1
 */
let adr = "Mountain 21";
let sqlQuery =
  "SELECT * FROM customers WHERE address = " + client.escapeLiteral(adr);

client.connect((err, result) => {
  if (err) throw err;
  console.log("Connected");
  client.query(sqlQuery, (err, result) => {
    if (err) throw err;
    console.log(result.rows);
  });

  /**
   * Method 2. Using a values array to escape the query values
   */
  let values = ["Amy", "Mountain 21"];
  client.query(
    "SELECT * FROM customers WHERE name = $1 OR address = $2",
    values,
    (error, res) => {
      if (error) throw error;
      console.log(res.rows);
    }
  );

  /**
   * Third method using a query object and escaping query values
   */

  let sqlQueryThirdMethod = {
    text: "select * from customers where name = $1 and id >= $2",
    values: ["Hannah", 5],
  };
  client.query(sqlQueryThirdMethod, (error, result) => {
    if (error) throw error;
    console.log(result.rows);
    client.end();
  });
});
