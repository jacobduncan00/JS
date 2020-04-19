function Todo(name, completed) {
  this.name = name;
  this.completed = completed;
  this.getTodoName = function () {
    console.log(this.name);
  };
  this.deleteTodo = function () {
    console.log("deletes");
  };
}

// Prototype that is attached to each Todo object

Todo.prototype.checkCompleted = () => {
  console.log("check");
};

const todo = new Todo("Buy Eggs", false);
const todo2 = new Todo("Do my homework", false);

console.log(todo);
