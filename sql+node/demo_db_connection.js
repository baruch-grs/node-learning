/**
 * This script will help us to connect to the database
 */
const { Client } = require("pg");
const { accessData } = require("./ACCESS_DATA");

const client = new Client(accessData);

client.connect((error) => {
  if (error) throw error;
  console.log("Connected");
});
