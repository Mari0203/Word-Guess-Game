// GLOBAL VARIABLES
// ====================================================================
// Create an array of places/cities.
var capitals = [
  "beijing",
  "tokyo",
  "manila",
  "moscow",
  "cairo",
  "jakarta",
  "kinshasa",
  "seoul",
  "dhaka",
  "tehran",
  "london",
  "lima",
  "bangkok",
  "bogota",
  "hanoi",
  "baghdad",
  "singapore",
  "ankara",
  "santiago",
  "riyadh",
  "berlin",
  "damascus",
  "algiers",
  "madrid",
  "pyongyang"
];

// Store the computer selected word in a variable:
var word = "";

// Store the # of letters in the selected word:
var letterCount = 0;

// Letters used in the chosen word
var lettersInWord = [];

// Keep track of remaining unanswered letters in an array by setting it to a variable.
//// var unansweredLetters = # of underscores remaining in a word
var unansweredLetters = [];

// Answer array to store both successfully guessed letters AND the remaining unansweredLetters (e.g. a _ _ a _ a)
var answerArray = [];

// Wrong-guess letters:
var wrongLetters = [];

// Set # of player's tries to a variable.  Max try is 5.
var guessesLeft = 0;

// # of Wins
var winCount = 0;

// # of Losses
var lossCount = 0;

// FUNCTIONS
// ====================================================================

function startGame() {
  // Pick a random word from the capitals array.
  word = capitals[Math.floor(Math.random() * capitals.length)];
  console.log("Randomly selected capital: " + word);

  lettersInWord = word.split("");
  console.log("Letters in the selected word: ", lettersInWord);

  letterCount = lettersInWord.length;
  console.log("# of letters in the selected word: ", letterCount);

  // Fill the answerArray with both successfully guessed letter AND underscores (for yet-to-be guessed letters)
  for (var i = 0; i < letterCount; i++) {
    answerArray[i] = " _ ";
    // answerArray.push(" _ ");
  }
  console.log("The selected word underscored: " + answerArray);

  // Reset values for each new round of the game
  guessesLeft = 5;
  wrongLetters = [];
  letterAndUnderscores = [];

  // Display answerArray with underscores in the 'wordDisplay' field on a page
  // Use .join() to omit commas between each underscores/letters
  document.getElementById("wordDisplay").innerHTML = answerArray.join("  ");

  // Display the # of Guess Tries Remaining
  document.getElementById("guessNumber").innerHTML = guessesLeft;

  // Display the # of Wins
  document.getElementById("winCounter").innerHTML = winCount;

  // Display the # of Losses
  document.getElementById("lossCounter").innerHTML = lossCount;
}

function checkLetters(letter) {
  // Check if guessed letter exists in the chosen word at all
  var letterExists = false;

  for (var i = 0; i < letterCount; i++) {
    if (word[i] == letter) {
      letterExists = true;
      alert("Yes, the letter found!");
    }
  }
  // Check where in the word the letter exists, then output updated answerArray.
  if (letterExists) {
    for (var i = 0; i < letterCount; i++) {
      if (word[i] == letter) {
        answerArray[i] = letter;
      }
    }
  }
  // Letter was NOT found in the word
  else {
    wrongLetters.push(letter);
    guessesLeft--;
  }
  console.log("Updated answerArray: ", answerArray);
};

function gameRoundComplete() {
  console.log("Win Count: " + winCount, "| Loss Count: " + lossCount, "| Guesses Remaining: " + guessesLeft);

  // Update the HTML to reflect the score updates:
  document.getElementById("guessNumber").innerHTML = guessesLeft;
  document.getElementById("wordDisplay").innerHTML = answerArray.join(" ");
  document.getElementById("wrongLetterUsed").innerHTML = wrongLetters.join(" ");

  // Check if the user has won the game
  if (lettersInWord.toString() == answerArray.toString()) {
    winCount++;
    alert("You Won!");
    
    // Update the win score:
    document.getElementById("winCounter").innerHTML = winCount;
    startGame();
  }
  // Check if the user has lost the game
  else if (guessesLeft == 0) {
    lossCount++;
    alert("You Lost...");

    // Update the loss score:
    document.getElementById("lossCounter").innerHTML = lossCount;
    startGame();
  }

};

// PROCESSES -- START THE GAME
// ====================================================================

// Run the function that starts when any key is clicked.
document.onkeyup = function(event) {
  // Convert letter key pressed into all lower case
  var letterClicked = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("A letter clicked: ", letterClicked);

  checkLetters(letterClicked);
  gameRoundComplete();
};
