const Word = require("../words/model/word");
const WordType = require("../words/model/word-type");

class Adverb extends Word {
  constructor(word) {
    super(word, WordType.ADVERB);
  }
}

module.exports = Adverb;