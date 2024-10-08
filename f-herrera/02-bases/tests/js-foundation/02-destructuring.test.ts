import { characters } from "../../src/js-foundation/02-destructuring";

describe("JS Foundation/02 Destructuring", () => {
  test("characters should contain Flash, Superman", () => {
    expect(characters).toContain("Flash");
    expect(characters).toContain("Superman");
  });

  test('First  character is "Flash" and second  is "Superman"', () => {
    const [flash, superman] = characters;

    expect(flash).toBe("Flash");
    expect(superman).toBe("Superman");
  });
});
