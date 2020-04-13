const listUsers = ["Jacob", "John", "Bob", "Billy"];

// instead of creating a bunch of strings
// you can list them and organize into one variable
// called an array

// How do we access inside the array?
// console.log(listUsers[0]);

// This is how we print the entire contents of the array

// forEach method is essentially a for loop that
// goes through each element in the array
function printArr() {
  listUsers.forEach((user) => {
    console.log(user);
  });
}
printArr();

// We can pop a user
listUsers.pop();
// off the back of the array

// We can push a user
listUsers.push("new");
// on the back of the array

// We can shift the array
listUsers.shift();
// which removes the first element of the array

// adds to the beggining of the array
listUsers.unshift();

// Getting the number of elements in the array
const lengthOfArray = listUsers.length;
console.log(lengthOfArray);

printArr();

const indexOfBob = listUsers.indexOf("Bob");
console.log(indexOfBob);
