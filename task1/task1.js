'use strict';

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

console.log(fruits);
console.log(`Length of fruits: ${fruits.length}`);
console.log(`Element at Index 2: ${fruits[2]}`);
console.log(`Last Element of Fruits: ${fruits[fruits.length - 1]}`);

const vegetables = [];

// Create an array of vegetables
for (let i = 0; i < 3; i++) {
    const vegetable = prompt(`Enter vegetable ${i + 1}:`);
    vegetables.push(vegetable);
}
console.log(vegetables);
console.log(`Length of vegetables: ${vegetables.length}`);