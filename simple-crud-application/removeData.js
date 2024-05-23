import queryDB from "./queryDB.js";
import fs from "fs";
import dbFileCheck from "./dbFileCheck.js";
import inquirer from "inquirer";

export default async function removeData(info) {
  dbFileCheck();
  try {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "recordID",
        message: "Enter Record ID",
      },
    ]);

    let remnantData = [];
    info.forEach((element) => {
      if (element.id !== answers.recordID) {
        remnantData.push(element);
      }
    });

    await fs.writeFile("db.json", JSON.stringify(remnantData), (error) => {
      if (error) {
        console.log("Error while updating database", error);
      }
      console.log("Record deleted with success");
    });
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

queryDB(removeData);
