/**
 * This script will help us to update a table in the database taht we have created
 * If the table already exists please use ALTER TABLE as shown belown.
 * If the table is not created you have to use CREATE TABLE [table_name] (specifications); To create it
 */
const { Client } = require("pg");
const { accessData } = require("./ACCESS_DATA");

const client = new Client(accessData);
let sqlQuery =
  "ALTER TABLE customers ADD COLUMN id INT_AUTO_INCREMENT PRIMARY KEY"; // This will create a new column called 'id' in our table. With the id being the primary key and the autoincrement property so it can have a different numerical values
client.connect((error) => {
  if (error) throw error;
  console.log("Connected");
  client.query(sqlQuery, (error, result) => {
    if (error) throw error;
    console.log("Table created");
  });
});
