
function Letter (character) {

    this.character = character,
    this.showLetter = false,

    this.hideOrShow = function () {
        if (this.showLetter) {
            return character;
        } else {
            return "_";
        }
    }
    
    this.guessed = function (guess) {
        if (guess === this.character) {
            this.showLetter = true;
        }
    }
}

module.exports = Letter;

/*
var D = new Letter ("D");

console.log("This should show D", D.character);
console.log("This should show false", D.showLetter);

var test1 = D.hideOrShow();

console.log("This should be an underscore", test1);

D.guessed("E");

console.log("This should show false", D.showLetter);

D.guessed("D");

console.log("This should show true", D.showLetter);
*/
