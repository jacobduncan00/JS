// The "old" way of creating a function is this
foo();

function foo() {
  console.log('foo');
}

// However, with ES6, we can use arrow functions

let func = (() => {
  console.log('bar');
});

func();