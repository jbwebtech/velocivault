import Word from './word';
import WordType from './word-type';

export default class Adverb extends Word {
  constructor(word: string) {
    super(word, WordType.ADVERB);
  }
}
