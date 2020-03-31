// How to initialize objects in JavaScript

let student = {
  name: "Jacob", 
  age: 18,
  school: "Salisbury University",
  major: "Computer Science",
  minor: "Mathematics"
}

// Student object prints in JSON format
console.log(student);

// Or we can extract certain information
console.log(student.name);
console.log(student.age);

// Concatenate information from student object
console.log(student.name + " is " + student.age + " years old!");

// Can add values to object
student.isAdmin = true;

console.log(student);

// Can remove values from object

delete student.school;

console.log(student);

// Can also add multi-word values
let message = "Likes birds";
student[message] = true;

console.log(student);

let input = input("Which fruit would you like to buy? ");
let bag = {
  [input] : 5,
}

console.log("The " + input + " costs $" + bag[input] + "!");