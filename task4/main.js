'use strict';

function sortArray(array) {
    return array.sort((a, b) => a - b);
}

const array = [5, 2, 9, 1, 5, 6];
console.log(`Original Array: ${array}`);
const sortedArray = sortArray(array);
console.log(`Sorted Array: ${sortedArray}`);