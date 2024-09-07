// const { emailTemplate } = require("./js-foundation/01-template");
// require("./js-foundation/02-destructuring");

const { getUserByID } = require("./js-foundation/03-callbacks");
// import { emailTemplate } from "./js-foundation/01-template";

// console.log(emailTemplate);
const id = 3;
getUserByID(id, function (error, user) {
  if (error) {
    throw new Error(error);
  }
  console.log(user);
});
