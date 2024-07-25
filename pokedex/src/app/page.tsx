import { getPokemonList } from "./api/pokemonAPI";
import PokemonList from "./components/pokemonList";
import { POKEMON } from "./types";

export default async function Home() {
  const pokemonList = await getPokemonList(151, 0);

  const pokemonListString = pokemonList; // Assuming pokemonList holds the JSON string

  // Type assertion (if TypeScript can't infer the type)
  const pokemonDataArray: POKEMON[] = JSON.parse(
    pokemonListString
  ) as POKEMON[];

  return (
    <main className="flex min-h-screen flex-col items-center p-16">
      <PokemonList pokemonList={pokemonDataArray} />
    </main>
  );
}
