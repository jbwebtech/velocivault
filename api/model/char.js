const Word = require("../words/model/word");
const WordType = require("../words/model/word-type");

class Char extends Word {
  constructor(char) {
    super(char, WordType.CHAR);
  }
}

module.exports = Char;