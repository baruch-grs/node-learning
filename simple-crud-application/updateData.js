import inquirer from "inquirer";
import fs from "fs";
import queryDB from "./queryDB.js";
import dbFileCheck from "./dbFileCheck.js";

export default async function updateData(info) {
  dbFileCheck();

  try {
    let current;
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "recordID",
        message: "Enter Record ID",
      },
    ]);
    info.forEach((item) => {
      if (item.id === answers.recordID) {
        current = item;
        updateDetails(current, info);
      }
    });
  } catch (error) {
    console.log("Something went wrong!", error);
  }
}

async function updateDetails(current, info) {
  try {
    const feedbacks = await inquirer.prompt([
      {
        type: "input",
        default: current.name,
        name: "name",
        message: "What's your name?",
      },
      {
        type: "number",
        default: current.phone,
        name: "phone",
        message: "What's your phone?",
      },
      {
        type: "list",
        default: current.age,
        name: "age",
        message: "Are an adult?",
        choices: [
          { name: "Y", value: "Adult" },
          { name: "N", value: "Minor" },
        ],
      },
    ]);

    current.name = feedbacks.name;
    current.phone = feedbacks.phone;
    current.age = feedbacks.age;

    await fs.writeFile("db.json", JSON.stringify(info), (error) => {
      if (error) {
        console.log("Error", error);
      }
      console.log("User updated with success");
    });
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

queryDB(updateData);
