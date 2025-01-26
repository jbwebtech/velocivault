import Library from '../model/library';
import * as mockData from './mock-datastore';

export default class WordRepository {
  private readonly library: Library;

  constructor() {
    this.library = new Library();
    this.loadMockData();
  }

  private loadMockData(): void {
    this.library.addWords(mockData.getNouns());
    this.library.addWords(mockData.getVerbs());
    this.library.addWords(mockData.getAdverbs());
    this.library.addWords(mockData.getAdjectives());
    this.library.addSpecialCharacters(mockData.getSpecialCharacters());
    console.log("Mock data loaded: Words");
  }

  getLibrary(): Library {
    return this.library;
  }
}
