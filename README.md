# HWK 3: Word Guess Game
(Using Hangman's Game logics)

## Instructions

1. Choose a theme for your game! You can  choose any subject for your theme, though, so be creative!
2. Use key events to listen for the letters that your players will type.'
3. Display the following on the page: 
    * "Press any key to get started!"
    * "Wins:  "  (i.e. # of times that teh user guessed the word correctly)
        - [ ] If the word is madonna, for example, display it like below when the game starts:
          ```
          - - - - - - -
          ```
        - [ ] As the user guesses the correct letters, reveal them like below example:
        ```
        m a d o _ _ a
        ```
    * "Number of Guesses Remaining:  " (i.e. # of guesses remaining for the user)
    * "Letters Already Guessed:  " (i.e. Letters that the suer has guesssed, displayed like below):
    ```
    L Z A E
    ```

4. After the user wins/loses, the game shoudl automatically choose another word, and repeat the game.

## Bonus Challenges
1. Play a sound or song when the user guesses their word correctly, like in our demo.
2. Write some stylish CSS rules to make a design that fits your game's theme.
3. **HARD MODE:** Organize your game code as an object, except for the key events to get the letter guessed. This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
4.  Save your whole game and its properties in an object.
5.  Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
6.  Don't forget to place your global variables and functions above your object. (Remember: global variables, then objects, then calls.)
