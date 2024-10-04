const { httpClientPlugin } = require("../plugins");

const getPokemonById = (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

  // fetch(url).then((response) => {
  //   response.json().then((pokemon) => {
  // console.log(pokemon.name);
  //     callback && callback(pokemon.name);
  //   });
  // });

  /**
   * Mejor legibilidad
   */

  return fetch(url)
    .then((response) => response.json())
    .then((pokemon) => pokemon.name);
};

const asyncGetPokemonById = async (id) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

    const pokemon = await httpClientPlugin.get(url);

    return pokemon.name;
  } catch (error) {
    console.log(`Error fetching Pokémon: ${error}`);
  }
};

const asyncGetPokemonByIdFactory = (id, httpClientPluginMethod) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    return httpClientPluginMethod(url);
  } catch (error) {
    console.log(`Error fetching Pokémon: ${error}`);
  }
};
module.exports = {
  getPokemonById,
  asyncGetPokemonById,
  asyncGetPokemonByIdFactory,
};
