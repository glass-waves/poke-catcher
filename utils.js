import { pokemon } from './data.js'

export function findById(array, id) {

}
export function generateThreePokemon() {
    const container = document.getElementById('pokemon-zone');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    let pokemon1 = getRandomPokemon();
    let pokemon2 = getRandomPokemon();
    let pokemon3 = getRandomPokemon();

    while (pokemon1 === pokemon2 || pokemon2 === pokemon3 || pokemon3 === pokemon1) {
        pokemon1 = getRandomPokemon();
        pokemon2 = getRandomPokemon();
        pokemon3 = getRandomPokemon();
    }
    const image1 = renderPokeImage(pokemon1);
    const image2 = renderPokeImage(pokemon1);
    const image3 = renderPokeImage(pokemon1);

    div1.append(image1);
    div2.append(image2);
    div3.append(image3);

    container.append(div1, div2, div3);
}

export function renderPokeImage(pokemon) {
    const pokeImage = document.createElement('img');

    pokeImage.src = pokemon.url_image;
    

    return pokeImage;

}

export function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random * pokemon.length);
    return pokemon[randomIndex];
}

export function lastChoices(poke1, poke2, poke3) {
    const oldArray = [];
    oldArray.push(poke1, poke2, [poke3]);
    return oldArray;
}