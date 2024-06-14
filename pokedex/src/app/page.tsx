import { getPokemonList } from "./api/pokemonAPI";
import PokemonList from "./components/pokemonList";

export default async function Home() {
  const pokemonList = await getPokemonList(9, 0);
  //console.log(pokemonList);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PokemonList pokemonList={pokemonList} />
    </main>
  );
}
