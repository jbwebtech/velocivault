const Word = require("./word");
const WordType = require("./word-type");

class Verb extends Word {
  constructor(word) {
    super(word, WordType.VERB);
  }
}

module.exports = Verb;