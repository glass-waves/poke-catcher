import { getStats, setStats } from '../localStorageUtils.js';
import { renderTableRows } from './results-render.js';


const table = document.getElementById('results-table');
const resetButton = document.getElementById('reset-button');
const currentStats = getStats();

for (let stat of currentStats) {
    table.append(renderTableRows(stat));
}

resetButton.addEventListener('click', () => {
    const emptyArray = [];
    setStats(emptyArray);
    window.location = '../';
});

