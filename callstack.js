function sayHi() {
  console.log(`hello there ${name}`);
  changeName();
  console.log(`sayHi is finished`);
}

function changeName() {
  name = "Bobby";
  console.log(`we changed it to ${name}`);
  console.log(`changeName is finished`);
}

let name = "Jacob";
sayHi();
console.log(`We are done with the code`);

// How is this whole file going to run?

// - run up to down, line by line
// 1. create variable name and assign in Jacob
// 2. As soon as you invoke a function sayHi(), a new execution context is created
// 3. Function is ran
// 4. Console.log
// 5. changeName new execution context is created
// 6. Function is ran
// 7. Finish sayHi
// 8. Final console.log
