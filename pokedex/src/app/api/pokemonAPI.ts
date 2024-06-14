
const POKEMON_API = "https://pokeapi.co/api/v2/"

export async function getPokemonList(dexSize: number, offset: number) {
    const response = await fetch(POKEMON_API + "pokemon?limit=" + {dexSize} + "&offset=" + {offset});
    const data = await response.json();
    return data.results;
}

export async function getPokemon(name:string) {
    const response = await fetch(POKEMON_API + "pokemon/" + name)
    const data = await response.json()
    return data
}