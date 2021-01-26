import { findById } from './utils.js';

const POKESTATS = 'POKESTATS';

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
        const newSighting = {
            id: id,
            seen: 1,
            caught: 0
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
