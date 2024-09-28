// const { emailTemplate } = require("./js-foundation/01-template");
// require("./js-foundation/02-destructuring");
// const { getUUID, getAge } = require("./plugins");

const {
  getPokemonById,
  asyncGetPokemonById,
} = require("./js-foundation/06-promises");

const { buildLogger } = require("./plugins");
// const { getUserByID } = require("./js-foundation/03-callbacks");
// const { getUserByID } = require("./js-foundation/04-arrow");
// import { emailTemplate } from "./js-foundation/01-template";
getPokemonById(9)
  .then((pokemon) => console.log(`Pokemon name: ${pokemon}`))
  .catch((error) => console.error(error))
  .finally(() => console.log("Finally"));

asyncGetPokemonById(4)
  .then((pokemon) => console.log(`Nombre del pokemon en async: ${pokemon}`))
  .catch((error) => console.error(`There was an error: ${error}`))
  .finally(() => console.log("Finally in async"));
/**
 * Referencia  a las factory functions
 */
// const { buildMakePerson } = require("./js-foundation/05-factory");

// const personObject = {
//   name: "John",
//   birthdate: "1995-10-18",
// };

// const makePerson = buildMakePerson({ getUUID, getAge });
// console.log(makePerson);

// const john = makePerson(personObject);

// console.log({ john });

/**
 * Fin de la referencia
 */

// console.log(emailTemplate);
// const id = 2;
// getUserByID(id, (error, user) => {
//   if (error) {
//     throw new Error(error);
//   }
//   console.log(user);
// });
