// Ternary operators are another way of writing an if, else statement

// let result = cond1 ? value1 : value2;

age = 19;

function test(age) {
  let result = (age >= 18) ? "Good to go, you are " + age + "!" : "Cannot go in, you are only " + age + "!";
  return result;
}

console.log(test(age));

age = 17;

console.log(test(age));

// OR, using the arrow function we learned

let newResult = ((age) => {
  // Probably better way to string concatenate
  return (age >= 18) ? "Good to go, you are " + age + "!" : "Cannot go in, you are only " + age + "!";
})

console.log(newResult(19));
console.log(newResult(15));
console.log(newResult(18));