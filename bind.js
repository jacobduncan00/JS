let person = {
  name: "Jacob",
  describe: function() {
    return 'Person named ' + this.name;
  }
}

// in order to extract a function from an object
// we must use the bind function

let func = person.describe.bind(person);
console.log(func());

// This will allow us to call the person.describe()
// function without having to call the person object
// every time