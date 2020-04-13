// Events are something that the user does
// Scroll, hover, click, press keyboard key, etc
// We can REACT to whatever the user does with events

// Basic Events

// Grab an element that you want to add an event listener to
// # for id . for class
const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
const todoNr = document.querySelector(".todo-nr b");
const items = todoList.children;
const mainTitle = document.querySelector(".main-title");

// ATTACH A EVENT LISTENER
// First para: event you want to listen for
// Second para: what you want to do after the event occurs
// This second para function is a one time use only, so almost always
// we can make it an arrow function

button.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.innerText = `Item ${items.length + 1}`;
  todoList.appendChild(newItem);
  todoNr.innerText = items.length;
  // We can add event listener right after we create it
  newItem.addEventListener("click", deleteItem);
});

function deleteItem(e) {
  console.log(e);
}

// Cool click event using CSS

// TODO: lookup all onEvent actions that can occur

// button.addEventListener("click", () => {
//   // logging the event that happened
//   console.log(event);
//   mainTitle.classList.toggle("spectacular");
// });
