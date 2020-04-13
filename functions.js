function greet(name) {
  console.log(`Welcome to the website ${name}!`);
}

// Rest of the code

function signUp() {
  let name = prompt("What is your name");
  greet(name);
}

signUp();
