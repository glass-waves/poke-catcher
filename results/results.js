import { getStats, setStats } from '../localStorageUtils.js';
import { toNameArray, toSeenArray, toCaughtArray, generateRandomColor, addAlphaToColor } from './mungeUtils.js';
import { renderTableRows } from './results-render.js';


const table = document.getElementById('results-table');
const resetButton = document.getElementById('reset-button');

const currentStats = getStats();
const randColors = generateRandomColor(currentStats);
console.log(randColors);
const barColors = addAlphaToColor(randColors, 0.6);
const borderColors = addAlphaToColor(randColors, 1);
console.log(currentStats);

var ctx = document.getElementById('seenChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: toNameArray(currentStats),
        datasets: [{
            label: '# of Times Seen',
            data: toSeenArray(currentStats),
            backgroundColor: barColors,
            borderColor: borderColors,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    stepSize: 1,
                    beginAtZero: true
                }
            }]
        }
    }
});








// for (let stat of currentStats) {
//     table.append(renderTableRows(stat));
// }

resetButton.addEventListener('click', () => {
    const emptyArray = [];
    setStats(emptyArray);
    window.location = '../';
});

