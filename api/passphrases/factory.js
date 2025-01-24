const Passphrase = require("../model/passphrase");

class PassphraseFactory {
  constructor(library) {
    this.library = library;
  }

  /**
   * Generates a passphrase by combining random words, numbers, and special characters.
   * The generated passphrase is encapsulated within a Passphrase instance.
   * 
   * @param {number} minLength - The minimum length of the passphrase.
   * @param {number} maxLength - The maximum length of the passphrase.
   * @returns {Passphrase} A Passphrase instance containing the generated passphrase.
   */

  createPassphrase(minLength = 8, maxLength = 64) {
    const randomWords = this.library.getRandomWords(3);
    const passphrase = randomWords
      .map(
        (word) =>
          this.library
            .getSpecialCharacters(1)
            .map((word) => word.word)
            .join("") +
          this.library.getRandomNumber(1).join("") +
          word.word.replace(/ /g, "") +
          this.library
            .getSpecialCharacters(1)
            .map((word) => word.word)
            .join("") +
          this.library.getRandomNumber(3).join("")
      )
      .join("");
    return new Passphrase(passphrase);
  }
}

module.exports = PassphraseFactory;
