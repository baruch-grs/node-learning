import { getUserByID } from "../../src/js-foundation/03-callbacks";

describe("JS Foundation/03 Callbacks", () => {
  test("getUserById should return an error if user does not exist", () => {
    const id = 10;
    getUserByID(id, (err, user) => {
      expect(err).toBe(`User not found with id: ${id}`);
      expect(user).toBeUndefined();
    });
  });

  test("getUserById should return user if user exists", () => {
    const id = 1;
    getUserByID(id, (err, user) => {
      expect(err).toBeUndefined();
      expect(user).toEqual({ id: 1, name: "John Doe" });
    });
  });
});
