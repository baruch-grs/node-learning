import inquirer from "inquirer";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import queryDB from "./queryDB.js";

export default async function addData(info) {
  try {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What's your name?",
      },
      {
        type: "number",
        name: "phone",
        message: "What's your phone?",
      },
      {
        type: "list",
        name: "age",
        message: "Are you an adult?",
        choices: [
          { name: "Y", value: "Adult" },
          { name: "N", value: "Minor" },
        ],
      },
    ]);
  } catch (error) {
    console.log("Something went wrong", error);
  }
}
