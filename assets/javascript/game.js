// Create an array of places/cities.
var placeList = [
    "Paris",
    "London",
    "Istanbul",
    "Casablanca",
    "Tokyo",
    "Hawaii",
    "India",
    "Moscow",
    "Hollywood",
    "Egypt",
    "Sydney",
    "Ireland",
    "Thai",
    "Shanghai",
    "Korea"
];

// Set # of tries to a variable
var tryNums = 0;

// Pick a random word from the placeList array.
var word = placeList[Math.floor(Math.random() * placeList.length)];
console.log("Randomly selected place: " + word);

// Create an empty array to store answer letters,
// and fill it with underscore ( _ ) to reflect the # of letters in the answered word.
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = " _ ";
};
console.log("The chosen word underscored: " + answerArray);

// Keep track of remaining unanswered letters by setting it to a variable.
// var unansweredLetters = # of underscores remaining in a word

