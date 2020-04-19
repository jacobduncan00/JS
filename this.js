// "this" keyword in terms of global execution context or when we invoke another function

// By default it refers to the window object
// A pointer to that refers to an object
// Can refer to different object but it depends
// It can change which object it points to

console.log(this);

function sayThis() {
  // Still going to refer to the window object
  console.log(this);
}

// When the keyword this becomes more useful is in objects

const user = {
  name: "Jacob",
};
const admin = {
  name: "admin",
};

// Check where you are invoking your function to keep track of "this"
// user.sayHi();

function sayHi() {
  console.log(this);
}

user.hi = sayHi();
admin.hi = sayHi();
