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

//an array of letters already used
var lettersUsed = [];

//starting value for remaining guesses
var remainingGuesses = 12;

//pick a random word 
var wordToGuess;

//letters remaining to be guessed
var remainingLetters;

//number of wins
var wins = 0;

function updateGuesses() {
    document.getElementById("triesLeft").innerHTML = "Remaining guesses: " + remainingGuesses;
};

function getNewWord(){
    return wordsToGuessArr[Math.floor(Math.random() * wordsToGuessArr.length)];
};

//create an array of "blanks" for each word and alert the user to pick a letter
function startGame(){
    wordToGuess = getNewWord();
    wordAnswerArr = [];

    remainingGuesses = 12;
    updateGuesses();

    lettersUsed =  [];
    document.getElementById("lettersUsed").innerHTML = "Letters Used: " + lettersUsed;

    for (var i = 0; i < wordToGuess.length; i++) {
        wordAnswerArr[i] = "_";
    };
    document.getElementById("lettersGuessed").innerHTML = wordAnswerArr.join("");
    //note how many letters are remaining to be guessed
    remainingLetters = wordToGuess.length;
    alert("Guess a letter, Precious, won't you?");
};

// run this function when the user presses a key
document.onkeyup = function(event) {
    // determine which key was pressed
    var userGuess = event.key;
    remainingGuesses--;
    // if the user enters a number, show this message
    if (isNaN(userGuess) === false) {
        alert("It will pick a letter, won't it? It will get the hose!");
    } 
    else {
        //user picked a letter, apply it to the word, update the score with the guess
        for (var j = 0; j < wordToGuess.length; j++) {
            
            if (wordToGuess[j] === userGuess) {
                //update "blank" with letter guessed
                wordAnswerArr[j] = wordToGuess[j];
                //lower remaining letters by 1
                remainingLetters--;
                document.getElementById("lettersGuessed").innerHTML = wordAnswerArr.join("");
            }
            else {
                //lower remaining tries by 1
                //show remaining guesses
                updateGuesses();
            };  
        };
    };
    lettersUsed.push(userGuess); 
    document.getElementById("lettersUsed").innerHTML = "Letters Used: " + lettersUsed;
    if (remainingLetters <= 0) {
        wins++;
        alert("Well done, no hose for you!")
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        startGame();
    }
    else if (remainingGuesses <= 0) {
        alert("Sorry, you lost the game. The word was " + wordToGuess);
        startGame();
    }
};
