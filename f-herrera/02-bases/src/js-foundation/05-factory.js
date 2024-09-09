// const personObject = {
//   name: "John",
//   birthdate: "1995-10-18",
// };

const buildMakePerson = ({ getUUID, getAge }) => {
  return ({ name, birthdate }) => {
    return {
      id: getUUID(),
      name,
      birthdate,
      age: getAge(birthdate),
    };
  };
};

module.exports = {
  buildMakePerson,
};
