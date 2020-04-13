// *** GLOBAL SCOPE ***
let food = "apple";
let fruits = 5;

function store() {
  // *** FUNCTION SCOPE ***
  let food = "banana";
  let fruits = 50;
  console.log(food, fruits);
}

// not in a function or glocal scope, but in a loop
for (let fruits = 0; fruits < 10; fruits++) {
  // *** BLOCK SCOPE ***
  console.log(fruits);
}

// Because we call the function, the function scope
// console.log gets called
store();

// This is executing the global scope
console.log(food, fruits);
