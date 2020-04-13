const listUsers = ["Jacob", "John", "Bob", "Billy"];

// Another way to do .forEach
// This is similar to python
// name in names
for (let name of listUsers) {
  console.log(name);
}

console.log();
// OR, we can do this

listUsers.forEach((item) => {
  console.log(item);
});

// OR, we can do this to take additional parameters
// the example above can take multiple parameters
// aswell

listUsers.forEach(function (name, index) {
  console.log(name, index);
});
