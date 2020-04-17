function add(a, b) {
    return a + b;
}
console.log(add(5, 5));
function subtract(a, b) {
    return a - b;
}
console.log(subtract(10, 7));
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 5));
function divide(a, b) {
    return a / b;
}
console.log(divide(10, 5));
var arr = [];
arr.push(5);
console.log(arr);
function appendToArr(a, b) {
    a.push(b);
}
appendToArr(arr, 10);
console.log(arr);
function checkAndPop(a) {
    if (a.length != 0) {
        return a.pop();
    }
    else {
        console.log("Array was empty, returning -1");
        return -1;
    }
}
console.log(checkAndPop(arr));
console.log(arr);
