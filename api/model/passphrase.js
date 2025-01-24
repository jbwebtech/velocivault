class Passphrase {
  /**
   * Creates a new Passphrase object, which tests the given passphrase
   * for length, and the presence of uppercase letters, lowercase letters,
   * numbers, special characters, and whitespace.
   *
   * @param {string} passphrase
   */
  constructor(passphrase) {
    if (!passphrase || !passphrase.trim()) {
      throw new Error("Invalid passphrase!");
    }
    this.passphrase = passphrase;
    this.length = passphrase.length;
    this.containsUpper = /[A-Z]/.test(passphrase);
    this.containsLower = /[a-z]/.test(passphrase);
    this.containsNumber = /[0-9]/.test(passphrase);
    this.containsSpecial = /[^A-Za-z0-9]/.test(passphrase);
    this.containsWhitespace = /\s/.test(passphrase);
  }
}

module.exports = Passphrase;