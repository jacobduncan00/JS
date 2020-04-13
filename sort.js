// Quick ways to sort in JavaScript! ✏️

const items = ["Banana", "Orange", "Apple", "Mango"];
const ratings = [92, 56, 4, 2, 22, 45.6, 10, 80];

// Basic sort of strings
items.sort();

console.log(items);

// However, if you have numbers, it's different
// JavaScript turns numbers into strings and tries
// to sort them alphabetically again
// This is how you sort numbers with .sort()

ratings.sort((a, b) => a - b);
console.log(ratings);
