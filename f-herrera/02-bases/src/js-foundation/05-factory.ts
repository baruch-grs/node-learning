// const personObject = {
//   name: "John",
//   birthdate: "1995-10-18",
// };
interface BuildMakePersonOptions {
  getUUID: () => string;
  getAge: (birthdate: string) => number;
}

interface PersonOptions {
  name: string;
  birthdate: string;
}
export const buildMakePerson = ({
  getUUID,
  getAge,
}: BuildMakePersonOptions) => {
  return ({ name, birthdate }: PersonOptions) => {
    return {
      id: getUUID(),
      name,
      birthdate,
      age: getAge(birthdate),
    };
  };
};
