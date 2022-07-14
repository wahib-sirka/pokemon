import React from "react";
import "twin.macro";
import { pokemonApi } from "./api/pokemon";

export default function Home() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [pokemonData, setPokemonData] = React.useState();

  React.useEffect(() => {
    const fetchAllPokemon = async () => {
      const pokemons = await pokemonApi.getAllPokemon();
      setPokemonData(pokemons?.results ?? {});
      setIsLoaded(true);
    };

    fetchAllPokemon();
  }, []);

  console.log("wahib", pokemonData);

  return (
    <div tw="w-full h-full min-h-[800px] flex flex-col items-center justify-center space-y-4">
      <div tw="w-full text-center mx-auto">
        <p tw="font-bold text-black text-base h-full">Pokemons</p>
      </div>
      <div tw="w-full flex items-center justify-center flex-wrap space-x-4">
        {isLoaded &&
          pokemonData?.map((pokemon, index) => (
            <div
              tw="h-[240px] w-[240px] shadow-md rounded-md flex flex-col items-center justify-start p-4 hover:bg-gray-100 "
              key={index}
            >
              <p>{pokemon.name}</p>
              <a href={pokemon.url}>
                <button tw="outline-none border-none bg-white px-2 py-1 shadow-md rounded-lg cursor-pointer">
                  See Details
                </button>
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}
