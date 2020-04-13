const videos = ["Prank", "Fun", "Travel"];

// Higher-Order function is just a function that takes in another function
// as a parameter

// There are a lot of methods that use higher order functionality

videos.forEach((video) => {
  console.log(video);
});

function repeater(fn) {
  fn();
  fn();
  fn();
}

// function sayHello() {
//   console.log("Hello There");
// }

// repeater(sayHello);

// Make it look nicer

// The call back function is the function that gets executed on
// each run of the outer function
repeater(() => {
  console.log("Hello There!");
});

// Function here is a call back because it gets executed only when
// the button is clicked
button.addEventListener("click", function () {});
