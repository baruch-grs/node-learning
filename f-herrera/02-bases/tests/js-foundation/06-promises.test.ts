import { asyncGetPokemonById } from "../../src/js-foundation/06-promises";

describe("JS Foundation/06 Promises", () => {
  test("asyncGetPokemonById should return a pokemon", async () => {
    const pokemonId = 1;
    const pokemon = await asyncGetPokemonById(pokemonId);

    expect(pokemon).toBe("bulbasaur");
  });

  test("asyncGetPkoemnById should return an error if pokemon does not exist", async () => {
    const pokemonId = 1000000000;
    try {
      await asyncGetPokemonById(pokemonId);
      expect(true).toBe(false);
    } catch (error) {
      expect(error).toBe(`Pokemon not found with id ${pokemonId}`);
    }
  });
});
