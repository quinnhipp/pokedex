import { Image, Link } from "@nextui-org/react";

interface pokemonCardProps {
  name: string;
}

const PokemonCard = ({ name }: pokemonCardProps) => {
  return (
    <Link
      href={name}
      key={name + "Card"}
      className="group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors dark: border-gray-500 hover:border-gray-300 hover:bg-gray-800"
    >
      <div className="text-xl text-center">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </div>
    </Link>
  );
};
export default PokemonCard;
