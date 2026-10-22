'use strict';

function sortArray(array, order = 'asc') {
    if (order === 'asc') {
        return array.sort((a, b) => a - b);
    } else if (order === 'desc') {
        return array.sort((a, b) => b - a);
    } else {
        console.log('Invalid order specified. Please use "asc" or "desc".');
        return array;
    }
}

const array = [5, 2, 9, 1, 5, 6];
console.log(`Original Array: ${array}`);
const sortedArray = sortArray(array);
console.log(`Sorted Array: ${sortedArray}`);