var Letter = require('./Letter.js');

function Word (newWord) {

    this.newWord = newWord.split("").map(function(character) { // Why is split not working
        return new Letter(character);
      });

    this.displayWord = function () {
        var currentGuess = [];

        for (i=0; i < this.newWord.length; i++) { 
           var letterToAdd = this.newWord[i].hideOrShow();
           currentGuess[i] = letterToAdd; 
        }
        return currentGuess.join(" ");
    };

    this.userGuess = function (guessLetter) {
        for (i = 0; i < this.newWord.length; i++) { 
            this.newWord[i].guessed(guessLetter);
        }
    };
}

module.exports = Word;

/*
var test = new Word ("red");

console.log(test)

test.userGuess("e");

console.log(test);
*/

