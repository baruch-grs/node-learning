/**
 * This example will show us how to return a selected rows and limit the result using the keyword LIMIT
 * We also can manipulate where we can start the SELECT process using OFFSET
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

let sqlQuery = "select * from customers order by name limit 10";

client.connect((err) => {
  if (err) throw err;
  console.log("Connected");
  /**
   * Without OFFSET
   */
  client.query(sqlQuery, (error, result) => {
    if (error) throw error;
    console.log(result.rows);
  });

  /**
   * With OFFSET 3 it will start selecting rows from fourth position
   */

  client.query(
    "select * from customers order by name limit 10 offset 3",
    (error, result) => {
      if (error) throw error;
      console.log(result.rows);
      client.end();
    }
  );

  /**
   * With OFFSET and shorter sintax
   * In this example THE NUMBERS ARE REVERSED, the example below means LIMIT 3 OFFSET 5
   *
   * This example is commented since I'm using postgres and this shorthand style is not supported in postgresql
   */

  // client.query(
  //   "select * from customers order by id limit 3, 5",
  //   (error, result) => {
  //     if (error) throw error;
  //     console.log(result.rows);
  //     client.end();
  //   }
  // );
});
