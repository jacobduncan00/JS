// Functions are just specfial objects
// Bind, call, apply methods that apply to objects

const person = {
  firstName: "Jacob",
  lastName: "Duncan",
  getName() {
    console.log(this.firstName + " " + this.lastName);
  },
};

// When we invoke a method thats on an object, it will get referenced to that specific object
person.getName();

function registerUser(country, language) {
  // Additional functionality...
  this.getName();
  console.log(`My Country is ${country} and my language is ${language}`);
}

// Can pass in an object that the keyword this is binded to register now
const register = registerUser.bind(person);
// Binding person object to this function

// This is how we do parameters for bind
register("Australia", "English");

// Bind allows you to call a method on a function!

// Differences between bind and call is that when you do call, you are not saving into a variable
// Bind was saved to const register

// Call, you invoke it and pass in the object

// First argument is object, and others are parameters
// This cannot be assigned to a variable!
// This is how we do parameters for call
registerUser.call(person, "Australia", "English");

// Apply, you have to pass in an array of arguments
// There are very minimal differences between all of these
registerUser.apply(person, ["Australia", "English"]);
