import { getStats, setStats } from '../localStorageUtils.js';
import { toNameArray, toSeenArray, toCaughtArray, generateRandomColor, addAlphaToColor, sortByType, extractTypeList, extractTypeNumber, returnTotalArray } from './mungeUtils.js';

const resetButton = document.getElementById('reset-button');

const currentStats = getStats();

const randColors = generateRandomColor(currentStats);
const barColors = addAlphaToColor(randColors, 0.6);
const borderColors = addAlphaToColor(randColors, 1);


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
            borderWidth: 2
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
var ctx2 = document.getElementById('caughtChart').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: toNameArray(currentStats),
        datasets: [{
            label: '# of Times Caught',
            data: toCaughtArray(currentStats),
            backgroundColor: barColors,
            borderColor: borderColors,
            borderWidth: 2
        }]
    },
    options: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
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
var ctx3 = document.getElementById('typeChart').getContext('2d');
var myChart3 = new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: extractTypeList(sortByType(currentStats)),
        datasets: [{
            label: 'Caught per Type',
            data: extractTypeNumber(sortByType(currentStats)),
            backgroundColor: barColors,
            borderColor: borderColors,
            borderWidth: 2
        }]
    
    }
});
var ctx4 = document.getElementById('total-caught-chart').getContext('2d');
var myChart4 = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: toNameArray(returnTotalArray()),
        datasets: [{
            label: 'Total # of Times Caught',
            data: toCaughtArray(returnTotalArray()),
            backgroundColor: barColors,
            borderColor: borderColors,
            borderWidth: 2
        }]
    },
    options: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
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


resetButton.addEventListener('click', () => {
    const emptyArray = [];
    setStats(emptyArray);
    window.location = '../';
});

