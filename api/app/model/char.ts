import Word from './word';
import WordType from './word-type';

export default class Char extends Word {
  constructor(char: string) {
    super(char, WordType.CHAR);
  }
}
