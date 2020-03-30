let arr = [1, 2, 3, 4];

// When working with the 'in' operator regarding 
// arrays, it works based off of indeces

if(0 in arr){
  console.log("There is a value at arr[0]!");
}
if(5 in arr){
  console.log("There is a value at arr[5]!");
} else {
  console.log("There is NOT a value at arr[5]!");
}