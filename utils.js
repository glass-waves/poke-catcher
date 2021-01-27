import { pokemon } from './data.js';
import { getStats, incrementCaught, incrementSeen, storeSession } from './localStorageUtils.js';
import { returnTotalArray } from './results/mungeUtils.js';

let numberOfTurns = 0;
let oldArray = [];
let elementInBoth = true;

export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) return item;
    }

}
export function findByType(array, type) {
    for (let item of array) {
        if (item.type === type) return item;
    }

}
export function generateThreePokemon() {
    //increment number of turns taken
    numberOfTurns++;

    //grab and create dom elements
    const container = document.getElementById('pokemon-zone');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    //add class to divs
    div1.classList.add('poke-div');
    div2.classList.add('poke-div');
    div3.classList.add('poke-div');

    //generate random pokemon from list
    let pokemon1 = getRandomPokemon();
    let pokemon2 = getRandomPokemon();
    let pokemon3 = getRandomPokemon();

    while (pokemon1 === pokemon2 || pokemon2 === pokemon3 || pokemon3 === pokemon1 || elementInBoth === true) {
        pokemon1 = getRandomPokemon();
        pokemon2 = getRandomPokemon();
        pokemon3 = getRandomPokemon();
        const currentArray = [pokemon1, pokemon2, pokemon3];
        elementInBoth = compareTwoArrays(currentArray, oldArray);
        console.log(elementInBoth);

    }
    oldArray = [pokemon1, pokemon2, pokemon3];
    elementInBoth = true;


    incrementSeen(pokemon1.id);
    incrementSeen(pokemon2.id);
    incrementSeen(pokemon3.id);

    const image1 = renderPokeImage(pokemon1);
    const image2 = renderPokeImage(pokemon2);
    const image3 = renderPokeImage(pokemon3);

    const statDiv1 = generateLiveStats(pokemon1.id);
    const statDiv2 = generateLiveStats(pokemon2.id);
    const statDiv3 = generateLiveStats(pokemon3.id);

    div1.append(image1, statDiv1);
    div2.append(image2, statDiv2);
    div3.append(image3, statDiv3);

    container.textContent = '';
    container.append(div1, div2, div3);
}

export function renderPokeImage(pokemon) {
    const pokeImage = document.createElement('img');
    pokeImage.src = pokemon.url_image;
    pokeImage.classList.add('pokemon-image');

    pokeImage.addEventListener('click', () => {
        incrementCaught(pokemon.id);
        if (numberOfTurns > 9){
            storeSession();
            window.location = './results/results.html';
        } else {
            generateThreePokemon();
            appearCaptured(pokeImage);
        }
    });

    return pokeImage;
}

export function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemon.length);
    return pokemon[randomIndex];
}

export function lastChoices(poke1, poke2, poke3) {
    const oldArray = [];
    oldArray.push(poke1, poke2, [poke3]);
    return oldArray;
}

export function generateLiveStats(id) {
    const statDiv = document.createElement('div');
    const pokeName = document.createElement('p');
    const pokeSeen = document.createElement('p');
    const pokeCaught = document.createElement('p');
    const currentStats = getStats();
    const thisPokemon = findById(pokemon, id);
    const thisPokemonStats = findById(currentStats, id);
    pokeName.textContent = `Name: ${capitalizeFirstLetter(thisPokemon.pokemon)}`;
    pokeSeen.textContent = `Encounters: ${thisPokemonStats.seen}`;
    pokeCaught.textContent = `Caught: ${thisPokemonStats.caught}`;
    statDiv.append(pokeName, pokeSeen, pokeCaught);
    statDiv.classList.add('stat-div');
    return statDiv;
}

export function capitalizeFirstLetter(nameInput) {
    const capitalizedName = nameInput.charAt(0).toUpperCase() + nameInput.slice(1);
    return capitalizedName;
}

export function compareTwoArrays(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++){
        for (let j = 0; j < arr2.length; j++){
            if (arr1[i] === arr2[j]) {
                console.log('found a match!');
                return true;
            }
        }
    }
    console.log('no match');
    return false;
}

function appearCaptured(photo) {
    const capturedArea = document.getElementById('captured-zone');
    capturedArea.appendChild(photo);
}