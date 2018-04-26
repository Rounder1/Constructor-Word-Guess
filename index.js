var Word = require('./Word.js');
var Letter = require('./Letter.js');
var inquirer = require('inquirer');

var listOfWords = ["red", "blue", "green"];
var wordsLeft = 3;
var color;
var randomWord;
var guessesLeft;
var guessesToWin;

function newGame () {
randomWord = listOfWords[Math.floor(Math.random() * listOfWords.length)];
guessesLeft = 10;
guessesToWin = randomWord.length;
color = new Word (randomWord);
console.log(color.displayWord());
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


  
  if () { // if guessed right
    console.log(color.displayWord());
    guessesToWin--;
  }

  if() { // if guessed wrong
    guessesLeft--;
    console.log("That is not right you have", guessesLeft, "guesses left.");
  }
 
  if(guessesToWin === 0) {
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
      console.log("you guessed all the colors!");
    }
  
  });
}

newGame();
ask();


