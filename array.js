// If we use const here, we cannot change the value of name
let name = "Jacob";

const names = ["Jacob", "Bill", "Tom"];

// We can still make changes to a const array, as long as we do
// not add or remove an element, we can "swap" or modify items inside
names[1] = "Mac Miller";

// Cannot do this
// names.push("Mom");

console.log(names);

let bank = 250;

bank = 100;

console.log(bank);

// Another big difference between const and let

let newBank = bank;

console.log(bank, newBank);

newBank = 500;

console.log(bank, newBank);

// OBJECTS AND ARRAYS do not work the same way

const newNames = names;

newNames.push("Yolonda");

console.log(newNames);

// By adding to newNames, we are adding to name as well
// This is the thing about reference types
// If you copy over the array into newNames, even though I am
// making modifications to newNames, it will always keep a reference
// to the original names and change the original

console.log(`names ${names}`);

// Although you copy, the original will be modified

const tweet = {
  name: "Jacob",
  tweets: 20,
  age: 19,
};

const newTweet = tweet;

// This changes newTweet AND tweet
newTweet.tweets = 21;

console.log(tweet, newTweet);

// THIS IS WHY TYPESCRIPT IS GOD LIKE
