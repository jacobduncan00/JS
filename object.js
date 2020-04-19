const lists = document.querySelectorAll("li");

lists.forEach((li) => {
  li.addEventListener("click", function () {
    console.log(this);
  });
});

const user = {
  name: "Jacob",
  videos: ["html", "css", "js", "react"],
  sayHi: () => {
    // still refers to the window object
    console.log(this);
  },
  // USE THIS SYNTAX!!!
  greet() {
    console.log(`Hello there ${this.name}`);
    // Add function inside this method

    // Need to create something that the function can get
    // as it cannot access the this keyword from inside the function
    const videoArr = this.videos;

    // OR, there is a better way to do this
    // is to use arrow functions

    const getVideos = () => {
      console.log(`You currently have ${this.videos.length} videos`);
    };
    // Run the function as well
    // when you invoke this, a new keyword this gets set
    // the good thing about an arrow function is we dont have to worry about that

    getVideos();

    this.videos.forEach((video) => {
      // we are running a function so, this will return window
      // simple fix is to run arrow function
      console.log(this);
    });
  },
};

user.greet();
