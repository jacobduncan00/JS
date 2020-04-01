// rest parameter can create function that take a variable
// number of arguments. These arguments are store in an array
// that can be accessed later from inside the function
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

console.log(sum(1,2,3,4,5,6,7,8,9));
