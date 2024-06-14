import Image from "next/image";
import { getPokemon } from "../api/pokemonAPI";
import { PokemonImage } from "../components/pokemon-image";
import Link from "next/link";

function getConversion(input: string) {
  const length = input.length;
  const beforeDecimal = input.substring(0, length - 1);
  const afterDecimal = input.substring(length - 1);
  const value = +(beforeDecimal + "." + afterDecimal);

  if (value % 1 == 0) {
    return value + ".0";
  } else {
    return value;
  }
}

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;

  const pokemonObject = await getPokemon(pokemonName);

  return (
    <>
      <Link href="/">
        <div className="w-fit rounded-lg border border-transparent m-3 px-4 py-2 transition-colors dark: border-gray-500 hover:border-gray-300 hover:bg-gray-800">
          Back
        </div>
      </Link>
      <h1 className="text-4xl text-bold pt-4">
        {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
      </h1>
      <div className="m-4 relative w-[300px] h-[300px]">
        <PokemonImage
          image={pokemonObject.sprites.other["official-artwork"].front_default}
          name={pokemonName}
        />
      </div>
      <div
        id="pokemonStats"
        className="w-fit rounded-lg border-2 border-gray-500 m-10 p-5"
      >
        <h1 className="font-bold underline text-center mb-2">Stats</h1>
        <h2>HP: {pokemonObject.stats[0].base_stat}</h2>
        <h2>ATTACK: {pokemonObject.stats[1].base_stat}</h2>
        <h2>DEFENSE: {pokemonObject.stats[2].base_stat}</h2>
        <h2>SPECIAL ATTACK: {pokemonObject.stats[3].base_stat}</h2>
        <h2>SPECIAL DEFENSE: {pokemonObject.stats[4].base_stat}</h2>
        <h2>SPEED: {pokemonObject.stats[5].base_stat}</h2>
      </div>
      <div
        id="pokemonBuild"
        className="w-fit rounded-lg border-2 border-gray-500 m-10 p-5"
      >
        <h1 className="font-bold underline text-center mb-2">Body</h1>
        <h2>Height: {getConversion(pokemonObject.height.toString())}</h2>
        <h2>Weight: {getConversion(pokemonObject.weight.toString())}</h2>
      </div>
    </>
  );
}
