var Word = require('./Word.js');
var Letter = require('./Letter.js');
var inquirer = require('inquirer');

var listOfWords = ["red", "blue", "green", "white", "black", "yellow", "orange", "brown", "purple", "pink", "gray"];
var wordsLeft = 3;
var color;
var randomWord;
var guessesLeft;
var guessesToWin;
var guessedLetters;

function newGame () {
randomWord = listOfWords[Math.floor(Math.random() * listOfWords.length)];
guessedLetters = [];
guessesLeft = 10;
guessesToWin = randomWord.length;
color = new Word (randomWord);
console.log(color.displayWord());
}

function playGame (letterIn) {

  if ( randomWord.includes(letterIn) && !guessedLetters.includes(letterIn) ){
    guessedLetters.push(letterIn);
    return true;
  } else {
    return false;
  }
}


// make a loop that loops through all the letter proporites to see if any of them are false and if not returns true
function victory () {

  var checkIfFalse = true;

  for (i = 0; i < color.newWord.length; i++) {
    if (!color.newWord[i].showLetter) {
      checkIfFalse = false;
    } 
  }

  if (checkIfFalse) {
    return true;
  } else {
    return false;
  }
}


var questions = [
  {
    type: 'input',
    name: 'userLetterGuess',
    message: "Guess a letter."
  }
];

function ask() {
  inquirer.prompt(questions)
  .then(answers => {

  color.userGuess(answers.userLetterGuess);

  var rightOrWrong = playGame(answers.userLetterGuess);
  var isVictory = victory();
 

  if (rightOrWrong) { // if guessed right
    console.log(color.displayWord());
    guessesToWin--;
  }

  if(!rightOrWrong) { // if guessed wrong
    guessesLeft--;
    console.log("That is not right you have", guessesLeft, "guesses left.");
  }
 
  if(isVictory) { // check to see if the property returning loop returns true here
    console.log("You Win");
    newGame();
    wordsLeft--;
  }

  if(guessesLeft === 0) {
    console.log("You Lose");
    newGame();
    wordsLeft--;
  }

  if (wordsLeft > 0) { // need to make sure you don't start a game and end the game at the same time
    ask();
    } else {
      console.log("That's 3 rounds, restart to play again!");
    }
  
  });
}

newGame();
ask();

