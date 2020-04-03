const weirdFunction = (num) => {
  console.log("The number passed into the weirdFunction is " + num);
  console.log("Returning " + num + " * 2 = " + num * 2);
  return num * 2;
}

let weirdObj = {
  title: 'Weird',
  func: weirdFunction(15)
}

console.log(weirdObj.func);

// Cannot do this 
// console.log(weirdObj.func());
// because func is not an actual function
// it is a property of an object that 
// holds a function as it's value