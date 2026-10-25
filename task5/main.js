'use strict';

function sortArray(array, order = 'asc') {
    const sortedArray = [];
    for (const num of array) {
        sortedArray.push(num);
    }
    if (order === 'asc') {
        return sortedArray.sort((a, b) => a - b);
    } else if (order === 'desc') {
        return sortedArray.sort((a, b) => b - a);
    } else {
        console.log('Invalid order specified. Please use "asc" or "desc".');
        return sortedArray;
    }
}

const array = [5, 2, 9, 1, 5, 6];
const array1 = [3, 8, 4, 1, 7, 2];
console.log(`Original Array: ${array}`);
console.log(`Original Array 1: ${array1}`);

const sortedArrayAsc = sortArray(array, 'asc');
console.log(`Sorted Array (Ascending): ${sortedArrayAsc}`);

const sortedArrayDesc = sortArray(array, 'desc');
console.log(`Sorted Array (Descending): ${sortedArrayDesc}`);

const sortedArrayError = sortArray(array, 'Descent');
console.log(`Sorted Array (Error Case): ${sortedArrayError}`);

const sortedArray1Asc = sortArray(array1, 'asc');
console.log(`Sorted Array 1 (Ascending): ${sortedArray1Asc}`);

const sortedArray1Desc = sortArray(array1, 'desc');
console.log(`Sorted Array 1 (Descending): ${sortedArray1Desc}`);

const sortedArray1Error = sortArray(array1, 'Descent');
console.log(`Sorted Array 1 (Error Case): ${sortedArray1Error}`);
