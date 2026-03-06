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
    "class", "object", "debugging", "software", "hoisting", ""



]
// 2. Select a random word from a list 
// 3. Create an empty list to store the guessed worrds
// 4. use while loop to track user's guesses 
//  - disply the current word with guessed letters 
//  - show remaining attempts 
//  -  Ask the player to enter a letter 
//  - if input is not a valid letter 
//  - display error message 
//  - continue 

//   if a letter  was already guessed 
//  - display a message, like already guessed 
//  - continue to next loop 

// add the letter to guessed letters list 

//  if lettr exists in the word 
//  display correct guess 
// otherwise , wrong guess

// if the guessed, display a message  

// end while 
// if attempts are reached 0 
// display message 
// display the correct word 

// end the program 