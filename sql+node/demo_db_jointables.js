/**
 * With the results from formatJsonAndBulkInsert excercise, we're now going to proceed to join the tables in this exercise
 * Now we have data in both tables products and users, we are going to use the contained data in both tables in order to join them
 */
const { Client } = require("pg");
const format = require("pg-format");
require("dotenv").config();

const client = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});
/**
 * This first query will give us the result of joining users and products tables within using the favorite_product field from the table users
 * and the id field from the products table
 */
let sqlQuery =
  "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";

/**
 * This query will give us the result of joining users and products no matter if they have assigned favorite products
 * Which means it's going to return all users
 */

let sqlQueryLeftJoin =
  "SELECT users.name AS user, products.name AS favorite FROM users LEFT JOIN products ON users.favorite_product = products.id";

/**
 * This query will give us the result of joining users and products no matter if they have no user assgined to a favorite product
 * Which means, it's going to return all products
 */

let sqlQueryRightJoin =
  "SELECT users.name AS user, products.name AS favorite FROM users RIGHT JOIN products ON users.favorite_product = products.id";

client.connect((error) => {
  if (error) throw error;
  console.log("Connected");

  client.query(sqlQuery, (error, result) => {
    if (error) throw error;
    console.log(result.rows);
  });

  client.query(sqlQueryLeftJoin, (error, result) => {
    if (error) throw error;
    console.log(result.rows);
  });

  client.query(sqlQueryRightJoin, (error, result) => {
    if (error) throw error;
    console.log(result.rows);
    client.end();
  });
});
