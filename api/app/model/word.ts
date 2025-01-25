import WordType from './word-type';

export default class Word {
  constructor(public readonly word: string, public readonly type: WordType = WordType.NONE) {}
}
