const Word = require("./word");
const WordType = require("./word-type");

class Library {
  /**
   * Creates a new Library object, which is a collection of all the words 
   * and special characters that can be used to generate passphrases.
   *
   * @constructor
   */
  constructor() {
    this.nouns = [];
    this.verbs = [];
    this.adverbs = [];
    this.adjectives = [];
    this.specialCharacters = [];
  }

  addSpecialCharacters(characters) {
    this.specialCharacters.push(...characters);
  }

  /**
   * Adds a word to the library. If the word is already an instance of Word,
   * it is directly added to the appropriate category list. Otherwise, the 
   * function attempts to determine the word's type, instantiate a new Word 
   * object, and then add it to the corresponding list based on its type.
   *
   * @param {Word|Object} word - The word to be added, either as an instance of 
   * Word or an object with 'word' and 'type' properties.
   * @throws Will log an error if the word type is invalid.
   */

  addWord(word) {
    if (word instanceof Word) {
      this.words.push(word);
    } else {
      const t = WordType[word.type.toUpperCase()];
      if (!t) {
        console.error(`Invalid word type: ${word.type}`);
        return;
      }
      const w = new Word(word.word, t);
      switch (t) {
        case WordType.NOUN:
          this.nouns.push(w);
          break;
        case WordType.VERB:
          this.verbs.push(w);
          break;
        case WordType.ADVERB:
          this.adverbs.push(w);
          break;
        case WordType.ADJECTIVE:
          this.adjectives.push(w);
          break;
      }
    }
  }

  addWords(words) {
    words.forEach((word) => this.addWord(word));
  }

  getWords() {
    return this;
  }

  getSpecialCharacters(num = 1) {
    let result = [];
    for (let i = 0; i < num; i++) {
      result.push(this.specialCharacters[Math.floor(Math.random() * this.specialCharacters.length)]);
    }
    return result;
  }

  getRandomNumber(num = 1) {
    let result = [];
    for (let i = 0; i < num; i++) {
      result.push(Math.floor(Math.random() * 10));
    }
    return result;
  }

  getRandomWords(num = 1, type = WordType.NONE) {
    switch (type) {
      case WordType.NOUN:
        return this.nouns[Math.floor(Math.random() * this.nouns.length)];
      case WordType.VERB:
        return this.verbs[Math.floor(Math.random() * this.verbs.length)];
      case WordType.ADVERB:
        return this.adverbs[Math.floor(Math.random() * this.adverbs.length)];
      case WordType.ADJECTIVE:
        return this.adjectives[
          Math.floor(Math.random() * this.adjectives.length)
        ];
      default:
        const allWords = [
          ...this.nouns,
          ...this.verbs,
          ...this.adverbs,
          ...this.adjectives,
        ];
        const randomWords = [];
        for (let i = 0; i < num; i++) {
          const randomIndex = Math.floor(Math.random() * allWords.length);
          randomWords.push(allWords.splice(randomIndex, 1)[0]);
        }
        return randomWords;
    }
  }
}

module.exports = Library;