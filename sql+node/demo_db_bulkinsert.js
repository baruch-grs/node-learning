/**
 * Script for making multiple inserts into a database
 *
 */

const { Client } = require("pg");
const format = require("pg-format");
require("dotenv").config();

const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});
let sqlQuery = "INSERT INTO customers (name, address) VALUES %L";
let values = [
  ["John", "Highway 71"],
  ["Peter", "Lowstreet 4"],
  ["Amy", "Apple st 652"],
  ["Hannah", "Mountain 21"],
  ["Michael", "Valley 345"],
  ["Sandy", "Ocean blvd 2"],
  ["Betty", "Green Grass 1"],
  ["Richard", "Sky st 331"],
  ["Susan", "One way 98"],
  ["Vicky", "Yellow Garden 2"],
  ["Ben", "Park Lane 38"],
  ["William", "Central st 954"],
  ["Chuck", "Main Road 989"],
  ["Viola", "Sideway 1633"],
];
let formattedString = format(sqlQuery, values);
console.log(formattedString);
client.connect((error) => {
  if (error) throw error;
  console.log("Succesful connection");

  client.query(formattedString, (error, result) => {
    if (error) throw error;
    console.log("Insert succesful");
    console.log(`Rows affected: ${result.rowCount}`);
  });
});
