'use strict';

const numbers = [];
const arrayOperationsDiv = document.getElementById('array-operations');

while(true) {
  const input = prompt(`Enter a number (or "done" to finish):`);
    if (input === "" || input === null || input.trim().toLowerCase() === 'done') {
        break;
    }
    console.log(`You entered: ${input}`);
    numbers.push(Number(input));
}

alert(`You entered ${numbers.length} numbers: ${numbers.join(', ')}`);
const evenNumbers = [];

for (const num of numbers) {
    if (num % 2 === 0) {
        const evenNumberElement = document.createElement('p');
        evenNumberElement.textContent = `Even number entered: ${num}`;
        arrayOperationsDiv.appendChild(evenNumberElement);
        evenNumbers.push(num);
    }
}

if (evenNumbers.length > 0) {
    const evenNumbersElement = document.createElement('p');
    evenNumbersElement.textContent = `Even numbers: ${evenNumbers.join(', ')}, End of program.`;
    arrayOperationsDiv.appendChild(evenNumbersElement);
    console.log(`Even numbers: ${evenNumbers.join(', ')}`);
}else {
    const noEvenNumbersElement = document.createElement('p');
    noEvenNumbersElement.textContent = `No even numbers were entered, End of program.`;
    arrayOperationsDiv.appendChild(noEvenNumbersElement);
    console.log(`Even numbers: None`);
}
