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

