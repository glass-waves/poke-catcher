// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { getStats, setStats } from '../localStorageUtils.js';
import { sortByType } from '../results/mungeUtils.js';
import { compareTwoArrays } from '../utils.js';

const test = QUnit.test;

test('getStats should return the current value for the array in local storage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const POKESTATS = 'POKESTATS';
    const stats = [
        {
            id: 1,
            seen: 2,
            caught: 1
        }
    ];
    const stringyArray = JSON.stringify(stats);
    localStorage.setItem(POKESTATS, stringyArray);
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getStats();
    const expected = stats;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
test('getStats should return an empty array when there is not an array present', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const POKESTATS = 'POKESTATS';
    setStats([]);
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getStats();
    const expected = [];

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('when passed two arrays with an element in common, function should return true', (expect) => {

    const arr1 = [2, 4, 5, 6, 8, 3, 5];
    const arr2 = [1, 3, 9, 10, 14, 21, 23];

    const actual = compareTwoArrays(arr1, arr2);

    const expected = true;

    expect.equal(actual, expected);

});

test('function should take an array of stats and return another array of objects with type and number caught', (expect) => {
    const arr = [
        {
            'id': 11,
            'seen': 4,
            'caught': 1,
            'pokemonName': 'wartortle',
            'type': 'water'
        },
        {
            'id': 5,
            'seen': 3,
            'caught': 1,
            'pokemonName': 'charmander',
            'type': 'fire'
        },
        {
            'id': 14,
            'seen': 3,
            'caught': 0,
            'pokemonName': 'caterpie',
            'type': 'bug'
        },
        {
            'id': 7,
            'seen': 3,
            'caught': 1,
            'pokemonName': 'charizard',
            'type': 'fire'
        },
        {
            'id': 17,
            'seen': 2,
            'caught': 2,
            'pokemonName': 'weedle',
            'type': 'bug'
        },
        {
            'id': 15,
            'seen': 4,
            'caught': 0,
            'pokemonName': 'metapod',
            'type': 'bug'
        },
        {
            'id': 18,
            'seen': 4,
            'caught': 1,
            'pokemonName': 'kakuna',
            'type': 'bug'
        },
        {
            'id': 12,
            'seen': 3,
            'caught': 1,
            'pokemonName': 'blastoise',
            'type': 'water'
        },
        {
            'id': 10,
            'seen': 3,
            'caught': 1,
            'pokemonName': 'squirtle',
            'type': 'water'
        },
        {
            'id': 2,
            'seen': 2,
            'caught': 0,
            'pokemonName': 'ivysaur',
            'type': 'grass'
        },
        {
            'id': 6,
            'seen': 4,
            'caught': 2,
            'pokemonName': 'charmeleon',
            'type': 'fire'
        },
        {
            'id': 21,
            'seen': 3,
            'caught': 1,
            'pokemonName': 'pidgey',
            'type': 'normal'
        },
        {
            'id': 19,
            'seen': 3,
            'caught': 1,
            'pokemonName': 'beedrill',
            'type': 'bug'
        },
        {
            'id': 1,
            'seen': 1,
            'caught': 0,
            'pokemonName': 'bulbasaur',
            'type': 'grass'
        }
    ];
    const actual = sortByType(arr);
    const expected = [
        {
            type: 'water',
            caught: 3
        },
        {
            type: 'fire',
            caught: 4
        },
        {
            type: 'bug',
            caught: 4
        },
        {
            type: 'normal',
            caught: 1
        }
    ];

    expect.deepEqual(actual, expected);
});