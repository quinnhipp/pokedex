import { getPokemonList } from "./api/pokemonAPI";
import PokemonList from "./components/pokemonList";

export default async function Home() {
  const pokemonList = await getPokemonList(100, 151);

  return (
    <main className="flex min-h-screen flex-col items-center p-16">
      <PokemonList pokemonList={pokemonList} />
    </main>
  );
}
