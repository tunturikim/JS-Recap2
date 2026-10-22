'use strict';

const numbers = [];

for (let i = 0; i < 5; i++) {
    const number = parseInt(prompt(`Enter number ${i + 1}:`), 10);
    numbers.push(number);
}
console.log(numbers);

const numberToCheck = parseInt(prompt('Enter a number to check if it exists in the array:'), 10);
if (numbers.includes(numberToCheck)) {
    console.log(`${numberToCheck} exists in the array.`);
}else {
    console.log(`${numberToCheck} does not exist in the array.`);
}

// Remove the last element from the array
numbers.pop();
console.log('Updated Numbers:', numbers);

numbers.sort((a, b) => a - b);
console.log('Sorted Numbers:', numbers);