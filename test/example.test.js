// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { getStats, setStats } from '../localStorageUtils.js';
import { compareTwoNumbers } from '../utils.js';

const test = QUnit.test;

test('getStats should return the current value for the array in local storage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const POKESTATS = 'POKESTATS';
    const stats = [
        {
            id:1,
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

    const actual = compareTwoNumbers(arr1, arr2);

    const expected = true;

    expect.equal(actual, expected);

})