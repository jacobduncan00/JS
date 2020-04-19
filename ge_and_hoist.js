// Objects and CORE JavaScript concepts
// quite complex

// JavaScript creates Global Execution Contenxt before your code even runs
// the "creation" phase, gives you global object and keyword "this"

// If you try to run the function up here, no errors
// this is due to hoisting in JS
// in the global execution context and the creation phase
// memory is allocated to your functions
// JS already knows about your function before it even starts executing it

sayHi();

// For this we get undefined, we do not get an error that inbox does not exist yet
console.log(inbox);
// This variable also gets hoisted and saved in memory, but the value doesnt
// let and const will not let you do this, it will say you cant access before initialization
var inbox = 10;

function sayHi() {
  console.log("Hello");
}

// This will not work because we are assigning to a const or let variable
sayNo();

const sayNo = function () {
  console.log("No");
};

// Hoisting - Function declarations get saved in memory before your code starts executing
