const Word = require('./word');
const WordType = require('./word-type');

class Noun extends Word {
    constructor(word) {
        super(word, WordType.NOUN);
    }
}

module.exports = Noun;