function pair(x,y){
  x = x || 0;
  y = y || 0;
  // returning an array of the elements x and y
  return [x,y]; 
}

console.log(pair()); // [0,0]
console.log(pair(3)); // [3,0]
console.log(pair(3,5)); // [3,5]

let piped = pair(3,5);

console.log(piped);

// manipulating values in an array

for(let i = 0; i < 10; i++){
  piped[0] += 2;
  piped[1] += 2;
}

console.log(piped);