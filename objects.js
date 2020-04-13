const user = {
  name: "Jacob",
  age: 19,
  married: false,
  greet: function () {
    console.log("Hello " + name);
  },
};

// This is how objects work
// property : value

// What is a method?
// A method is a function that is inside an object
// for example, the greet property in the user object

// How do we access information inside an object?
// dot notation => object.property
console.log(user.name);

// We can even do
user.greet();

// Before our code gets run, there is a "Window" object that is created and it has a bunch of properties and functions that we can use to create cool things

console.log(typeof consol);
console.log(typeof window);

// We can see that these ^ are just objects
// with a bunch of properties and functions built
// in for developers to use

console.warn("This is a warning!");
