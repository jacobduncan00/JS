var arr = [ 'a', 'b', 'c' ];

console.log(arr.slice(1, 2));  // copy elements

console.log(arr.slice(1)); // from index 1 to end

console.log(arr.push('x'));  // append an element

console.log(arr.pop());  // remove last element

console.log(arr.shift());  // remove first element

console.log(arr.unshift('x'));  // prepend an element

console.log(arr.indexOf('b'));  // find the index of an element
console.log(arr.indexOf('y')); // find the index of y

console.log(arr.join('-'));  // all elements in a single string
console.log(arr.join('')); // no space between elements
console.log(arr.join()); // default, comma between elements