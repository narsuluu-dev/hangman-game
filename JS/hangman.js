const prompt = require('prompt-sync')({sigint: true});  // instaling a package for a prompt to get the user input 
/**
 * Project Name: Hangman Game 
 * Project Description: This project is a console-based Hangman game built using pure JavaScript.  
 * The program randomly selects a word and the player must guess it one letter at a time before running out of attempts. 
 * If the guessed letter is correct, it is revealed in the word. If it is incorrect, the remaining attempts decrease.  
 * The game ends when the player either guesses the full word or reaches the maximum number of wrong guesses.

 * Student Name: Narsuluu Mamadinova 
 * 
 */ 



/**
 * 1. Create a list of possible words for the game
 * These words are programming and computer science related terms.
 */
const  possibleGuesses = [
    "computer", "algorithm", "database", "boolean",
    "flag", "variable", "programming", "cpu", "string", 
    "array", "float", "integer", "loop", "function", "method", 
    "class", "object", "debugging", "software", "hoisting", "scope", 
    "character", "closure"

]; 
/**  
 * 2. Select a random word from a list 
 * This function returns one randomly chosen word. 
 */ 
function getRandom(words){  
     // randomly select word 
     const randomIndx = Math.floor(Math.random() * words.length); 
     return words[randomIndx]; 
    } 


/** 3. Function that displays the word progress 
 * Letters that have been guessed are shown,
 * while the remaining letters appear as underscores.
 */

function displayWords(word, guessedWords) { 
    // variable to store guessed letter
   let result = ""; 
   // loop through the words and store while iterating
  for(let letter of word) {  
    // check if user has guessed a word
    if(guessedWords.includes(letter)){ 
        // add correct letter to the result.
        result += letter + " "; 
    } 
    else { 
        // otherwise leave it empty
        result+= "_ "; 

    } 
   } 
    // display the guessed letter to the console
   console.log(result);  
}
  


/**
 * 4. Main Function of the game
 * This function initializes the game variables, handles user guesses,
 * tracks remaining attempts, and controls the main game loop until
 * the player either wins or runs out of attempts.
 */
function startGame() {  

let word = getRandom(possibleGuesses); 
let guessedLetters = [];  

displayWords(word, guessedLetters); 

/**
 * Track the number of attempts user has left
 */
let attempts = 6; 

/** 
 * Welcom user and start the game
 */
console.log("Welcome to Hangman!");
console.log("You have 6 attempts to guess the word."); 

/** 
 * 5. Game Loop
 * Game continues until user is out of attempts
 * or gussed the word
 */ 
while(attempts > 0) {  
    // read the user input 
    let userInput = prompt("Enter a letter: ");  
    // automatically convert a user input to a lowecase if typed uppercase
    userInput = userInput.toLowerCase();
    // check if user's input valid, used RegExpr
    if(!/^[a-z]$/.test(userInput)) {
        console.log("Please enter only a valid letter (a-z)");  
        continue; 
    }  

    // if a letter already guessed 
    if(guessedLetters.includes(userInput)){
        console.log("You already guessed that letter"); 
        continue; 

    } 
    // store a word to a list, so it cannot be entered again 
    guessedLetters.push(userInput);  

    // check if a letter exists in the word 
    if(word.includes(userInput)) { 
        console.log("Correct Guess!"); 
    } 
    // otherwise show remain attempts if not exist 
    else{ 
        attempts--; 
        console.log("Wrong Guess! Attempts left: " + attempts); 
    } 


     displayWords(word, guessedLetters); 


    // check if user won 
    let won = true; 
    for(let letter of word) { 
        if(!guessedLetters.includes(letter)) { 
            // if not won set to false
            won = false;  
            break; 
          } 
        }  
        // if won display a message
        if(won) { 
            console.log("Congratulations! You guessed the word: " + word); 
            break; 
        } 
} 

      // if there are no attempts left display the correct word was
        if(attempts === 0) {
        console.log("Game Over!");
        console.log("The correct word was: " + word); 
        } 
        // end of program  

 } 

 startGame();  
 // call the function 

 