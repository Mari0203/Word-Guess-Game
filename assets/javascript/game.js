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

// ====== Global Variables ===== //
// Set # of player's tries to a variable.  Max try is 10.
var tryNums = 0;

// Store the computer selected word in a variable:
var word = "";

// Store the # of letters in the selected word:
var letterCount = 0;

// Keep track of remaining unanswered letters in an array by setting it to a variable.
//// var unansweredLetters = # of underscores remaining in a word
var unansweredLetters = [];

/****************** STARTS THE GAME *********************/
function startGame() {
  
  // Pick a random word from the placeList array.
  var word = placeList[Math.floor(Math.random() * placeList.length)];
  console.log("Randomly selected place: " + word);

  /* Create an empty array to store answer letters,
     and fill it with underscore ( _ ) to reflect the # of letters in the answered word. */
  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = " _ ";
  }
  console.log("The chosen word underscored: " + answerArray);

  // Display answerArray with underscores in the 'wordDisplay' field on a page:
  document.getElementById("wordDisplay").innerHTML=answerArray;

};

// Run the function that starts when any key is clicked.
document.onkeyup = function(event) {

    // check if the pressed key is in the Word with a for loop
    // If yes, then keep that letter into answerArray and update the HTML
    // If no, then check if the pressed letter is already in the unansweredLetters. If there, then
    // decrement the # of trys.



};
