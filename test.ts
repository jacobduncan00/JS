function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 5));

function subtract(a: number, b: number): number {
  return a - b;
}

console.log(subtract(10, 7));

function multiply(a: number, b: number): number {
  return a * b;
}

console.log(multiply(2, 5));

function divide(a: number, b: number): number {
  return a / b;
}

console.log(divide(10, 5));

let arr = [];
arr.push(5);
console.log(arr);

function appendToArr(a: number[], b: number): any {
  a.push(b);
}

appendToArr(arr, 10);
console.log(arr);

function checkAndPop(a: number[]): number {
  if (a.length != 0) {
    return a.pop();
  } else {
    console.log("Array was empty, returning -1");
    return -1;
  }
}

console.log(checkAndPop(arr));

console.log(arr);

function transformWord(word: string): any {
  console.log();
}

transformWord("Jacob");
