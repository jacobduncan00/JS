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

const newVideo = videos.map((video) => {
  return video.length < 7 ? video : "Big String";
});

console.log(newVideo);
