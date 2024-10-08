import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe("JS Foundation/05 Factory Functions", () => {
  const getUUID = () => "1234";
  const getAge = () => 30;

  test("buildMakePerson should return a function", () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    expect(typeof makePerson).toBe("function");
  });

  test("buildMakePerson should return a person", () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    const johnDoe = makePerson({ name: "John Doe", birthdate: "1995-10-18" });
    expect(johnDoe).toEqual({
      id: "1234",
      name: "John Doe",
      birthdate: "1995-10-18",
      age: 30,
    });
  });
});
