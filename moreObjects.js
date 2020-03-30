let person = {
  name: "Jacob",
  describe: function() {
    return 'Person named' + this.name;
  }
}

// We can use the 'in' operator to determine whether
// a object has a certain property

if('name' in person === true){
  console.log("Name is true");
}
if('describe' in person === true){
  console.log("Describe is true");
}
if('age' in person === true){
  console.log("Age is true");
} else {
  console.log("Age is not true");
}

// Can also be performed like this

if('name' in person !== undefined){
  console.log("Name is true");
}
