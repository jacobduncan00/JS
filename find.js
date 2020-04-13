const videos = ["Prank", "Fun", "Travel"];
// Find goes through each item in the array and once it finds
// the first value you are looking for, it returns it to you

const searchTutorial = videos.find((video) => {
  // includes allows you to see what letters or characters
  // are included in the string to search for and returns the whole word
  // ONLY RETURNS THE FIRST ONE IT FINDS!
  return video.includes("Tra");
});

console.log(searchTutorial);
