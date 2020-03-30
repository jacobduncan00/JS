// JavaScript "Closures", I have no 
// idea how these work

function createIncrementor(x){
  return function (){
    x++;
    return x;
  }
}

let inc = createIncrementor(5);
console.log(inc());
console.log(inc());
console.log(inc());