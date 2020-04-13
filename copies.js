// Spread operator, can be used for multiple things. Not just arrays
// Expands all of the elements inside array to another array

const ratings = [5, 7, 3, 7, 4, 10, 9];

// To make a copy...

const descRating = [...ratings];

console.log(descRating);

descRating.sort((a, b) => a - b);

console.log(descRating);
// Have not modified the original array, however have spread to another array and sorted
console.log(ratings);

// You can concatenate multiple arrays and strings together

const name = 'jacob';

const letters = [...name];

console.log(name);
console.log(letters);

const names = ['Jacob', 'Bill'];
const moreNames = ['Tim', 'John', 'Ed'];

// const allNames = names.concat(moreNames);
// This does the same thing as the line above
// Can replace parameters with own value arrays where you can change in line definition
const allNames = [...names, ...moreNames];

console.log(allNames);