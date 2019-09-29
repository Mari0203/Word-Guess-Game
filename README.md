# Word Guess Game
Web app game made with JavaScript leveraging HTML DOM methods for user inteaction handling.

## App Overview
The game uses the Hangman's Game logic--to have the player guess the hidden, randomly selected word by guessing one letter at a time.  The player loses the game when the number of incorrectly guessed letters exceeds 10.  The player wins the game when all letters in the word are guessed correctly before exceeding the allowed guess tries.

The app tracks the letters user has guessed successfully as well as incorrectly in order to update the number of guess tries user is allowed before losing the game round.  

## App Functionality

1. Player can start the game by clicking any key, or by licking on the "Let's Go" button below the image quotes.
2. A word--a name of the national capital is randomly selected at the start of the game from the array consisting of top 25 national capitals in the world by population.  (This list excludes non-single-word capitals.)
3. Key events are used to capture the letters that the player clicks for each guess.
4. The app keeps track of letters used--both guesses successefully and incorrectly--and updates the win/loss scores along with the list of used letters in the U/I display: 
    
    * If the randomly selected word is Berlin, for example, the app will display it like below when the game starts:
    ```
            _ _ _ _ _ _
    ```
    * As the user guesses the correct letters, the app reveals them like below example:
    ```
            b _ r l _ n
    ```
    * "Wins" --  # of times that the player has guessed the selected word correctly.
    * "Losses" -- # of times the player has failed to guess the letter correctly.
    * "Number of Guesses Remaining" -- # of allowed guesses remaining for the current game round.
    * "Wrong Letters Used" -- Incorrectly guessed letters that the player has used already for the round, displayed like below:
    ```
            L Z X P
    ```

5. When the player wins, it triggers the alert message and styling change to the fully spelled word display and the updated Win# to make them stand out.
6. After the player wins/loses, the new round starts with any key click, automatically chooses another randomly selected word while keeping the win/loss scores intact.
7. Player can clear all scores and re-start the game fresh by reloading the page.

## Technology Used

   * HTML
   * CSS
   * Bootstrap
   * JavaScript
   * HTML DOM methods

---

By Mari &copy; 2019
with :v:  &  :green_heart:
