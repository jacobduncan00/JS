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

// Want to return all keywords that are very short
const shortSearch = videos.filter((video) => {
  // Filters all the array indeces that have a string length less than or equal to 7
  return video.length <= 7;
});

console.log(shortSearch);

const games = [
  { title: "Pokemon", rating: 9.5 },
  { title: "CS:GO", rating: 10 },
  { title: "Animal Crossing", rating: 5 },
  { title: "Valorant", rating: 9 },
];

console.log(games);

// Filters out games that have a rating of at least 9.5
const highRatedGames = games.filter((game) => {
  return game.rating >= 9.5;
});

console.log(highRatedGames);
