// Building a guessing game
// We are going to have to guess the computers number
// Number 1-10
// If we guess, we win. If we don't, we lose

// 1. Generate a random number
// 2. Give user ability to guess
// 3. Determine the users guess
// 4. If right, win. If wrong, guess again

function genRandNum() {
  let rand = Math.random() * 10 + 1;
  rand = Math.trunc(rand);
  return rand;
}

function guess(answer) {
  let guess = prompt("Guess the number");
  return guess;
}

function win(guess, answer) {
  if (guess === answer) {
    console.log("You won!");
    return true;
  }
  return false;
}

let answer = genRandNum();
let userGuess;

// console.log("Answer is " + answer);

do {
  let userGuess = guess(answer);
  if (userGuess > answer) {
    console.log("Number too high");
  } else if (userGuess < answer) {
    console.log("Number too low");
  } else if (userGuess == answer) {
    console.log("You guessed it");
    break;
  }
} while (userGuess != answer);
