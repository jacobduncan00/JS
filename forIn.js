const user = {
  name: "Jacob",
  age: 19,
  married: false,
  greet: function () {
    console.log("Hello " + name);
  },
};

// If we want to loop over an object, we can use
// for in

for (let x in user) {
  // Accessing the key
  console.log(x, user[x]);
}

// If we want to access values we can do this
console.log(user["married"]);
