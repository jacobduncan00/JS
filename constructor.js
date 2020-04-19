// OOP
// Object Oriented Programming, focuses heavily on objects with methods & inheritance

// Constructor function is a function that will generate us an object
// and give it some defaults
// Constructor functions are usually named with an uppercase letter

function Todo(name, completed) {
  // set property name with parameter name
  this.name = name;
  // set property completed with parameter completed
  this.completed = completed;
  this.getTodoName = function () {
    console.log(this.name);
  };
}

// ^^ What is happening here?

// Creates completely new object
// new keyword is going to create an empty object
// with the parameters, we are setting the properties

const todo = new Todo("get groceries", true);
const todo2 = new Todo("Do my homework", false);
todo.getTodoName();
console.log(todo);
todo2.getTodoName();
console.log(todo2);
