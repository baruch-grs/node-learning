import { httpClient } from "../plugins";

// const getPokemonById = (id: number | string) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

// fetch(url).then((response) => {
//   response.json().then((pokemon) => {
// console.log(pokemon.name);
//     callback && callback(pokemon.name);
//   });
// });

/**
 * Mejor legibilidad
 */

//   return fetch(url)
//     .then((response) => response.json())
//     .then((pokemon) => pokemon.name);
// };

export const asyncGetPokemonById = async (
  id: string | number
): Promise<string> => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

    const pokemon = await httpClient.get(url);

    return pokemon.name;
  } catch (error) {
    throw `Pokemon not found with id ${id}`;
  }
};

// const asyncGetPokemonByIdFactory = (
//   id: number | string,
//   httpClientPluginMethod: (url: string) => void
// ) => {
//   try {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
//     return httpClientPluginMethod(url);
//   } catch (error) {
//     console.log(`Error fetching Pokémon: ${error}`);
//   }
// };
