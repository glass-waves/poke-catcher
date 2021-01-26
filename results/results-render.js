import { getStats } from '../localStorageUtils.js';
import { findById, capitalizeFirstLetter } from '../utils.js';
import { pokemon } from '../data.js';

export function renderTableRows(pokemonInArray) {
    const row = document.createElement('tr');
    const imageTd = document.createElement('td');
    const image = document.createElement('img');
    const nameTd = document.createElement('td');
    const seenTd = document.createElement('td');
    const caughtTd = document.createElement('td');

    // const currentStats = getStats();
    const rowItem = findById(pokemon, pokemonInArray.id);

    image.src = rowItem.url_image;
    imageTd.appendChild(image);
    nameTd.textContent = capitalizeFirstLetter(rowItem.pokemon);
    seenTd.textContent = pokemonInArray.seen;
    caughtTd.textContent = pokemonInArray.caught;

    row.append(imageTd, nameTd, seenTd, caughtTd);
    return row;

}