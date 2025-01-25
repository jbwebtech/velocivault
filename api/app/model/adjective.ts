import Word from './word';
import WordType from './word-type';

export default class Adjective extends Word {
  constructor(word: string) {
    super(word, WordType.ADJECTIVE);
  }
}
