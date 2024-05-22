/**
 * In this exercise I'm formatting JSONs in order to do a bulk insert to create new tables, then proceed to join the created tables
 * We are using format dependency in order to give a format to the query so we can make a bulk insert into the tables
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

const userData = [
  { id: 1, name: "John", favorite_product: 154 },
  { id: 2, name: "Peter", favorite_product: 154 },
  { id: 3, name: "Amy", favorite_product: 155 },
  { id: 4, name: "Hannah", favorite_product: 156 },
  { id: 5, name: "Michael", favorite_product: 154 },
];

const productsData = [
  { id: 154, name: "Chocolate Heaven" },
  { id: 155, name: "Tasty Lemons" },
  { id: 156, name: "Vanilla Dreams" },
];

/**
 *
 * @param  arr
 * @returns Array
 * This method lets us to format the received array to create a new array that is needed in a specific format to do a bulk insert into database
 */

const formatToArray = (arr) => {
  return arr.map((item) => Object.keys(item).map((key) => item[key]));
};

const formatedProducts = formatToArray(productsData);
const formatedUserData = formatToArray(userData);

const userDataQuery = format(
  "INSERT INTO users (id, name, favorite_product) VALUES %L",
  formatedUserData
);
const productDataQuery = format(
  "insert into products (id, name) values %L",
  formatedProducts
);

client.connect((error) => {
  if (error) throw error;
  console.log("Connected successfully");

  client.query(userDataQuery, (error, result) => {
    if (error) throw error;
    console.log(result);
  });

  client.query(productDataQuery, (error, result) => {
    if (error) throw error;
    console.log(result);
    client.end();
  });
});
