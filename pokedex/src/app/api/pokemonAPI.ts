import { off } from "process";

const POKEMON_API = "https://pokeapi.co/api/v2/"

export async function getPokemonList(dexSize: number, offset: number) {
    const request = POKEMON_API + "pokemon?limit=" + dexSize + "&offset=" + offset
    const response = await fetch(request);
    const data = await response.json();
    const results = data.results
    console.log("Dex Size: " + dexSize + "\tOffset: " + offset + "\nList: " + results.length)
    console.log("Request: " + request)
    return results;
}

// export async function getPokemonList(dexSize: number, offset: number) {
//     const response = await fetch(POKEMON_API + "pokemon?limit=10000&offset=0");
//     const data = await response.json();
//     return data.results;
// }

// export async function getGen1List() {
//     const response = await fetch(POKEMON_API + "pokemon?limit=151&offset=0");
//     const data = await response.json();
//     return data.results;
// }

// export async function getGen2List() {
//     const response = await fetch(POKEMON_API + "pokemon?limit=100&offset=150");
//     const data = await response.json();
//     return data.results;
// }

export async function getPokemon(name: string) {
    const response = await fetch(POKEMON_API + "pokemon/" + name)
    const data = await response.json()
    return data
}

export async function getPokedex(number: number) {
    const response = await fetch(POKEMON_API + "pokedex/" + number)
    const data = await response.json()
    return data
}