import Word from './word';
import WordType from './word-type';

export default class Verb extends Word {
  constructor(word: string) {
    super(word, WordType.VERB);
  }
}
