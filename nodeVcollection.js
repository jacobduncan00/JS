// // This returns a live collection that updates itself
// const collectionItems = document.getElementsByClassName("item");

// const nodeItems = document.querySelectorAll("#todo-list");

// // We are looking at the nodes that this parent has
// console.log(nodeItems.childNodes);
// // The text that is returned is the empty space between the tags in the HTML

// // Returns HTML collection
// // console.log(collectionItems);
// // HTML Collections only hold element nodes

// // Returns NODE list
// // console.log(nodeItems);

// // How do we loop over nodes and HTML collections?

// for (let item in collectionItems) {
//   console.log(item);
// }

// for (let item in nodeItems) {
//   console.log(item);
// }

// // loops over all items in the node list ^^

// // CANNOT use for each to loop over collectionItems

// nodeItems.forEach((item) => {
//   console.log(item);
// });

// // Creating an Item tree from the HTML file

// const newCollectionItems = document.getElementsByClassName("item");

// console.log(newCollectionItems);

// // To create a new element
// // This is how you create HTML stuff in JS only

// const newItem = document.createElement("li");
// newItem.classList.add("item");
// newItem.innerText = "Item 3";

// // Now, take new item and append to newCollectionItems

// const todoList = document.getElementById("todo-list");
// todoList.append(newItem);

// // This appends a new item "item 3" to the html under todo-list id

// const anotherItem = document.createElement("li");
// anotherItem.classList.add("item");
// anotherItem.innerText = "Item 4";
// todoList.appendChild(anotherItem);

// // Update the amount of items that we have

// // Added [0] because I know we only have 1
// const todoNr = document.getElementsByClassName("todo-nr")[0];

// todoNr.innerText = collectionItems.length;

// USING QUERY SELECTOR

// This returns a live collection that updates itself
const collectionItems = document.querySelectorAll("item");

const nodeItems = document.querySelectorAll("#todo-list");

// We are looking at the nodes that this parent has
console.log(nodeItems.childNodes);
// The text that is returned is the empty space between the tags in the HTML

// Returns HTML collection
// console.log(collectionItems);
// HTML Collections only hold element nodes

// Returns NODE list
// console.log(nodeItems);

// How do we loop over nodes and HTML collections?

for (let item in collectionItems) {
  console.log(item);
}

for (let item in nodeItems) {
  console.log(item);
}

// loops over all items in the node list ^^

// CANNOT use for each to loop over collectionItems

nodeItems.forEach((item) => {
  console.log(item);
});

// Creating an Item tree from the HTML file

const newCollectionItems = document.getElementsByClassName("item");

console.log(newCollectionItems);

// To create a new element
// This is how you create HTML stuff in JS only

const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "Item 3";

// Now, take new item and append to newCollectionItems

const todoList = document.querySelector("todo-list");
todoList.append(newItem);

// This appends a new item "item 3" to the html under todo-list id

const anotherItem = document.createElement("li");
anotherItem.classList.add("item");
anotherItem.innerText = "Item 4";
todoList.appendChild(anotherItem);

// Update the amount of items that we have

// Added [0] because I know we only have 1
const todoNr = document.querySelector("todo-nr");

todoNr.innerText = collectionItems.length;
