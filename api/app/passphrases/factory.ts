import Word from '../model/word';
import Library from '../model/library';
import Passphrase from '../model/passphrase';

export default class PassphraseFactory {
  constructor(private readonly library: Library) {}

  /**
   * Generates a passphrase by combining random words, numbers, and special characters.
   * The generated passphrase is encapsulated within a Passphrase instance.
   *
   * @param minLength - Minimum length of the passphrase.
   * @param maxLength - Maximum length of the passphrase.
   * @returns A Passphrase object containing the generated passphrase.
   */
  createPassphrase(minLength = 8, maxLength = 64) : Passphrase {
    const randomWords: Word[] = this.library.getRandomWords(3);
    const passphrase: string = randomWords
      .map(
        (word: Word) =>
          this.library
            .getSpecialCharacters(1)
            .map((word: Word) => word.word)
            .join("") +
          this.library.getRandomNumber(1).join("") +
          word.word.replace(/ /g, "") +
          this.library
            .getSpecialCharacters(1)
            .map((word: Word) => word.word)
            .join("") +
          this.library.getRandomNumber(3).join("")
      )
      .join("");
    return new Passphrase(passphrase);
  }
}
