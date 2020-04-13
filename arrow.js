function sayHello() {
  console.log("Hello");
}

// Arrow functions use "anonymous" functions which are basically
// un-named functions
// When using an arrow function, you cannot re-use it
const sayHi = () => {
  console.log("Hi");
};

const videos = [
  "Prank",
  "Fun",
  "Travel",
  "HTML Tutorial",
  "CSS style sheets",
  "How to JavaScript",
  "Programming",
  "Mac OS",
];

// const arrowVideos = videos.map((video) => {
//   return video.length >= 7 ? "Big String" : "Little String";
// });

// If you do a one line return, you can do this
// These are the exact same
const arrowVideos = videos.map((video) =>
  video.length >= 7 ? "Big String" : "Little String"
);

console.log(arrowVideos);
