// Local storage allows you to save things even after you refresh the browser

// The only thing we can pass into localStorage is strings!!!
// localStorage.setItem("todo", "Feed the cat");
// localStorage.setItem("user", "Ed");
// localStorage.setItem("todo", "Feed myself too");

// Session Storage

// sessionStorage.setItem("todoList", "session feeding cat");

// The difference is that if I close the browser and re-open, local storage stays and session storage is gone

// How do you clear local storage?
// Session storage is auto cleared so we don't have to worry about that

// localStorage.clear();

// We want to have arrays and objects in our local and session storage
// So we must trick the browser into thinking its a string when its actually an
// array or an object

// const user = localStorage.getItem("user");

// console.log(user);

// console.log(typeof user);

// How do we pass in an array or an object???

const todoList = {
  todo1: "feeding the cat",
  todo2: "feeding myself",
};

// We can call a method to do this
// This allows us to keep an array structure!!!
localStorage.setItem("todos", JSON.stringify(todoList));

let get = JSON.parse(localStorage.getItem("todos"));

// JSON.parse(get);
// Now we need to turn get back into an array from json stringify
// To do this we use JSON.parse
// We want to get back the array here...
// But we are only getting a string

console.log(get);
