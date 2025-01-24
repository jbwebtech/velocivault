const WordType = require('./word-type');

class Word {
    constructor(word, type = WordType.NONE) {
        this.word = word;
        this.type = type;
    }
}

module.exports = Word;