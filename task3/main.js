'use strict';

const numbers = [];

while(true) {
  const input = prompt(`Enter a number (or "done" to finish):`);
    if (input === "" || input === null || input.trim().toLowerCase() === 'done') {
        break;
    }   
    console.log(`You entered: ${input}`);
    numbers.push(Number(input));
}

const evenNumbers = [];

for (const num of numbers) {
    if (num % 2 === 0) {
        evenNumbers.push(num);
    }
}

console.log(`Even numbers: ${evenNumbers}`);