const Word = require('./word');
const WordType = require('./word-type');

class Adverb extends Word {
    constructor(word) {
        super(word, WordType.ADVERB);
    }
}

module.exports = Adverb;