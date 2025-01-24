const Word = require('./word');
const WordType = require('./word-type');

class Adjective extends Word {
    constructor(word) {
        super(word, WordType.ADJECTIVE);
    }
}

module.exports = Adjective;