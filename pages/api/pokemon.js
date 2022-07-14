import axios from "axios";

export const GET_ALL_POKEMON =
  "https://pokeapi.co/api/v2/pokemon?limit=4&offset=0";

export const pokemonApi = {
  getAllPokemon: async () => {
    try {
      const res = await axios.get(GET_ALL_POKEMON);
      const data = await res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
