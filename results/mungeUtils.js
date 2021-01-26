import { capitalizeFirstLetter } from '../utils.js';

export function toNameArray(someArr) {
    const nameArr = [];
    for (let item of someArr) {
        const pokeName = item.pokemonName;
        nameArr.push(pokeName); 
    }
    return nameArr;
}

export function toSeenArray(someArr) {
    const seenArr = [];
    for (let item of someArr) {
        seenArr.push(item.seen);
        return seenArr;
    }
}

export function toCaughtArray(someArr) {
    const caughtArr = [];
    for (let item of someArr) {
        caughtArr.push(item.caught);
        return caughtArr;
    }
}


