// Map allows us to create a copy of one array
// and allows us to modified the copied array
// loops over all items of the original array and assigns
// to new, independent array

// For each only allows us to do functionality on the original array
// here, with map we can actually return a value and save to new array
// BIG difference

const videos = ["Prank", "Fun", "Travel"];

// If you use map, you dont have to worry about affecting original
// Very powerful
const newVideos = videos.map((video) => {
  return video.toUpperCase();
});

newVideos.push("Hey");

console.log(videos);

console.log(newVideos);
