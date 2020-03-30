var word = 'Salisbury';
console.log(word.slice(0,5));

// Leaving the second parameter empty results in 
// the slicing to continue until the end of the word
console.log(word.slice(5));


// String concatenation
var str = '';
str += 'Hi, ';
str += 'my name ';
str += 'is Jacob!';

console.log(str);

let val1 = 18;
let val2 = 90;

if(val1 === val2){
  console.log(val1 + " is equal to " + val2);
} else if(val1 < val2){
  console.log(val1 + " is less than " + val2);
} else {
  console.log(val1 + " is greater than " + val2);
}