var Letter = require('./Letter.js');

function Word (newWord) {

    this.newWord = newWord; // must be an array

    this.displayWord = function () {
        var currentGuess = [];

        for (i=0; i < this.newWord.length; i++) { 
           var letterToAdd = this.newWord[i].hideOrShow();
           currentGuess[i] = letterToAdd; // WHY DOES PUSH NOT WORK?
        }
        return currentGuess.join(" ");
    }

    this.userGuess = function (guessLetter) {
        for (i=0; i < this.newWord.length; i++) { 
            this.newWord[i].guessed();
        }
    }
}



/*
    B = new Letter ("B");
    L = new Letter ("L");
    U = new Letter ("U");
    E = new Letter ("E");

    add = [];

    add[0] = B;
    add[1] = L;
    add[2] = U;
    add[3] = E;

    var color = new Word (add);



//console.log(color.newWord);
// console.log(color.displayWord());

color.newWord[1].guessed("L"); // getting an undefinded error

console.log(color.displayWord());

console.log(color.newWord);
*/
