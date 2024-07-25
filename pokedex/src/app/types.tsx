export type POKEMON = {
  id: number;
  name: string;
  url: string;
};

export type TYPES = {
  type1: string;
  type2: string;
};

export type POKEMONGRIDPROPS = {
  pokemonList: POKEMON;
};

export type GENERATION = {
  name: string;
  dexSize: number;
  offset: number;
};
