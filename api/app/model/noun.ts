import Word from './word';
import WordType from './word-type';

export default class Noun extends Word {
  constructor(word: string) {
    super(word, WordType.NOUN);
  }
}

