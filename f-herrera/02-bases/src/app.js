// const { emailTemplate } = require("./js-foundation/01-template");
// require("./js-foundation/02-destructuring");
const { getUUID, getAge } = require("./plugins");

// const { getUserByID } = require("./js-foundation/03-callbacks");
// const { getUserByID } = require("./js-foundation/04-arrow");
// import { emailTemplate } from "./js-foundation/01-template";
const { buildMakePerson } = require("./js-foundation/05-factory");

const personObject = {
  name: "John",
  birthdate: "1995-10-18",
};

const makePerson = buildMakePerson({ getUUID, getAge });
console.log(makePerson);

const john = makePerson(personObject);

console.log({ john });

// console.log(emailTemplate);
// const id = 2;
// getUserByID(id, (error, user) => {
//   if (error) {
//     throw new Error(error);
//   }
//   console.log(user);
// });
