/**
 * Project Name: Hangman Game 
 * Project Description: This project is a console-based Hangman game built using pure JavaScript.  
 * The program randomly selects a word and the player must guess it one letter at a time before running out of attempts. 
 * If the guessed letter is correct, it is revealed in the word. If it is incorrect, the remaining attempts decrease.  
 * The game ends when the player either guesses the full word or reaches the maximum number of wrong guesses.

 * Student Name: Narsuluu Mamadinova 
 * 
 */ 

// where the program starts,creating steps and write the pseudocode first  
// 1. create  a list of possible guesses 
const  possibleGuesses = [
    "computer", "algorithm", "database", "boolean",
    "flag", "variable", "programming", "cpu", "string", 
    "array", "float", "integer", "loop", "funciton", "method", 
    "class", "object", "debugging", "software", "hoisting", "scope", 
    "character", "closure"

]; 
// 2. Select a random word from a list  
function getRandom(word){ 
    for(let i=0; i<word.length; i++) { 
     // randomly select word 
     constRandom = Math.floor(Math.random() * word.length); 
     return word[constRandom]; 
    } 

}
// 3.  Function that store user's correct guessed letters
function storeGuessedWords(word, guessedWords) { 
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
 
// 4. use while loop to track user's guesses and attempts remain  
let word = getRandom(possibleGuesses); 
let guessedLetters = []; 
// show attempts 
let attempts = 6
while(attempts > 0) {  
    // read the user input 
    let userInput = prompt("Enter a letter: ");  
    // convert a user input to a lowecase
    userInput = userInput.toLocaleLowerCase();
    // check if user's input valid 
    if(userInput.length!==1) { 
        console.log("Please enter only a letter");  
        continue; 
    }  

    // if a letter already guessed 
    if(guessedWords.includes(userInput)){
        console.log("You already guessed that letter"); 
        continue; 

    } 
    // add the letter to guessed letter list 
    guessedWords.push(userInput);  

    // check if a letter exists in the word 
    if(guessedWords.includes(userInput)) { 
        console.log("Correct Guess!"); 
    } 
    else{ 
        attempts--; 
        console.log("Wrong Guess! Attempts left: " + attempts); 
    } 

    // display current word progress 
    storeGuessedWords(word, guessedWords);  

    // check if user won 
    let won = true; 
    for(let letter of word) { 
        if(!guessedWords.includes(letter)) { 
            // if not won set to false
            won = false;  
            // break the program
            break; 
            
        
           } 
        }  
        
        if(won) { 
            console.log("Congratulations! You guessed the word: " + word); 
            break; 
        }

        
    }




     

//  -  Ask the player to enter a letter - done 
//  - if input is not a valid letter  - done 
//  - display error message  - done 
//  - continue  - done

//   if a letter  was already guessed  - done 
//  - display a message, like already guessed  - done
//  - continue to next loop - done

// add the letter to guessed letters list  - done

//  if lettr exists in the word  - done
//  display correct guess - done 
// otherwise , wrong guess - done 

// if the guessed, display a message  - done 

// end while 
// if attempts are reached 0 
// display message 
// display the correct word 

// end the program 