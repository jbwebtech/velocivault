const Word = require("../words/model/word");
const WordType = require("../words/model/word-type");

class Adjective extends Word {
  constructor(word) {
    super(word, WordType.ADJECTIVE);
  }
}

module.exports = Adjective;