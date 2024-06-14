"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import PokemonCard from "./pokemonCard";
import { useState, useEffect } from "react";
import { getPokemonList } from "../api/pokemonAPI";

type PokemonGridProps = {
  pokemonList: any;
};

type GENERATION = {
  name: string;
  dexSize: number;
  offset: number;
};

const gens: GENERATION[] = [
  { name: "All Pokemon", dexSize: 1025, offset: 0 },
  { name: "Gen 1", dexSize: 151, offset: 0 },
  { name: "Gen 2", dexSize: 100, offset: 151 },
  { name: "Gen 3", dexSize: 135, offset: 251 },
  { name: "Gen 4", dexSize: 107, offset: 386 },
  { name: "Gen 5", dexSize: 156, offset: 493 },
  { name: "Gen 6", dexSize: 72, offset: 649 },
  { name: "Gen 7", dexSize: 88, offset: 721 },
  { name: "Gen 8", dexSize: 96, offset: 809 },
  { name: "Gen 9", dexSize: 120, offset: 895 },
];

function getGen(genName: string): GENERATION {
  let value: GENERATION = gens[0];
  gens.forEach((gen) => {
    if (gen.name === genName) {
      console.log(gen.name);
      value = gen;
    }
  });
  console.log(value);
  return value;
}

const PokemonList = ({ pokemonList }: PokemonGridProps) => {
  const [generation, setGeneration] = useState(gens[0].name);
  const gen: GENERATION = getGen(generation);

  useEffect(() => {
    async () => {
      try {
        getPokemonList(gen.dexSize, gen.offset);
      } catch (error) {
        console.log("Error occurred while fetching Pokemon list.");
      }
    };
  }, [generation]);

  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="solid"
            className="border-white border-2 rounded-lg py-2 px-4 hover:bg-gray-900 hover:border-red-400"
          >
            {generation}
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Action event example"
          onAction={(key) => setGeneration(key.toString())}
        >
          {gens.map((gen: GENERATION) => {
            return <DropdownItem key={gen.name}>{gen.name}</DropdownItem>;
          })}
          {/* <DropdownItem key="All Pokemon">All Pokemon</DropdownItem>
          <DropdownItem key="Gen 1">Gen 1</DropdownItem>
          <DropdownItem key="Gen 2">Gen 2</DropdownItem>
          <DropdownItem key="Gen 3">Gen 3</DropdownItem> */}
        </DropdownMenu>
      </Dropdown>
      <div className="grid gap-8 grid-cols-4">
        {pokemonList.map((pokemon: any) => {
          return <PokemonCard name={pokemon.name} key={pokemon.id} />;
        })}
      </div>
    </>
  );
};
export default PokemonList;
