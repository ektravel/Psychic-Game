"use strict" ;

//create an array of words
var wordsToGuessArr = [
    "hannibal",
    "lecter",
    "buffalo",
    "precious",
    "silence",
    "lamb",
    "liver",
    "eat",
    "lotion",
    "hose",
    "skin",
    "dinner"
];

//an array of "blanks" for a randomly picked word
var wordAnswerArr = [];

//pick a random word 
var wordToGuess = wordsToGuessArr[Math.floor(Math.random() * wordsToGuessArr.length)];

//create an array of "blanks" for each word 
function fillBlanks(){
    for (var i = 0; i < wordToGuess.length; i++) {
        wordAnswerArr[i] = "_";
    }
};

//Use key events to listen for the letters that your players will type.

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
// Determines which key was pressed.
    var userGuess = event.key;
}

//note how many letters are remaining to be guessed
var remainingLetters = wordsToGuess.length;
//while there are still letters left to guess: display the number of guesses left
//dispay the letters already guessed
//prompt the user to enter new guesses 
while(remainingLetters > 0) {
    document.write(answerArray.join(" "));
//show this message before user inputs a letter, check to make sure user's input is valid
    var guess = prompt("Guess a letter, Precious, won't you?");
//if the user does not want to play and clicks Cancel, the game ends
    if (guess === null) {
        break;
    } 
//if the user enters nothing or more than one letter, show this message
    else if (guess.length !== 1) {
        alert("It will pick a single letter, won't it? It will get the hose!");
    } 
    else {
    //user picked a letter, apply the letter to the word, update the score with the guess
        for (var j = 0; j < wordsToGuess.length; j++) {
            if (wordsToGuess[j] === guess) {
            wordAnswer[j] = guess;
            //lower remaining letters by 1
            remainingLetters--;
            }
        }
    }
}
//show remaining guesses
var remainingGuesses = document.getElementById("triesLeft");

