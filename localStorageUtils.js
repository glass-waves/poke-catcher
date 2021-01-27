import { findById } from './utils.js';
import { pokemon } from './data.js';

const POKESTATS = 'POKESTATS';
const LONGSTATS = 'LONGSTATS';

export function getStats() {
    const currentStats = JSON.parse(localStorage.getItem(POKESTATS));

    if (!currentStats) {
        localStorage.setItem(POKESTATS, JSON.stringify([]));
        return [];
    } else {
        return currentStats;
    }
}

export function setStats(array) {
    const stringyArray = JSON.stringify(array);
    localStorage.setItem(POKESTATS, stringyArray);
}

export function incrementSeen(id) {
    const currentStats = getStats();
    const objectToIncrement = findById(currentStats, id);
    if (!objectToIncrement) {
        const itemInData = findById(pokemon, id);
        const newSighting = {
            id: id,
            seen: 1,
            caught: 0,
            pokemonName: itemInData.pokemon,
            type: itemInData.type_1
        };
        currentStats.push(newSighting);
    } else {
        objectToIncrement.seen++;
    }
    setStats(currentStats);
}

export function incrementCaught(id) {
    const currentStats = getStats();
    const objectToIncrement = findById(currentStats, id);
    objectToIncrement.caught++;
    setStats(currentStats);
}
export function getLongStats() {
    const currentStats = JSON.parse(localStorage.getItem(LONGSTATS));
    console.log(currentStats);
    if (!currentStats) {
        localStorage.setItem(LONGSTATS, JSON.stringify([]));
        return [];
    } else {
        return currentStats;  
    }
}
export function storeSession() {
    const singleStats = getStats();
    const currentStats = getLongStats();
    currentStats.push(singleStats);
    localStorage.setItem(LONGSTATS, JSON.stringify(currentStats));
}