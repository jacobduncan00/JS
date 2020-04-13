// Great ways to run a test and to check if all of ratings are above 9

const games = [
  { title: "Pokemon", rating: 9.5 },
  { title: "CS:GO", rating: 10 },
  { title: "Animal Crossing", rating: 5 },
  { title: "Valorant", rating: 9 },
];

// Doesn't actually return the array elements, it just either says yes or no
// Basically a boolean function

const checkRatings = games.every((game) => {
  return game.rating >= 9;
});

// True or false, either every game is greater than or equal to 9 and will return true
// or it will return false
console.log(checkRatings);

const checkSomeRatings = games.some((game) => {
  return game.rating >= 9;
});

// Returns a true or false, as long as we have one value that meets the condition in
// the array, then it returns true
console.log(checkSomeRatings);
